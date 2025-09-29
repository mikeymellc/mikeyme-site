import React, { useState, useEffect } from "react";

function AgeGate({ onConfirm }) {
  const [show, setShow] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const confirmed = localStorage.getItem("ageConfirmed");
    if (confirmed === "true") {
      setShow(false);
      onConfirm();
    } else {
      // Trigger fade-in once component mounts
      setFadeIn(true);
    }
  }, [onConfirm]);

  const handleConfirm = () => {
    localStorage.setItem("ageConfirmed", "true");
    setShow(false);
    onConfirm();
  };

  const handleDeny = () => {
    window.location.href = "https://www.google.com"; // Redirect if under 21
  };

  if (!show) return null;

  return (
    <div style={{ ...styles.overlay, opacity: fadeIn ? 1 : 0 }}>
      <div style={{ ...styles.box, transform: fadeIn ? "scale(1)" : "scale(0.95)" }}>
        <h1 style={styles.title}>MIKEYME</h1>
        <p style={styles.subtitle}>Premium THCA Hemp Products</p>
        <p style={styles.text}>You must be 21+ to enter this site.</p>
        <div style={styles.buttons}>
          <button onClick={handleConfirm} style={{ ...styles.button, ...styles.confirm }}>
            I am 21 or older
          </button>
          <button onClick={handleDeny} style={{ ...styles.button, ...styles.deny }}>
            I am under 21
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.95)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    transition: "opacity 0.6s ease", // smooth fade-in
  },
  box: {
    background: "#000",
    padding: "2.5rem",
    borderRadius: "12px",
    border: "2px solid #16a34a",
    textAlign: "center",
    maxWidth: "420px",
    width: "90%",
    color: "#fff",
    transition: "transform 0.5s ease", // subtle pop-in effect
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    color: "#16a34a",
    letterSpacing: "2px",
  },
  subtitle: {
    fontSize: "1rem",
    fontStyle: "italic",
    marginBottom: "1.5rem",
    color: "#9ca3af",
  },
  text: {
    fontSize: "1.1rem",
    marginBottom: "2rem",
  },
  buttons: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
  },
  button: {
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "1rem",
    transition: "all 0.3s ease",
  },
  confirm: {
    background: "#16a34a",
    color: "#fff",
  },
  deny: {
    background: "#dc2626",
    color: "#fff",
  },
};

export default AgeGate;
    
