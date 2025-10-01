import React, { useState, useEffect } from "react";
import "./AgeGate.css"; // We'll style it separately

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

  if (!visible) return null;

  return (
    <div className="agegate-overlay">
      <div className="agegate-content">
        <h1>MIKEYME</h1>
        <p>You must be 21 or older to enter this site.</p>
        <button onClick={handleConfirm}>I am 21 or older</button>
      </div>
    </div>
  );
}
