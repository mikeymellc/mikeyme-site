import React from "react";

const Shop = () => {
  const products = [
    {
      name: "1 gram THCA Live Rosin",
      price: "$40 - $50",
    },
    {
      name: "2 gram THCA Live Resin",
      price: "$40",
    },
    {
      name: "Hash Rosin Disposable",
      price: "$50",
    },
  ];

  return (
    <div>
      <h1>Shop MIKEYME Products</h1>
      <div style={styles.products}>
        {products.map((product, index) => (
          <div key={index} style={styles.productCard}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button style={styles.button}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  products: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  productCard: {
    border: "1px solid #16a34a",
    padding: "1rem",
    borderRadius: "8px",
  },
  button: {
    marginTop: "0.5rem",
    backgroundColor: "#16a34a",
    color: "#fff",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Shop;
