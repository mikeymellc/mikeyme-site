// src/pages/Shop.js
import React, { useState } from "react";
import "./Shop.css";

const Shop = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, strain, amount, quality) => {
    setCart([
      ...cart,
      { ...product, strain, amount, quality }
    ]);
    alert(`${product.name} added to cart!`);
  };

  const products = [
    {
      id: 1,
      name: "1 gram THCA Live Rosin",
      price: "$40 - $50",
      description: "Premium concentrate crafted for flavor and potency. Ideal for those seeking top-shelf quality without compromise."
    },
    {
      id: 2,
      name: "2 gram THCA Live Resin",
      price: "$40",
      description: "A budget-friendly option that balances affordability with solid quality and consistency."
    },
    {
      id: 3,
      name: "THCA Flower",
      price: "Varies",
      description: "Choose your strain, amount, and quality level. Perfect for both budget-conscious shoppers and those seeking premium craft flower."
    }
  ];

  // Dropdown placeholder options
  const strainOptions = Array(8).fill("N/A");
  const amountOptions = Array(6).fill("N/A");
  const qualityOptions = Array(4).fill("N/A");

  return (
    <div className="shop">
      <h1>Our Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p className="price">{product.price}</p>
            <p>{product.description}</p>

            {/* Show dropdowns only for Flower */}
            {product.name === "THCA Flower" && (
              <div className="options">
                <label>
                  Strain:
                  <select>
                    {strainOptions.map((opt, i) => (
                      <option key={i}>{opt}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Amount:
                  <select>
                    {amountOptions.map((opt, i) => (
                      <option key={i}>{opt}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Quality:
                  <select>
                    {qualityOptions.map((opt, i) => (
                      <option key={i}>{opt}</option>
                    ))}
                  </select>
                </label>
              </div>
            )}

            <button
              onClick={() =>
                addToCart(product, "N/A", "N/A", "N/A")
              }
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
    
