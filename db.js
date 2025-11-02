require("dotenv").config();
const { Pool } = require("pg");

// ✅ Create PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // Render requires SSL connection
});

// ✅ Test the database connection
pool.connect()
  .then(() => console.log("✅ PostgreSQL Connected Successfully!"))
  .catch(err => console.error("❌ PostgreSQL Connection Failed:", err));

module.exports = pool;
