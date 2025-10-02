import React, { useState, useEffect, useContext } from "react";
import "./Product.css";
import { CartContext } from "../context/CartContext";

export default function Outdoors() {
  const { addToCart } = useContext(CartContext);

  const [inventory, setInventory] = useState(null);
  const [strain, setStrain] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    fetch("/api/inventory")
      .then((res) => res.json())
      .then((data) => setInventory(data.inventory?.Outdoors || {}))
      .catch((err) => console.error("Error fetching inventory:", err));
  }, []);

  const handleAddToCart = () => {
    if (!strain || !amount) {
      alert("Please select both a strain and amount.");
      return;
    }

    const product = {
      name: `Outdoor Flower - ${strain} (${amount})`,
      price: inventory.pricing[amount],
      strain,
      amount,
    };

    addToCart(product);
    alert(`✅ ${product.name} added to cart!`);
  };

  if (!inventory || !inventory.strains) return <p>Loading inventory...</p>;

  return (
    <div className="product-page">
      <h1>Outdoor Flower</h1>
      <p>
        Naturally sun-grown outdoor flower, cultivated organically with care.
      </p>

      <div className="selectors">
        <label>
          Strain:
          <select value={strain} onChange={(e) => setStrain(e.target.value)}>
            <option value="">Select Strain</option>
            {inventory.strains.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </label>

        <label>
          Amount:
          <select value={amount} onChange={(e) => setAmount(e.target.value)}>
            <option value="">Select Amount</option>
            {inventory.amounts.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </label>
      </div>

      <button className="add-to-cart" onClick={handleAddToCart}>
        Add to Cart - ${amount ? inventory.pricing[amount] : "0"}
      </button>
    </div>
  );
            }
