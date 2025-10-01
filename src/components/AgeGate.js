import React, { useState, useEffect } from "react";
import "./AgeGate.css";

export default function AgeGate({ onConfirm }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const confirmed = localStorage.getItem("ageConfirmed");
    if (confirmed === "true") {
      setVisible(false);
      onConfirm();
    }
  }, [onConfirm]);

  const handleConfirm = () => {
    localStorage.setItem("ageConfirmed", "true");
    setVisible(false);
    onConfirm();
  };

  const handleDeny = () => {
    // Redirect to Google or any safe page
    window.location.href = "https://www.google.com";
  };

  if (!visible) return null;

  return (
    <div className="agegate-overlay">
      <div className="agegate-content">
        <h1>MIKEYME</h1>
        <p>You must be 21 or older to enter this site.</p>
        <div className="agegate-buttons">
          <button onClick={handleConfirm}>I am 21 or older</button>
          <button onClick={handleDeny}>I am under 21</button>
        </div>
      </div>
    </div>
  );
}
