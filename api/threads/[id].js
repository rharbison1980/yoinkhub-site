import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { id } = req.query;
  const threadId = parseInt(id, 10);
  if (isNaN(threadId)) {
    return res.status(400).json({ error: 'Invalid thread ID.' });
  }

  const sql = neon(process.env.DATABASE_URL);

  try {
    // Fetch thread
    const threads = await sql`
      SELECT id, user_id, display_name, title, category, message, created_at
      FROM threads
      WHERE id = ${threadId} AND deleted = false
    `;

    if (threads.length === 0) {
      return res.status(404).json({ error: 'Thread not found.' });
    }

    // Fetch replies
    const replies = await sql`
      SELECT id, user_id, display_name, message, created_at
      FROM replies
      WHERE thread_id = ${threadId} AND deleted = false
      ORDER BY created_at ASC
    `;

    return res.status(200).json({
      ...threads[0],
      replies,
    });
  } catch (error) {
    console.error('[Thread Detail] Error:', error);
    return res.status(500).json({ error: 'Failed to fetch thread.' });
  }
}
