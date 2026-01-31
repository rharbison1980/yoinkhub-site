import { neon } from '@neondatabase/serverless';
import { createClerkClient, verifyToken } from '@clerk/backend';

const sql_db = () => neon(process.env.DATABASE_URL);

async function getAuthUser(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) return null;

  try {
    const token = authHeader.split(' ')[1];
    const clerk = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });
    const payload = await verifyToken(token, {
      secretKey: process.env.CLERK_SECRET_KEY,
    });
    const user = await clerk.users.getUser(payload.sub);
    return {
      userId: user.id,
      displayName: [user.firstName, user.lastName].filter(Boolean).join(' ') || user.emailAddresses[0]?.emailAddress?.split('@')[0] || 'Anonymous',
      email: user.emailAddresses[0]?.emailAddress,
    };
  } catch {
    return null;
  }
}

async function sendMentionNotifications(message, authorName, threadId, threadTitle) {
  const mentions = message.match(/@[\w]+(?:\s[\w]+)?/g);
  if (!mentions || !process.env.RESEND_API_KEY) return;

  const clerk = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

  for (const mention of mentions) {
    const name = mention.slice(1).trim();
    try {
      const users = await clerk.users.getUserList({ query: name, limit: 1 });
      if (users.data.length === 0) continue;

      const mentionedUser = users.data[0];
      const email = mentionedUser.emailAddresses[0]?.emailAddress;
      if (!email) continue;

      // Fire and forget
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'YoinkHub Community <noreply@yoinkhub.com>',
          to: email,
          subject: `${authorName} mentioned you in "${threadTitle}"`,
          html: `
            <p>Hey ${mentionedUser.firstName || 'there'},</p>
            <p><strong>${authorName}</strong> mentioned you in the thread <strong>"${threadTitle}"</strong>.</p>
            <p><a href="https://yoinkhub.com/community/thread/${threadId}">View the thread</a></p>
          `,
        }),
      }).catch(() => {});
    } catch {
      // Skip failed lookups silently
    }
  }
}

export default async function handler(req, res) {
  const sql = sql_db();

  // GET — list all threads
  if (req.method === 'GET') {
    try {
      const { category } = req.query;

      let threads;
      if (category && category !== 'All') {
        threads = await sql`
          SELECT
            t.id, t.user_id, t.display_name, t.title, t.category, t.message, t.created_at,
            COUNT(r.id) FILTER (WHERE r.deleted = false) AS reply_count,
            GREATEST(t.created_at, MAX(r.created_at)) AS last_activity
          FROM threads t
          LEFT JOIN replies r ON r.thread_id = t.id
          WHERE t.deleted = false AND t.category = ${category}
          GROUP BY t.id
          ORDER BY last_activity DESC NULLS LAST
        `;
      } else {
        threads = await sql`
          SELECT
            t.id, t.user_id, t.display_name, t.title, t.category, t.message, t.created_at,
            COUNT(r.id) FILTER (WHERE r.deleted = false) AS reply_count,
            GREATEST(t.created_at, MAX(r.created_at)) AS last_activity
          FROM threads t
          LEFT JOIN replies r ON r.thread_id = t.id
          WHERE t.deleted = false
          GROUP BY t.id
          ORDER BY last_activity DESC NULLS LAST
        `;
      }

      return res.status(200).json(threads);
    } catch (error) {
      console.error('[Threads GET] Error:', error);
      return res.status(500).json({ error: 'Failed to fetch threads.' });
    }
  }

  // POST — create a thread
  if (req.method === 'POST') {
    const user = await getAuthUser(req);
    if (!user) {
      return res.status(401).json({ error: 'Sign in to create a thread.' });
    }

    const { title, category, message } = req.body || {};

    if (!title?.trim() || !category?.trim() || !message?.trim()) {
      return res.status(400).json({ error: 'Title, category, and message are required.' });
    }

    if (title.trim().length > 200) {
      return res.status(400).json({ error: 'Title must be 200 characters or less.' });
    }

    try {
      const result = await sql`
        INSERT INTO threads (user_id, display_name, title, category, message)
        VALUES (${user.userId}, ${user.displayName}, ${title.trim()}, ${category.trim()}, ${message.trim()})
        RETURNING *
      `;

      const thread = result[0];

      // Send @mention notifications (non-blocking)
      sendMentionNotifications(message, user.displayName, thread.id, title.trim());

      return res.status(201).json(thread);
    } catch (error) {
      console.error('[Threads POST] Error:', error);
      return res.status(500).json({ error: 'Failed to create thread.' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
