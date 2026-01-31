import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const sql = neon(process.env.DATABASE_URL);

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS threads (
        id SERIAL PRIMARY KEY,
        user_id VARCHAR(100) NOT NULL,
        display_name VARCHAR(100) NOT NULL,
        title VARCHAR(200) NOT NULL,
        category VARCHAR(50) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        deleted BOOLEAN DEFAULT FALSE
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS replies (
        id SERIAL PRIMARY KEY,
        thread_id INTEGER NOT NULL REFERENCES threads(id) ON DELETE CASCADE,
        user_id VARCHAR(100) NOT NULL,
        display_name VARCHAR(100) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        deleted BOOLEAN DEFAULT FALSE
      )
    `;

    // Create indexes (IF NOT EXISTS for indexes requires Postgres 9.5+)
    await sql`CREATE INDEX IF NOT EXISTS idx_threads_created ON threads(created_at DESC)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_threads_category ON threads(category)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_replies_thread ON replies(thread_id)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_replies_created ON replies(created_at ASC)`;

    return res.status(200).json({ success: true, message: 'Tables and indexes created.' });
  } catch (error) {
    console.error('[Setup] Error:', error);
    return res.status(500).json({ error: 'Failed to create tables.', details: error.message });
  }
}
