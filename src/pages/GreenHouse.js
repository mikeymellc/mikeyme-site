import React, { useState } from "react";
import "./Product.css";

const Greenhouse = () => {
  const [strain, setStrain] = useState("");
  const [amount, setAmount] = useState("");

  const strains = ["Strain J", "Strain K", "Strain L"];
  const amounts = ["1g", "2g", "3.5g", "7g", "14g", "28g"];

  return (
    <div className="product-page">
      <h1>Greenhouse Flower</h1>
      <p>
        Sustainably grown greenhouse flower. Organic cultivation practices 
        ensure premium quality while maintaining a light environmental footprint.
      </p>

      <div className="selectors">
        <label>
          Strain:
          <select value={strain} onChange={(e) => setStrain(e.target.value)}>
            <option value="">Select Strain</option>
            {strains.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </label>

        <label>
          Amount:
          <select value={amount} onChange={(e) => setAmount(e.target.value)}>
            <option value="">Select Amount</option>
            {amounts.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </label>
      </div>

      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default Greenhouse;
