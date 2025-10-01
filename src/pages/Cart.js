import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css"; // Optional: create this for styling

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h1>Your Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}
