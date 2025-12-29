EventRegistration.jsx
import React, { useState } from "react";
import "./styles.css";

function EventRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [event, setEvent] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !event) {
      alert("Please fill all the fields.");
      return;
    }

    const confirmed = window.confirm(
      `Please confirm your registration details:\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Event: ${event}\n\n` +
        `Click OK to confirm or Cancel to abort.`
    );

    if (confirmed) {
      setMessage(`✅ Thank you, ${name}! You have successfully registered for the ${event} event.`);
      // Clear the form
      setName("");
      setEmail("");
      setEvent("");
    } else {
      setMessage("❌ Registration cancelled. You can try again anytime.");
    }
  };

  return (
    <div className="container">
      <h2>Event Registration</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <select value={event} onChange={(e) => setEvent(e.target.value)}>
          <option value="">Select Event</option>
          <option value="Tech Conference">Tech Conference</option>
          <option value="Music Festival">Music Festival</option>
          <option value="Art Workshop">Art Workshop</option>
        </select>

        <button type="submit">Register</button>
      </form>

      {message && <div className="message">{message}</div>}
    </div>
  );
}

export default EventRegistration;

 style.css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #ffecd2, #fcb69f);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background: white;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  width: 350px;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
  color: #333;
}

.registration-form input,
.registration-form select {
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
}

.registration-form button {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #ff7e5f;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

.registration-form button:hover {
  background: #ff5e3a;
}

.message {
  margin-top: 20px;
  padding: 12px;
  border-radius: 8px;
  background: #e0f7fa;
  color: #00695c;
  font-weight: bold;
}

app.jsx

import EventRegistration from "./EventRegistration";

function App() {
  return (
    <div>
      <EventRegistration />
    </div>
  );
}

export default App;
