import React, { useState, useContext } from "react";
import "./Product.css";
import { CartContext } from "../context/CartContext";

const LiveResin = () => {
  const { addToCart } = useContext(CartContext);

  const [strain, setStrain] = useState("");
  const [amount, setAmount] = useState("");

  const strains = ["Strain A", "Strain B", "Strain C"];
  const amounts = ["1g", "2g", "3.5g", "7g"];

  // Example pricing
  const pricing = {
    "1g": 50,
    "2g": 95,
    "3.5g": 160,
    "7g": 300
  };

  const handleAddToCart = () => {
    if (!strain || !amount) {
      alert("Please select both a strain and amount.");
      return;
    }

    const product = {
      name: `Live Resin - ${strain} (${amount})`,
      price: pricing[amount],
      strain,
      amount
    };

    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-page">
      <h1>Live Resin</h1>
      <p>
        Our Live Resin is a premium extract made from organic flower. Grown
        sustainably with minimal impact on the environment.
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
};

export default LiveResin;
                                            
