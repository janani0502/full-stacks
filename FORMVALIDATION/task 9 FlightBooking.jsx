FlightBooking.jsx
import React from "react";

function FlightBooking() {
  const handleBooking = () => {
    // Step 1: Ask user's name
    const name = prompt("Welcome to FlyHigh Airlines! Please enter your full name:");

    if (!name) {
      alert("Booking cancelled. Please try again.");
      return;
    }

    // Step 2: Ask number of tickets
    const tickets = prompt(`Hi ${name}, how many tickets would you like to book? (Enter a number)`);

    const numTickets = parseInt(tickets, 10);

    if (!tickets || isNaN(numTickets) || numTickets <= 0) {
      alert("Invalid number of tickets. Booking cancelled.");
      return;
    }

    // Step 3: Confirm booking details
    const confirmed = confirm(
      `Please confirm your booking details:\n\n` +
      `Name: ${name}\n` +
      `Number of Tickets: ${numTickets}\n\n` +
      `Click OK to confirm or Cancel to abort.`
    );

    // Step 4: Final message
    if (confirmed) {
      alert(`Thank you, ${name}! Your booking for ${numTickets} ticket(s) is confirmed. Have a safe flight! ✈️`);
    } else {
      alert("Booking cancelled. Feel free to book anytime.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>FlyHigh Airlines Ticket Booking</h2>
      <button onClick={handleBooking} style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
        Book Flight Tickets
      </button>
    </div>
  );
}

export default FlightBooking;
