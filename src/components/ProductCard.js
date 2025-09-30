// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product, handleChange }) => (
  <div className="product-card">
    <h2>{product.name}</h2>
    <label>
      Strain:
      <input
        type="text"
        name="strain"
        value={product.strain}
        onChange={(e) => handleChange(e, product.id)}
      />
    </label>
    <label>
      Quantity:
      <input
        type="number"
        name="quantity"
        value={product.quantity}
        onChange={(e) => handleChange(e, product.id)}
      />
    </label>
  </div>
);

export default ProductCard;
