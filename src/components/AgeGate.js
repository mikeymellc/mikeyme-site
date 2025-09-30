import React from "react";

const AgeGate = ({ onConfirm }) => {
  const handleUnder21 = () => {
    alert("Sorry, you must be 21 or older to enter.");
    window.location.href = "https://www.google.com";
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.heading}>Welcome to MIKEYME</h2>
        <p style={styles.text}>You must be 21 or older to enter this site.</p>
        <div style={styles.buttons}>
          <button style={styles.buttonYes} onClick={onConfirm}>I am 21+</button>
          <button style={styles.buttonNo} onClick={handleUnder21}>Not 21</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.85)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  modal: {
    background: "#fff",
    padding: "2rem",
    borderRadius: "10px",
    textAlign: "center",
    maxWidth: "400px",
    width: "80%",
  },
  heading: {
    color: "#16a34a",
    marginBottom: "1rem",
  },
  text: {
    marginBottom: "1.5rem",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-around",
  },
  buttonYes: {
    background: "#16a34a",
    color: "#fff",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
  },
  buttonNo: {
    background: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
  },
};

export default AgeGate;
  
