// test-request.js
const fetch = require("node-fetch");

async function sendTest() {
  try {
    const res = await fetch("http://localhost:3000/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Ivan",
        email: "ivan@example.com",
        message: "test"
      })
    });

    const data = await res.json();
    console.log("Status:", res.status);
    console.log("Response:", data);
  } catch (err) {
    console.error("Error:", err);
  }
}

sendTest();
