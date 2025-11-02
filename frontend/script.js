// Replace YOUR_RENDER_URL with your actual Render backend URL (including https://)
const BACKEND_URL = "https://YOUR_RENDER_URL"; // e.g. https://yourapp.onrender.com

document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const status = document.getElementById("status");
  status.textContent = "";
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch(BACKEND_URL + "/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    if (res.ok) {
      status.style.color = "green";
      status.textContent = "✅ Successfully submitted!";
      document.getElementById("registerForm").reset();
    } else {
      const text = await res.text();
      status.style.color = "red";
      status.textContent = "❌ Submission failed: " + text;
    }
  } catch (err) {
    status.style.color = "red";
    status.textContent = "❌ Network error: " + err.message;
  }
});
