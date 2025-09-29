import React from "react";
import { Link } from "react-router-dom";

const merchProducts = [
  { id: 101, name: "MIKEYME T-Shirt", price: 25, image: "/images/tshirt.jpg", description: "Soft cotton tee with MIKEYME logo." },
  { id: 102, name: "MIKEYME Hoodie", price: 45, image: "/images/hoodie.jpg", description: "Cozy pullover hoodie with MIKEYME branding." },
];

export default function Merch() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center" }}>Merchandise</h1>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>Support MIKEYME and spread the word!</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
        {merchProducts.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem", textAlign: "center" }}>
            <img src={product.image} alt={product.name} style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
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
