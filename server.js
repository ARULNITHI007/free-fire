require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db'); // ✅ Use your db.js connection

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Test route
app.get('/', (req, res) => {
  res.send('Backend running successfully on Render + Clever Cloud!');
});

// ✅ Example route to insert a user
app.post('/register', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Missing email or password' });
  }

  const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
  db.query(query, [email, password], (err) => {
    if (err) {
      console.error('❌ Insert failed:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json({ message: '✅ Successfully registered!' });
  });
});

// ✅ Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
