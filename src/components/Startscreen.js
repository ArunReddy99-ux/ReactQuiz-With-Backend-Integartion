import React, { useState } from "react";
import { useQuiz } from "../Contexts/QuizContext";

// Custom styles for attractive UI
const styles = {
  buttonRow: {
    display: "flex",
    gap: "2rem",
    marginBottom: "2rem",
    justifyContent: "center",
  },
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  form: {
    background: "#222",
    borderRadius: "16px",
    padding: "3rem 2.5rem",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: "320px",
    minHeight: "340px",
    position: "relative",
    animation: "fadeIn 0.7s",
  },
  input: {
    fontSize: "2rem",
    margin: "1.2rem 0",
    padding: "1rem 1.5rem",
    borderRadius: "8px",
    border: "1px solid #1098ad",
    width: "100%",
    background: "#333",
    color: "#fff",
    outline: "none",
    transition: "border 0.3s",
  },
  label: {
    fontSize: "2.2rem",
    color: "#ffa94d",
    marginBottom: "0.5rem",
    alignSelf: "flex-start",
  },
  submit: {
    fontSize: "2rem",
    background: "linear-gradient(90deg,#1098ad,#ffa94d)",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "1rem 2.5rem",
    marginTop: "1.5rem",
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    transition: "background 0.3s",
  },
  cancel: {
    fontSize: "1.6rem",
    background: "#495057",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "0.7rem 2rem",
    marginTop: "1rem",
    cursor: "pointer",
  },
  heading: {
    fontSize: "3.2rem",
    color: "#ffa94d",
    marginBottom: "2rem",
    textShadow: "0 2px 8px #1098ad",
  },
};

function Startscreen() {
  const { numQuestions, dispatch } = useQuiz();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Login handler: calls backend API
  const handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.token) {
        setIsAuthenticated(true);
        localStorage.setItem("token", data.token); // Store JWT
        setShowLogin(false);
      } else {
        alert(data.error || "Login failed");
      }
    } catch (err) {
      alert("Login error");
    }
  };

  // Signup handler: calls backend API
  const handleSignup = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.message === "User created") {
        alert("Signup successful! Please login.");
        setShowSignup(false);
        setShowLogin(true);
      } else {
        alert(data.error || "Signup failed");
      }
    } catch (err) {
      alert("Signup error");
    }
  };

  // Background video animation (You can use a royalty-free video URL or local file)
  // Example: https://www.w3schools.com/howto/rain.mp4
  // Place your video in public/ and use src="/yourvideo.mp4"

  return (
    <div className="start" style={{ position: "relative", minHeight: "100vh" }}>
      {/* Nature background image */}
      <div
        style={{
          position: "fixed",
          right: 0,
          bottom: 0,
          minWidth: "100vw",
          minHeight: "100vh",
          zIndex: -1,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px) brightness(0.7)",
        }}
      />

      <h2 style={styles.heading}>Welcome to React Quiz</h2>
      <h3 style={{ fontSize: "2.4rem", color: "#fff", marginBottom: "2.5rem" }}>
        {numQuestions} questions to test your react mastery
      </h3>

      {/* Login and Signup buttons with spacing */}
      <div style={styles.buttonRow}>
        <button
          className="btn btn-ui"
          style={{ fontSize: "2.2rem" }}
          onClick={() => setShowLogin(true)}
        >
          Login
        </button>
        <button
          className="btn btn-ui"
          style={{ fontSize: "2.2rem" }}
          onClick={() => setShowSignup(true)}
        >
          Signup
        </button>
      </div>

      {/* Show quiz start button only if authenticated */}
      {isAuthenticated && (
        <button
          className="btn btn-ui"
          style={{ fontSize: "2.2rem", marginTop: "2rem" }}
          onClick={() => dispatch({ type: "start" })}
        >
          Let's Start
        </button>
      )}

      {/* Login Modal */}
      {showLogin && (
        <div style={styles.modal}>
          <form style={styles.form} onSubmit={handleLogin}>
            <label style={styles.label} htmlFor="username">
              Username
            </label>
            <input
              style={styles.input}
              type="text"
              name="username"
              id="username"
              placeholder="Enter username"
              required
            />
            <label style={styles.label} htmlFor="password">
              Password
            </label>
            <input
              style={styles.input}
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              required
            />
            <button type="submit" style={styles.submit}>
              Login
            </button>
            <button
              type="button"
              style={styles.cancel}
              onClick={() => setShowLogin(false)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}

      {/* Signup Modal (as a separate page/modal) */}
      {showSignup && (
        <div style={styles.modal}>
          <form style={styles.form} onSubmit={handleSignup}>
            <label style={styles.label} htmlFor="username">
              Username
            </label>
            <input
              style={styles.input}
              type="text"
              name="username"
              id="username"
              placeholder="Choose a username"
              required
            />
            <label style={styles.label} htmlFor="password">
              Password
            </label>
            <input
              style={styles.input}
              type="password"
              name="password"
              id="password"
              placeholder="Choose a password"
              required
            />
            <button type="submit" style={styles.submit}>
              Signup
            </button>
            <button
              type="button"
              style={styles.cancel}
              onClick={() => setShowSignup(false)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Startscreen;
