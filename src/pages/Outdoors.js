import React, { useState, useContext } from "react";
import "./Product.css";
import { CartContext } from "../context/CartContext";

export default function Outdoors() {
  const { addToCart } = useContext(CartContext);

  const [strain, setStrain] = useState("");
  const [amount, setAmount] = useState("");

  const strains = ["Strain M", "Strain N", "Strain O"];
  const amounts = ["1g", "2g", "3.5g", "7g", "14g", "28g"];

  const pricing = {
    "1g": 30,
    "2g": 55,
    "3.5g": 90,
    "7g": 160,
    "14g": 300,
    "28g": 580,
  };

  const handleAddToCart = () => {
    if (!strain || !amount) {
      alert("Please select both a strain and an amount.");
      return;
    }

    const product = {
      name: `Outdoor Flower - ${strain} (${amount})`,
      price: pricing[amount],
      strain,
      amount,
    };

    addToCart(product);
    alert(`✅ ${product.name} added to cart!`);
  };

  return (
    <div className="product-page">
      <h1>Outdoor Flower</h1>
      <p>
        Naturally sun-grown outdoor flower, cultivated organically with care.
        Environmentally conscious methods for premium taste and potency.
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
