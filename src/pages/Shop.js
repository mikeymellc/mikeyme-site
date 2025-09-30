import React, { useState } from "react";
import "./Shop.css";

const Shop = () => {
  const [strain, setStrain] = useState("N/A");
  const [amount, setAmount] = useState("N/A");
  const [quality, setQuality] = useState("N/A");

  return (
    <div className="shop-container">
      <h1>Shop – THCA Flower</h1>
      <p>
        Explore our carefully sourced THCA flower. We emphasize{" "}
        <strong>quality</strong> and <strong>budget-friendly</strong> options so
        you can find the perfect match.
      </p>

      <div className="product-card">
        <h2>Premium THCA Flower</h2>
        <p>
          Hand-trimmed, fresh, and tested. Choose your preferred strain,
          quantity, and quality tier to fit your budget and taste.
        </p>

        <div className="dropdown">
          <label>Strain: </label>
          <select value={strain} onChange={(e) => setStrain(e.target.value)}>
            <option>N/A</option>
            <option>Strain 1</option>
            <option>Strain 2</option>
            <option>Strain 3</option>
            <option>Strain 4</option>
            <option>Strain 5</option>
            <option>Strain 6</option>
            <option>Strain 7</option>
            <option>Strain 8</option>
          </select>
        </div>

        <div className="dropdown">
          <label>Amount: </label>
          <select value={amount} onChange={(e) => setAmount(e.target.value)}>
            <option>N/A</option>
            <option>1g</option>
            <option>3.5g (1/8 oz)</option>
            <option>7g (1/4 oz)</option>
            <option>14g (1/2 oz)</option>
            <option>28g (1 oz)</option>
            <option>56g (2 oz)</option>
          </select>
        </div>

        <div className="dropdown">
          <label>Quality: </label>
          <select value={quality} onChange={(e) => setQuality(e.target.value)}>
            <option>N/A</option>
            <option>Budget</option>
            <option>Standard</option>
            <option>Premium</option>
            <option>Top Shelf</option>
          </select>
        </div>

        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default Shop;
          
