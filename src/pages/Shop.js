import React from "react";
import { Link } from "react-router-dom";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop-page">
      <h1 className="shop-title">Our THCA Products</h1>
      <div className="product-grid">

        {/* THCA Flower Categories */}
        <div className="product-card">
          <h2>THCA Flower</h2>
          <p>
            Organic, eco-friendly flower grown with a light footprint on the
            ecosystem. Choose your preferred growing style and quality.
          </p>
          <p className="price">Starting at $30</p>
          <div>
            <Link to="/indoor-smalls">
              <button>Indoor Smalls</button>
            </Link>
            <Link to="/indoor">
              <button>Indoor</button>
            </Link>
            <Link to="/greenhouse">
              <button>Greenhouse</button>
            </Link>
            <Link to="/outdoors">
              <button>Outdoors</button>
            </Link>
          </div>
        </div>

        {/* Live Rosin */}
        <div className="product-card">
          <h2>1g THCA Live Rosin</h2>
          <p>
            Premium solventless concentrate, preserving terpenes and flavor for
            a rich, clean experience.
          </p>
          <p className="price">$40 - $50</p>
          <Link to="/live-rosin">
            <button>View Product</button>
          </Link>
        </div>

        {/* Live Resin */}
        <div className="product-card">
          <h2>2g THCA Live Resin</h2>
          <p>
            Potent concentrate crafted with care — balancing quality and budget
            while delivering strong effects.
          </p>
          <p className="price">$40</p>
          <Link to="/live-resin">
            <button>View Product</button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Shop;
          
