import React, { useState, useContext } from "react";
import "./Product.css";
import { CartContext } from "../context/CartContext";

export default function Indoor() {
  const { addToCart } = useContext(CartContext);

  const [strain, setStrain] = useState("");
  const [amount, setAmount] = useState("");

  const strains = ["Strain G", "Strain H", "Strain I"];
  const amounts = ["1g", "2g", "3.5g", "7g", "14g", "28g"];

  const pricing = {
    "1g": 45,
    "2g": 85,
    "3.5g": 140,
    "7g": 270,
    "14g": 520,
    "28g": 1000,
  };

  const handleAddToCart = () => {
    if (!strain || !amount) {
      alert("Please select both a strain and an amount.");
      return;
    }

    const product = {
      name: `Indoor Flower - ${strain} (${amount})`,
      price: pricing[amount],
      strain,
      amount,
    };

    addToCart(product);
    alert(`✅ ${product.name} added to cart!`);
  };

  return (
    <div className="product-page">
      <h1>Indoor Flower</h1>
      <p>
        Premium indoor flower grown organically with minimal impact on the ecosystem.
        Carefully curated for top quality and flavor.
      </p>

      <div className="selectors">
        <label>
          Strain:
          <select value={strain} onChange={(e) => setStrain(e.target.value)}>
            <option value="">Select Strain</option>
            {strains.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </label>

        <label>
          Amount:
          <select value={amount} onChange={(e) => setAmount(e.target.value)}>
            <option value="">Select Amount</option>
            {amounts.map((a) => (
              <option key={a} value={a}>{a}</option>
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
