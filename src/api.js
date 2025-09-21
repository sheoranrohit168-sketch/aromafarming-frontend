const API_URL = "http://localhost:5000"; // backend URL

// Example: Get a welcome message
export async function getMessage() {
  const res = await fetch(`${API_URL}/api/message`);
  return res.json();
}

// Example: Submit contact form
export async function sendContact(data) {
  const res = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

// Example: Chat with AI bot
export async function chatWithBot(message) {
  const res = await fetch(`${API_URL}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });
  return res.json();
}
