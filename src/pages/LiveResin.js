import React, { useState } from "react";
import "./Product.css";

const LiveResin = () => {
  const [strain, setStrain] = useState("");
  const [amount, setAmount] = useState("");

  const strains = ["Strain A", "Strain B", "Strain C"];
  const amounts = ["1g", "2g", "3.5g", "7g"];

  return (
    <div className="product-page">
      <h1>Live Resin</h1>
      <p>
        Our Live Resin is a premium extract made from organic flower. Grown
        sustainably with minimal impact on the environment.
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

export default LiveResin;
              
