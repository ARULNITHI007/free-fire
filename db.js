import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  ssl: {
    rejectUnauthorized: true, // required by Clever Cloud
  },
});

db.connect((err) => {
  if (err) {
    console.error("❌ DB Connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL");
  }
});

export default db;
