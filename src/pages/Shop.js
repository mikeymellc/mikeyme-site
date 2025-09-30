import React from "react";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop-page">
      <h1 className="shop-title">Our THCA Products</h1>
      <div className="product-grid">

        {/* Example Flower Product */}
        <div className="product-card">
          <h2>THCA Flower</h2>
          <p>Organic, eco-friendly flower grown with a light footprint on the ecosystem.</p>
          <p className="price">Starting at $30</p>
          
          <label>Quality:</label>
          <select>
            <option value="N/A">N/A</option>
            <option value="Indoor Smalls">Indoor Smalls</option>
            <option value="Indoor">Indoor</option>
            <option value="Greenhouse">Greenhouse</option>
            <option value="Outdoors">Outdoors</option>
          </select>

          <label>Amount:</label>
          <select>
            <option value="N/A">N/A</option>
            <option value="1g">1 Gram</option>
            <option value="3.5g">3.5 Grams</option>
            <option value="7g">7 Grams</option>
            <option value="14g">14 Grams</option>
            <option value="28g">28 Grams</option>
          </select>

          <label>Strain:</label>
          <select>
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

          <button>Add to Cart</button>
        </div>

        {/* Example Concentrate Product */}
        <div className="product-card">
          <h2>1g THCA Live Rosin</h2>
          <p>Premium solventless concentrate, preserving terpenes and flavor.</p>
          <p className="price">$40 - $50</p>
          <button>Add to Cart</button>
        </div>

        <div className="product-card">
          <h2>2g THCA Live Resin</h2>
          <p>Potent concentrate crafted for quality and value.</p>
          <p className="price">$40</p>
          <button>Add to Cart</button>
        </div>

      </div>
    </div>
  );
};

export default Shop;
  
