import React from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Hash Rosin Disposable", price: 50, image: "/images/disposable.jpg" },
  { id: 2, name: "THCA Gram Jar", price: 45, image: "/images/gram-jar.jpg" },
  { id: 3, name: "THCA Gram Jar", price: 40, image: "/images/gram-jar.jpg" },
];

export default function Shop() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center" }}>Shop MIKEYME Products</h1>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>Quality THCA hash rosin and hemp flower at budget-friendly prices.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem", textAlign: "center" }}>
            <img src={product.image} alt={product.name} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }} />
            <h2>{product.name}</h2>
            <p style={{ fontWeight: "bold" }}>${product.price}</p>
            <Link to={`/product/${product.id}`} style={{ display: "inline-block", marginTop: "1rem", backgroundColor: "#4CAF50", color: "white", padding: "0.5rem 1rem", borderRadius: "6px" }}>
              View Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
          }
