import React, { useState } from "react";
import "./Product.css";

const Indoor = () => {
  const [strain, setStrain] = useState("");
  const [amount, setAmount] = useState("");

  const strains = ["Strain G", "Strain H", "Strain I"];
  const amounts = ["1g", "2g", "3.5g", "7g", "14g", "28g"];

  return (
    <div className="product-page">
      <h1>Indoor Flower</h1>
      <p>
        Premium indoor flower grown organically with minimal impact on the ecosystem.
        Carefully curated for top quality and flavor.
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

export default Indoor;
                                     
