// src/pages/Cart.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css"; // optional, you can style it however you like

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  // Calculate total price
  const total = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h1>Your Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <ul className="cart-items">
        {cartItems.map((item, index) => (
          <li key={index} className="cart-item">
            <span>{item.name}</span>
            <span>${item.price}</span>
            <button
              className="remove-button"
              onClick={() => removeFromCart(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <h2>Total: ${total}</h2>
    </div>
  );
                }
