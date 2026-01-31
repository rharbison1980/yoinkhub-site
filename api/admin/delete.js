import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { type, id, secret } = req.body || {};

  if (!process.env.ADMIN_SECRET || secret !== process.env.ADMIN_SECRET) {
    return res.status(403).json({ error: 'Invalid admin secret.' });
  }

  if (!type || !id) {
    return res.status(400).json({ error: 'Type and ID are required.' });
  }

  const itemId = parseInt(id, 10);
  if (isNaN(itemId)) {
    return res.status(400).json({ error: 'Invalid ID.' });
  }

  const sql = neon(process.env.DATABASE_URL);

  try {
    if (type === 'thread') {
      // Soft-delete thread and all its replies
      await sql`UPDATE threads SET deleted = true WHERE id = ${itemId}`;
      await sql`UPDATE replies SET deleted = true WHERE thread_id = ${itemId}`;
      return res.status(200).json({ success: true, message: 'Thread deleted.' });
    }

    if (type === 'reply') {
      await sql`UPDATE replies SET deleted = true WHERE id = ${itemId}`;
      return res.status(200).json({ success: true, message: 'Reply deleted.' });
    }

    return res.status(400).json({ error: 'Type must be "thread" or "reply".' });
  } catch (error) {
    console.error('[Admin Delete] Error:', error);
    return res.status(500).json({ error: 'Failed to delete.' });
  }
}
