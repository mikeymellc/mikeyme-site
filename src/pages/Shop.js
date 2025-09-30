// src/pages/Shop.js
import React from "react";
import { Link } from "react-router-dom";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop-page">
      <h1>Shop Our Products</h1>

      <div className="product-grid">
        {/* Flower Products */}
        <Link to="/Indoor" className="product-card">
          <img src="/images/indoor.jpg" alt="Indoor Flower" />
          <h2>Indoor Flower</h2>
        </Link>

        <Link to="/IndoorSmalls" className="product-card">
          <img src="/images/indoorsmalls.jpg" alt="Indoor Smalls" />
          <h2>Indoor Smalls</h2>
        </Link>

        <Link to="/Greenhouse" className="product-card">
          <img src="/images/greenhouse.jpg" alt="Greenhouse Flower" />
          <h2>Greenhouse Flower</h2>
        </Link>

        <Link to="/Outdoors" className="product-card">
          <img src="/images/outdoors.jpg" alt="Outdoor Flower" />
          <h2>Outdoor Flower</h2>
        </Link>

        {/* Concentrate Products */}
        <Link to="/LiveRosin" className="product-card">
          <img src="/images/liverosin.jpg" alt="Live Rosin" />
          <h2>Live Rosin</h2>
        </Link>

        <Link to="/LiveResin" className="product-card">
          <img src="/images/liveresin.jpg" alt="Live Resin" />
          <h2>Live Resin</h2>
        </Link>
      </div>
    </div>
  );
};

export default Shop;
    
