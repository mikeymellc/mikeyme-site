import React, { useState } from "react";
import "./Product.css";

const LiveRosin = () => {
  const [strain, setStrain] = useState("");
  const [amount, setAmount] = useState("");

  const strains = ["Strain D", "Strain E", "Strain F"];
  const amounts = ["1g", "2g", "3.5g", "7g"];

  return (
    <div className="product-page">
      <h1>Live Rosin</h1>
      <p>
        Our Live Rosin is a solventless concentrate made from organic flower.
        Sustainable, high-quality, and eco-friendly.
      </p>

      <div className="selectors">
        <label>
          Strain:
          <select value={strain} onChange={(e) => setStrain(e.target.value)}>
            <option value="">Select Strain</option>
            {strains.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>

        <label>
          Amount:
          <select value={amount} onChange={(e) => setAmount(e.target.value)}>
            <option value="">Select Amount</option>
            {amounts.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </label>
      </div>

      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default LiveRosin;
            
