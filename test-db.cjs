const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql://neondb_owner:npg_qdFJARicT8X2@ep-nameless-dream-aidlbuu8-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
});

async function run() {
  try {
    await client.connect();
    console.log('Connected successfully!');

    const res = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `);

    console.log('Tables found:', res.rows.length);
    console.log(res.rows);
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    await client.end();
  }
}

run();