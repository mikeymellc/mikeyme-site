import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index} style={{ marginBottom: "1rem" }}>
                <strong>{item.name}</strong> - ${item.price}
                <button
                  onClick={() => removeFromCart(index)}
                  style={{ marginLeft: "1rem" }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <h2>Total: ${total.toFixed(2)}</h2>
          <button onClick={clearCart}>Clear Cart</button>
          <button style={{ marginLeft: "1rem" }}>Checkout</button>
        </>
      )}
    </div>
  );
              }
