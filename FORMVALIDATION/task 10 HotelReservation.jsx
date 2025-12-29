HotelReservation.jsx
import React, { useState } from "react";
import "./styles.css";

function HotelReservation() {
  const [name, setName] = useState("");
  const [roomType, setRoomType] = useState("");
  const [nights, setNights] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !roomType || !nights || nights <= 0) {
      setMessage("❌ Please fill all fields correctly.");
      return;
    }

    setMessage(
      `✅ Thank you, ${name}! Your ${roomType} room has been reserved for ${nights} night(s). We look forward to your stay! 🏨`
    );

    // Reset form
    setName("");
    setRoomType("");
    setNights("");
  };

  return (
    <div className="container">
      <h2>GrandStay Hotel Reservation</h2>
      <form className="reservation-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
          <option value="">Select Room Type</option>
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Suite">Suite</option>
        </select>

        <input
          type="number"
          placeholder="Number of Nights"
          value={nights}
          onChange={(e) => setNights(e.target.value)}
          min="1"
        />

        <button type="submit">Reserve Now</button>
      </form>

      {message && <div className="message">{message}</div>}
    </div>
  );
}

export default HotelReservation;

style.css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #74ebd5, #acb6e5);
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

.reservation-form input,
.reservation-form select {
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
}

.reservation-form button {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #6a82fb;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

.reservation-form button:hover {
  background: #5a6ffb;
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
import HotelReservation from "./HotelReservation";

function App() {
  return (
    <div>
      <HotelReservation />
    </div>
  );
}

export default App;
