import React, { useState, useContext } from "react";
import "./Product.css";
import { CartContext } from "../context/CartContext";

const TShirt = () => {
  const { addToCart } = useContext(CartContext);

  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  // Available sizes for each color
  const sizesByColor = {
    White: ["S", "M", "L", "XL"],
    Black: ["M", "L", "XL", "XXL"],
    Gray: ["S", "M", "L"]
  };

  // Product images for each color
  const imagesByColor = {
    White: "/images/tshirt-white.jpg",
    Black: "/images/tshirt-black.jpg",
    Gray: "/images/tshirt-gray.jpg"
  };

  const price = 25;

  const handleAddToCart = () => {
    if (!color || !size) {
      alert("Please select both a color and size.");
      return;
    }

    const product = {
      name: `MIKEYME T-Shirt - ${color} (${size})`,
      price,
      color,
      size
    };

    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-page">
      <h1>MIKEYME T-Shirt</h1>
      <p>Soft cotton tee with MIKEYME logo. Available in multiple colors and sizes.</p>

      {/* Product image */}
      {color ? (
        <img
          src={imagesByColor[color]}
          alt={`T-Shirt - ${color}`}
          style={{ width: "300px", margin: "1rem auto", display: "block", borderRadius: "8px" }}
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

export default TShirt;
        
