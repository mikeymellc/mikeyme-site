import React, { useState, useEffect, useContext } from "react";
import "./Product.css";
import { CartContext } from "../context/CartContext";

export default function TShirt() {
  const { addToCart } = useContext(CartContext);

  const [inventory, setInventory] = useState(null);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    fetch("/api/inventory")
      .then((res) => res.json())
      .then((data) => setInventory(data.TShirt || {}))
      .catch((err) => console.error("Error fetching inventory:", err));
  }, []);

  const handleAddToCart = () => {
    if (!color || !size) {
      alert("Please select both a color and size.");
      return;
    }

    const product = {
      name: `MIKEYME T-Shirt - ${color} (${size})`,
      price: inventory.price,
      color,
      size,
    };

    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  if (!inventory) return <p>Loading inventory...</p>;

  return (
    <div className="product-page">
      <h1>MIKEYME T-Shirt</h1>
      <p>Soft cotton tee with MIKEYME logo.</p>

      {color ? (
        <img
          src={inventory.imagesByColor[color]}
          alt={`T-Shirt - ${color}`}
          style={{ width: "300px", margin: "1rem auto", display: "block", borderRadius: "8px" }}
        />
      ) : (
        <p style={{ fontStyle: "italic" }}>Select a color to view the product image.</p>
      )}

      <div className="selectors">
        <label>
          Color:
          <select
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
              setSize("");
            }}
          >
            <option value="">Select Color</option>
            {Object.keys(inventory.sizesByColor).map((c) => (
              <option key={c} value={c}>{c}</option>
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
              inventory.sizesByColor[color].map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
          </select>
        </label>
      </div>

      <button className="add-to-cart" onClick={handleAddToCart}>
        Add to Cart - ${inventory.price}
      </button>
    </div>
  );
              }
