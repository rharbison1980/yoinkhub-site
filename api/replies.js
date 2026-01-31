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

async function notifyParticipants(sql, threadId, threadTitle, replyAuthor, messagePreview) {
  if (!process.env.RESEND_API_KEY) return;

  try {
    const clerk = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

    // Get all unique participant user_ids (thread author + reply authors), excluding the current poster
    const participants = await sql`
      SELECT DISTINCT user_id FROM (
        SELECT user_id FROM threads WHERE id = ${threadId} AND deleted = false
        UNION
        SELECT user_id FROM replies WHERE thread_id = ${threadId} AND deleted = false
      ) AS all_users
      WHERE user_id != ${replyAuthor.userId}
    `;

    const emailsToNotify = new Set();

    // Also notify admin
    if (process.env.NOTIFY_EMAIL) {
      emailsToNotify.add(process.env.NOTIFY_EMAIL);
    }

    // Look up each participant's email via Clerk
    for (const row of participants) {
      try {
        const u = await clerk.users.getUser(row.user_id);
        const email = u.emailAddresses[0]?.emailAddress;
        if (email && email !== replyAuthor.email) {
          emailsToNotify.add(email);
        }
      } catch {
        // Skip if user lookup fails
      }
    }

    // Remove the reply author's own email
    emailsToNotify.delete(replyAuthor.email);

    if (emailsToNotify.size === 0) return;

    const preview = messagePreview.substring(0, 200) + (messagePreview.length > 200 ? '...' : '');

    for (const email of emailsToNotify) {
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'YoinkHub Community <noreply@yoinkhub.com>',
          to: email,
          subject: `New reply in "${threadTitle}"`,
          html: `
            <p><strong>${replyAuthor.displayName}</strong> replied in the thread <strong>"${threadTitle}"</strong>:</p>
            <blockquote style="border-left: 3px solid #ccc; padding-left: 12px; color: #555;">${preview}</blockquote>
            <p><a href="https://yoinkhub.com/community/thread/${threadId}">View the thread</a></p>
          `,
        }),
      }).catch(() => {});
    }
  } catch {
    // Non-blocking — don't fail the reply if notifications error
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

    // Notify thread participants (non-blocking)
    notifyParticipants(sql, threadId, threads[0].title, user, message.trim());

    return res.status(201).json(result[0]);
  } catch (error) {
    console.error('[Replies POST] Error:', error);
    return res.status(500).json({ error: 'Failed to post reply.' });
  }
}
