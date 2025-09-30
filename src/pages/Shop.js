// src/pages/Shop.js
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const initialProducts = [
  { id: 1, name: 'Flower', strain: '', quantity: 0 },
  { id: 2, name: 'Rosin', strain: '', quantity: 0 },
  { id: 3, name: 'Resin', strain: '', quantity: 0 },
];

const Shop = () => {
  const [products, setProducts] = useState(initialProducts);

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setProducts(products.map(p => p.id === id ? { ...p, [name]: value } : p));
  };

  return (
    <div>
      <h1>Shop Products</h1>
      {products.map(p => (
        <ProductCard key={p.id} product={p} handleChange={handleChange} />
      ))}
    </div>
  );
};

export default Shop;
