import React, { useState, useEffect, useContext } from "react";
import "./Product.css";
import { CartContext } from "../context/CartContext";

export default function Hoodie() {
  const { addToCart } = useContext(CartContext);

  const [inventory, setInventory] = useState([]);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const res = await fetch("/api/inventory");
        const data = await res.json();
        const hoodieInventory = data.inventory?.Hoodie;

        if (hoodieInventory?.sizesByColor && hoodieInventory?.imagesByColor && hoodieInventory?.price) {
          // Flatten inventory to array of { color, size, price, quantity }
          const flat = [];
          Object.keys(hoodieInventory.sizesByColor).forEach((c) => {
            hoodieInventory.sizesByColor[c].forEach((s) => {
              flat.push({
                color: c,
                size: s,
                price: hoodieInventory.price,
                quantity: hoodieInventory.quantities?.[c]?.[s] ?? 10, // default quantity if missing
              });
            });
          });
          setInventory(flat);
        } else {
          setInventory([]);
        }
      } catch (err) {
        console.error("Error fetching inventory:", err);
        setInventory([]);
      } finally {
        setLoading(false);
      }
    };
    fetchInventory();
  }, []);

  const handleAddToCart = () => {
    const selected = inventory.find((item) => item.color === color && item.size === size);
    if (!selected) {
      alert("Please select both a color and size.");
      return;
    }
    if (selected.quantity <= 0) {
      alert("Sorry, this item is out of stock.");
      return;
    }

    addToCart({
      name: `MIKEYME Hoodie - ${color} (${size})`,
      price: selected.price,
      color,
      size,
    });
    alert(`✅ MIKEYME Hoodie - ${color} (${size}) added to cart!`);
  };

  const colors = [...new Set(inventory.map((item) => item.color))];
  const sizes = inventory.filter((item) => item.color === color).map((item) => item.size);
  const selected = inventory.find((item) => item.color === color && item.size === size);

  return (
    <div className="product-page">
      <h1>MIKEYME Hoodie</h1>
      <p>Cozy pullover hoodie with MIKEYME branding.</p>

      {loading ? (
        <p>Loading inventory...</p>
      ) : (
        <>
          {/* Product image */}
          {color && inventory.length > 0 ? (
            <img
              src={inventory.find((item) => item.color === color)?.image || `/images/hoodie-${color.toLowerCase()}.jpg`}
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
                  setSize("");
                }}
              >
                <option value="">Select Color</option>
                {colors.map((c) => (
                  <option key={c} value={c}>{c}</option>
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
                {color && sizes.map((s) => {
                  const item = inventory.find((inv) => inv.color === color && inv.size === s);
                  return (
                    <option key={s} value={s}>
                      {s} - ${item.price} ({item.quantity} left)
                    </option>
                  );
                })}
              </select>
            </label>
          </div>

          <button
            className="add-to-cart"
            onClick={handleAddToCart}
            disabled={!selected || selected.quantity <= 0}
          >
            {selected ? `Add to Cart - $${selected.price}` : "Select Options"}
          </button>
        </>
      )}
    </div>
  );
            }
            
