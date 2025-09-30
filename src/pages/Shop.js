import React from "react";
import { Link } from "react-router-dom";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop-container">
      <h1>Shop</h1>
      <p>
        Explore our premium collection of THCA products, cultivated with organic
        methods and a commitment to sustainability. Whether you’re seeking
        top-tier potency or budget-friendly options, our selection has something
        for everyone.
      </p>

      <div className="product-grid">
        {/* THCA Flower */}
        <div className="product-card">
          <h2>THCA Flower</h2>
          <p>
            Available in Indoor Smalls, Indoor, Greenhouse, and Outdoor options.
            Always organic, with a light footprint on the ecosystem. Choose the
            perfect balance of quality and budget.
          </p>
          <Link to="/indoor">
            <button className="view-btn">View Indoor</button>
          </Link>
          <Link to="/indoor-smalls">
            <button className="view-btn">View Indoor Smalls</button>
          </Link>
          <Link to="/greenhouse">
            <button className="view-btn">View Greenhouse</button>
          </Link>
          <Link to="/outdoors">
            <button className="view-btn">View Outdoors</button>
          </Link>
        </div>

        {/* THCA Live Rosin */}
        <div className="product-card">
          <h2>1 Gram THCA Live Rosin</h2>
          <p>
            A solventless extract known for purity and potency. Made using only
            heat and pressure, our rosin preserves delicate terpene profiles for
            a full-spectrum experience. Perfect for connoisseurs who value
            quality and sustainability.
          </p>
          <Link to="/live-rosin">
            <button className="view-btn">View Product</button>
          </Link>
        </div>

        {/* THCA Live Resin */}
        <div className="product-card">
          <h2>2 Gram THCA Live Resin</h2>
          <p>
            Carefully extracted to maintain cannabinoids and terpenes, our live
            resin offers bold flavors and robust effects. A balance of quality
            and affordability makes it ideal for everyday enjoyment.
          </p>
          <Link to="/live-resin">
            <button className="view-btn">View Product</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Shop;
              
