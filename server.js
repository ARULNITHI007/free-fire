const express = require("express");
const cors = require("cors");
require("dotenv").config();
const pool = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("✅ Backend connected to PostgreSQL!");
});

app.post("/register", async (req, res) => {
  const { userid, password } = req.body;
  try {
    await pool.query("INSERT INTO users (userid, password) VALUES ($1, $2)", [userid, password]);
    res.send("✅ Successfully submitted!");
  } catch (err) {
    console.error("❌ Insert Error:", err);
    res.status(500).send("Database Error");
  }
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`🚀 Server running on port ${process.env.PORT || 8080}`);
});
