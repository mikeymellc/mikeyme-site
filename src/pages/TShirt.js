import React, { useState, useContext } from "react";
import "./Product.css";
import { CartContext } from "../context/CartContext";

const Hoodie = () => {
  const { addToCart } = useContext(CartContext);

  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  // Available sizes for each hoodie color
  const sizesByColor = {
    Black: ["S", "M", "L", "XL", "XXL"],
    Gray: ["M", "L", "XL"],
    Blue: ["S", "M", "L", "XL"]
  };

  // Images for each hoodie color
  const imagesByColor = {
    Black: "/images/hoodie-black.jpg",
    Gray: "/images/hoodie-gray.jpg",
    Blue: "/images/hoodie-blue.jpg"
  };

  const price = 45;

  const handleAddToCart = () => {
    if (!color || !size) {
      alert("Please select both a color and size.");
      return;
    }

    const product = {
      name: `MIKEYME Hoodie - ${color} (${size})`,
      price,
      color,
      size
    };

    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-page">
      <h1>MIKEYME Hoodie</h1>
      <p>Cozy pullover hoodie with MIKEYME branding. Perfect for cooler weather.</p>

      {/* Product image */}
      {color ? (
        <img
          src={imagesByColor[color]}
          alt={`Hoodie - ${color}`}
          style={{ width: "320px", margin: "1rem auto", display: "block", borderRadius: "8px" }}
        />
      ) : (
        <p style={{ fontStyle: "italic" }}>Select a color to view the product image.</p>
      )}

      <div className="selectors">
        {/* Color dropdown */}
        <label>
          Color:
          <select
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
              setSize(""); // reset size when color changes
            }}
          >
            <option value="">Select Color</option>
            {Object.keys(sizesByColor).map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>

        {/* Size dropdown */}
        <label>
          Size:
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            disabled={!color}
          >
            <option value="">Select Size</option>
            {color &&
              sizesByColor[color].map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
          </select>
        </label>
      </div>

      {/* Add to Cart */}
      <button className="add-to-cart" onClick={handleAddToCart}>
        Add to Cart - ${price}
      </button>
    </div>
  );
};

export default Hoodie;
        
