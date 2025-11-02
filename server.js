require("dotenv").config();
const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ PostgreSQL connection setup
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // Render requires SSL
});

pool.connect()
  .then(() => console.log("✅ Connected to Render PostgreSQL Database"))
  .catch(err => console.error("❌ Database connection failed:", err));

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Backend connected with Render PostgreSQL!");
});

// ✅ Example: Store user info
app.post("/register", async (req, res) => {
  const { userid, password } = req.body;
  try {
    await pool.query("INSERT INTO users (userid, password) VALUES ($1, $2)", [userid, password]);
    res.send("✅ Successfully submitted!");
  } catch (error) {
    console.error("❌ Insert error:", error);
    res.status(500).send("Database error");
  }
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`🚀 Server running on port ${process.env.PORT || 8080}`);
});
