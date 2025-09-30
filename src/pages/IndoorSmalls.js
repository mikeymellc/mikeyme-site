import React, { useState } from "react";
import "./Product.css";

const IndoorSmalls = () => {
  const [strain, setStrain] = useState("");
  const [amount, setAmount] = useState("");

  const strains = ["Strain P", "Strain Q", "Strain R"];
  const amounts = ["1g", "2g", "3.5g"];

  return (
    <div className="product-page">
      <h1>Indoor Smalls</h1>
      <p>
        Organic indoor smalls with minimal environmental impact. Perfect for 
        those who want premium quality flower in smaller quantities.
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

export default IndoorSmalls;
