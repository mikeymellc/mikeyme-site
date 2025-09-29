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

  if (!show) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.box}>
        <h1 style={styles.title}>Welcome to MIKEYME</h1>
        <p style={styles.text}>You must be 21+ to enter this site.</p>
        <button onClick={handleConfirm} style={styles.button}>
          I am 21 or older
        </button>
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
  button: {
    background: "#16a34a",
    color: "#fff",
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },
};

export default AgeGate;
    
