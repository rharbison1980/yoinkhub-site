import { neon } from '@neondatabase/serverless';
import { createClerkClient, verifyToken } from '@clerk/backend';

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
      // Skip failed lookups
    }
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const user = await getAuthUser(req);
  if (!user) {
    return res.status(401).json({ error: 'Sign in to reply.' });
  }

  const { thread_id, message } = req.body || {};
  const threadId = parseInt(thread_id, 10);

  if (isNaN(threadId) || !message?.trim()) {
    return res.status(400).json({ error: 'Thread ID and message are required.' });
  }

  const sql = neon(process.env.DATABASE_URL);

  try {
    // Verify thread exists and isn't deleted
    const threads = await sql`
      SELECT id, title FROM threads WHERE id = ${threadId} AND deleted = false
    `;
    if (threads.length === 0) {
      return res.status(404).json({ error: 'Thread not found.' });
    }

    const result = await sql`
      INSERT INTO replies (thread_id, user_id, display_name, message)
      VALUES (${threadId}, ${user.userId}, ${user.displayName}, ${message.trim()})
      RETURNING *
    `;

    // Send @mention notifications (non-blocking)
    sendMentionNotifications(message, user.displayName, threadId, threads[0].title);

    return res.status(201).json(result[0]);
  } catch (error) {
    console.error('[Replies POST] Error:', error);
    return res.status(500).json({ error: 'Failed to post reply.' });
  }
}
