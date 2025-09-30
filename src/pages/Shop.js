import React from "react";
import { Link } from "react-router-dom";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop-container">
      <h1>Shop Our Products</h1>

      <div className="products-grid">
        <div className="product">
          <Link to="/liveresin">
            <h2>Live Resin</h2>
            <p>Premium live resin extract.</p>
          </Link>
        </div>

        <div className="product">
          <Link to="/liverosin">
            <h2>Live Rosin</h2>
            <p>Solventless, high-quality rosin.</p>
          </Link>
        </div>

        <div className="product">
          <Link to="/indoorsmalls">
            <h2>Indoor Smalls</h2>
            <p>Organic indoor-grown flower with light footprint.</p>
          </Link>
        </div>

        <div className="product">
          <Link to="/indoor">
            <h2>Indoor</h2>
            <p>Premium indoor flower grown sustainably.</p>
          </Link>
        </div>

        <div className="product">
          <Link to="/greenhouse">
            <h2>Greenhouse</h2>
            <p>Eco-friendly greenhouse-grown flower.</p>
          </Link>
        </div>

        <div className="product">
          <Link to="/outdoors">
            <h2>Outdoors</h2>
            <p>Sun-grown outdoor flower with minimal environmental impact.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Shop;
