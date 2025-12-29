UserProfile.jsx
import React, { useState } from "react";
import "./styles.css";

function UserProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};

    if (!name.trim()) {
      errors.name = "Name is required";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setMessage(`✅ Profile updated successfully for ${name}!`);
      // Optionally reset form
      // setName(""); setEmail(""); setPassword("");
    } else {
      setMessage("");
    }
  };

  return (
    <div className="container">
      <h2>Edit User Profile</h2>
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <button type="submit">Update Profile</button>
      </form>

      {message && <div className="message">{message}</div>}
    </div>
  );
}

export default UserProfile;


style.css

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #a1c4fd, #c2e9fb);
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

.profile-form .form-group {
  margin-bottom: 15px;
  position: relative;
}

.profile-form input {
  width: 100%;
  padding: 10px 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
}

.profile-form button {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #4facfe;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

.profile-form button:hover {
  background: #00f2fe;
}

.error {
  color: #e74c3c;
  font-size: 12px;
  position: absolute;
  bottom: -18px;
  left: 0;
}

.message {
  margin-top: 20px;
  padding: 12px;
  border-radius: 8px;
  background: #e0f7fa;
  color: #00695c;
  font-weight: bold;
}

APP.jsx
import UserProfile from "./UserProfile";

function App() {
  return (
    <div>
      <UserProfile />
    </div>
  );
}

export default App;
