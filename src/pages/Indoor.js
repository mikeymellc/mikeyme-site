import React, { useState } from "react";
import "./Shop.css";

const indoorOptions = {
  strains: ["Strain D", "Strain E", "Strain F"],
  amounts: ["1g", "3.5g (1/8 oz)", "7g (1/4 oz)", "14g (1/2 oz)", "28g (1 oz)"],
};

const Indoor = () => {
  const [strain, setStrain] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div className="shop-container">
      <h1>Indoor THCA Flower</h1>
      <p>
        Our **indoor-grown THCA flower** is cultivated in a fully controlled
        environment using organic methods. By carefully regulating light, air,
        and nutrients, we ensure premium terpene profiles and potency while
        maintaining a <strong>light footprint on the ecosystem</strong>.
      </p>

      <div className="product-card">
        <h2>Choose Your Indoor Flower</h2>

        {/* Strain Dropdown */}
        <div className="dropdown">
          <label>Strain: </label>
          <select value={strain} onChange={(e) => setStrain(e.target.value)}>
            <option value="">Select Strain</option>
            {indoorOptions.strains.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Amount Dropdown */}
        <div className="dropdown">
          <label>Amount: </label>
          <select value={amount} onChange={(e) => setAmount(e.target.value)}>
            <option value="">Select Amount</option>
            {indoorOptions.amounts.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>

        {/* Add to Cart Button */}
        {strain && amount && (
          <button className="add-to-cart-btn">Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default Indoor;
          
