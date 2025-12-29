CabBooking.jsx
import React from "react";

function CabBooking() {
  const handleBooking = () => {
    // Step 1: Get user's name
    const name = prompt("Welcome to QuickCab! Please enter your name:");
    if (!name) {
      alert("Booking cancelled. Please try again.");
      return;
    }

    // Step 2: Get pickup location
    const pickup = prompt("Enter your pickup location:");
    if (!pickup) {
      alert("Booking cancelled. Pickup location is required.");
      return;
    }

    // Step 3: Get drop location
    const drop = prompt("Enter your drop location:");
    if (!drop) {
      alert("Booking cancelled. Drop location is required.");
      return;
    }

    // Step 4: Select cab type
    const cabType = prompt(
      "Select cab type:\n1. Mini\n2. Sedan\n3. SUV\n(Enter 1, 2, or 3)"
    );

    const cabMap = {
      "1": "Mini",
      "2": "Sedan",
      "3": "SUV",
    };

    if (!cabType || !cabMap[cabType]) {
      alert("Invalid cab type. Booking cancelled.");
      return;
    }

    // Step 5: Confirm booking details
    const confirmed = confirm(
      `Please confirm your cab booking details:\n\n` +
        `Name: ${name}\n` +
        `Pickup: ${pickup}\n` +
        `Drop: ${drop}\n` +
        `Cab Type: ${cabMap[cabType]}\n\n` +
        `Click OK to confirm or Cancel to abort.`
    );

    // Step 6: Show final message
    if (confirmed) {
      alert(
        `Thank you, ${name}! Your ${cabMap[cabType]} cab from ${pickup} to ${drop} has been booked. 🚖`
      );
    } else {
      alert("Booking cancelled. Feel free to book anytime.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>QuickCab Booking</h2>
      <button
        onClick={handleBooking}
        style={{ padding: "12px 25px", fontSize: "16px", cursor: "pointer" }}
      >
        Book a Cab
      </button>
    </div>
  );
}

export default CabBooking;

app.jsx
import CabBooking from "./CabBooking";

function App() {
  return (
    <div>
      <CabBooking />
    </div>
  );
}

export default App;
