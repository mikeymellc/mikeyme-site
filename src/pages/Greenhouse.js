import React, { useState, useContext } from "react";
import "./Product.css";
import { CartContext } from "../context/CartContext";

export default function Greenhouse() {
  const { addToCart } = useContext(CartContext);

  const [strain, setStrain] = useState("");
  const [amount, setAmount] = useState("");

  const strains = ["Strain J", "Strain K", "Strain L"];
  const amounts = ["1g", "2g", "3.5g", "7g", "14g", "28g"];

  const pricing = {
    "1g": 40,
    "2g": 75,
    "3.5g": 130,
    "7g": 250,
    "14g": 480,
    "28g": 950,
  };

  const handleAddToCart = () => {
    if (!strain || !amount) {
      alert("Please select both a strain and an amount.");
      return;
    }

    const product = {
      name: `Greenhouse Flower - ${strain} (${amount})`,
      price: pricing[amount],
      strain,
      amount,
    };

    addToCart(product);
    alert(`✅ ${product.name} added to cart!`);
  };

  return (
    <div className="product-page">
      <h1>Greenhouse Flower</h1>
      <p>
        Sustainably grown greenhouse flower. Organic cultivation practices 
        ensure premium quality while maintaining a light environmental footprint.
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
  
