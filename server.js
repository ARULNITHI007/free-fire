const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// PostgreSQL connection
const pool = new Pool({
  user: "mydb_n9u3_user",
  host: "dpg-d43mp9ripnbc73c3megg-a.oregon-postgres.render.com",
  database: "mydb_n9u3",
  password: "cnylY5tPYj914ViSSUSi5XR1dZC2WbRU",
  port: 5432,
  ssl: {
    rejectUnauthorized: false
  }
});

// Test DB connection
pool.connect()
  .then(() => console.log("✅ PostgreSQL connected successfully"))
  .catch(err => console.error("❌ PostgreSQL Connection Failed:", err));

app.post("/register", async (req, res) => {
  const { userid, password } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO users (userid, password) VALUES ($1, $2) RETURNING *",
      [userid, password]
    );
    res.status(200).send("✅ Successfully Submitted!");
  } catch (err) {
    console.error("❌ Insert Error:", err);
    res.status(500).send("Error inserting data");
  }
});

app.listen(3000, () => {
  console.log("🚀 Server running on port 3000");
});
