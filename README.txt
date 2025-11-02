Free Fire Registration — Ready-to-deploy project

Contents:
- frontend/
  - index.html
  - style.css
  - script.js
  - garena_logo.jpg (if provided)

- backend/
  - package.json
  - server.js
  - db.js
  - .env  (contains your Clever Cloud credentials for local testing)

Instructions:

1) Frontend (Neocities)
 - Upload everything inside the frontend/ folder to your Neocities site root.
 - Open frontend/script.js and replace the value of BACKEND_URL with your Render service URL:
     const BACKEND_URL = "https://yourapp.onrender.com";

2) Backend (Render)
 - Push the backend/ folder to a GitHub repo, or upload a ZIP in Render.
 - On Render create a new Web Service (Node).
 - Build command: npm install
 - Start command: npm start
 - IMPORTANT: On Render's Dashboard > Environment, set these environment variables (you can delete .env from the server if you prefer):
     DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT
 - Deploy. Copy the Render service URL and paste it into frontend/script.js.

3) Clever Cloud (MySQL)
 - You already have the DB ready. The credentials are included in backend/.env for local testing.
 - Make sure the 'users' table exists:
   CREATE TABLE users (
     id INT AUTO_INCREMENT PRIMARY KEY,
     email VARCHAR(255),
     password VARCHAR(255)
   );

Security notes:
 - Currently passwords are stored in plaintext for simplicity. For production, hash passwords before storing (bcrypt).
 - Do not commit .env with real credentials to a public Git repo.

If you want, I can:
 - Hash passwords automatically in the backend
 - Create a GitHub repo structure for direct Render deployment
 - Remove .env and show you how to set Render environment variables

