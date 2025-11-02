const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS, // ✅ use DB_PASS (not DB_PASSWORD)
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  ssl: {
    rejectUnauthorized: false // ✅ allows Clever Cloud SSL
  }
});

connection.connect((err) => {
  if (err) {
    console.error('❌ DB Connection failed:', err);
  } else {
    console.log('✅ MySQL Connected successfully!');
  }
});

module.exports = connection;
