import React, { useState, useEffect } from "react";

function AgeGate({ onConfirm }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const confirmed = localStorage.getItem("ageConfirmed");
    if (confirmed === "true") {
      setShow(false);
      onConfirm();
    }
  }, [onConfirm]);

  const handleConfirm = () => {
    localStorage.setItem("ageConfirmed", "true");
    setShow(false);
    onConfirm();
  };

  const handleDeny = () => {
    window.location.href = "https://www.google.com"; // Change if you want another redirect
  };

  if (!show) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.box}>
        <h1 style={styles.title}>Welcome to MIKEYME</h1>
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
    backgroundColor: "rgba(0,0,0,0.9)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  box: {
    background: "#fff",
    padding: "2rem",
    borderRadius: "10px",
    textAlign: "center",
    maxWidth: "400px",
    width: "90%",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  text: {
    marginBottom: "1.5rem",
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
              
