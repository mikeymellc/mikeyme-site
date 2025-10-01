import React, { useState, useContext } from "react";
import "./Product.css";
import { CartContext } from "../context/CartContext";

export default function LiveRosin() {
  const { addToCart } = useContext(CartContext);

  const [strain, setStrain] = useState("");
  const [amount, setAmount] = useState("");

  const strains = ["Strain D", "Strain E", "Strain F"];
  const amounts = ["1g", "2g", "3.5g", "7g"];

  const pricing = {
    "1g": 60,
    "2g": 115,
    "3.5g": 190,
    "7g": 350,
  };

  const handleAddToCart = () => {
    if (!strain || !amount) {
      alert("Please select both a strain and an amount.");
      return;
    }

    const product = {
      name: `Live Rosin - ${strain} (${amount})`,
      price: pricing[amount],
      strain,
      amount,
    };

    addToCart(product);
    alert(`✅ ${product.name} added to cart!`);
  };

  return (
    <div className="product-page">
      <h1>Live Rosin</h1>
      <p>
        Our Live Rosin is a solventless concentrate made from organic flower.
        Sustainable, high-quality, and eco-friendly.
      </p>

      <div className="selectors">
        <label>
          Strain:
          <select value={strain} onChange={(e) => setStrain(e.target.value)}>
            <option value="">Select Strain</option>
            {strains.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>

        <label>
          Amount:
          <select value={amount} onChange={(e) => setAmount(e.target.value)}>
            <option value="">Select Amount</option>
            {amounts.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </label>
      </div>

      <button className="add-to-cart" onClick={handleAddToCart}>
        Add to Cart - ${amount ? pricing[amount] : "0"}
      </button>
    </div>
  );
              }
