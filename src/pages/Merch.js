import React from "react";
import { Link } from "react-router-dom";

const merchProducts = [
  {
    id: "tshirt",
    name: "MIKEYME T-Shirt",
    price: 25,
    image: "/images/tshirt.jpg",
    description: "Soft cotton tee with MIKEYME logo.",
    route: "/tshirt",
  },
  {
    id: "hoodie",
    name: "MIKEYME Hoodie",
    price: 45,
    image: "/images/hoodie.jpg",
    description: "Cozy pullover hoodie with MIKEYME branding.",
    route: "/hoodie",
  },
];

export default function Merch() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center" }}>Merchandise</h1>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>
        Support MIKEYME and spread the word!
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
        }}
      >
        {merchProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "1rem",
              textAlign: "center",
              boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
              transition: "transform 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <h2 style={{ marginTop: "1rem" }}>{product.name}</h2>
            <p>{product.description}</p>
            <p style={{ fontWeight: "bold", margin: "0.5rem 0" }}>
              ${product.price}
            </p>
            <Link
              to={product.route}
              style={{
                display: "inline-block",
                marginTop: "1rem",
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              View Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
