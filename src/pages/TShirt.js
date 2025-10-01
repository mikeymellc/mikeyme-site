import React, { useState, useContext } from "react";
import "./Product.css";
import { CartContext } from "../context/CartContext";

const TShirt = () => {
  const { addToCart } = useContext(CartContext);

  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  // ✅ Color → Available sizes mapping
  const colorOptions = {
    Black: ["S", "M", "L", "XL"],
    White: ["S", "M", "L", "XL", "XXL"],
    Green: ["M", "L", "XL"],
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
      size,
    };

    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-page">
      <h1>MIKEYME T-Shirt</h1>
      <p>Soft cotton tee with MIKEYME logo. Stylish and comfortable.</p>

      <div className="selectors">
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
            {Object.keys(colorOptions).map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>

        <label>
          Size:
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            disabled={!color}
          >
            <option value="">Select Size</option>
            {color &&
              colorOptions[color].map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
          </select>
        </label>
      </div>

      <button className="add-to-cart" onClick={handleAddToCart}>
        Add to Cart - ${price}
      </button>
    </div>
  );
};

export default TShirt;
              
