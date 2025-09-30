import React, { useState } from "react";
import "./Product.css";

const LiveResin = () => {
  const [strain, setStrain] = useState("N/A");
  const [amount, setAmount] = useState("N/A");

  return (
    <div className="product-page">
      <h1>2 Gram THCA Live Resin</h1>
      <p>
        Our THCA Live Resin is crafted to preserve a wide range of terpenes and
        cannabinoids, delivering bold flavors and a robust experience. Organic
        cultivation ensures a light footprint on the ecosystem, making this a
        sustainable choice that balances quality with affordability.
      </p>
      <p className="price">Price: $40</p>

      <div className="options">
        <label>
          Strain:
          <select value={strain} onChange={(e) => setStrain(e.target.value)}>
            <option value="N/A">N/A</option>
            <option value="Strain 1">Strain 1</option>
            <option value="Strain 2">Strain 2</option>
            <option value="Strain 3">Strain 3</option>
            <option value="Strain 4">Strain 4</option>
            <option value="Strain 5">Strain 5</option>
            <option value="Strain 6">Strain 6</option>
            <option value="Strain 7">Strain 7</option>
            <option value="Strain 8">Strain 8</option>
          </select>
        </label>

        <label>
          Amount:
          <select value={amount} onChange={(e) => setAmount(e.target.value)}>
            <option value="N/A">N/A</option>
            <option value="1g">1g</option>
            <option value="2g">2g</option>
            <option value="3.5g">3.5g</option>
            <option value="5g">5g</option>
            <option value="10g">10g</option>
          </select>
        </label>
      </div>

      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default LiveResin;
