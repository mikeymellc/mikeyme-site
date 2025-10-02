import React, { useState, useEffect, useContext } from "react";
import "./Product.css";
import { CartContext } from "../context/CartContext";

const LiveResin = () => {
  const { addToCart } = useContext(CartContext);

  const [inventory, setInventory] = useState([]);
  const [strain, setStrain] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch live inventory from KV via API route
  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const res = await fetch("/api/get-inventory");
        const data = await res.json();
        // Filter just Live Resin products
        const liveResinItems = data.filter(
          (item) => item.category === "Live Resin"
        );
        setInventory(liveResinItems);
      } catch (err) {
        console.error("Error fetching inventory:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchInventory();
  }, []);

  const handleAddToCart = () => {
    if (!strain || !amount) {
      alert("Please select both a strain and amount.");
      return;
    }

    const selectedProduct = inventory.find(
      (item) => item.strain === strain && item.amount === amount
    );

    if (!selectedProduct) {
      alert("This product is unavailable.");
      return;
    }

    if (selectedProduct.quantity <= 0) {
      alert("Sorry, this item is out of stock.");
      return;
    }

    const product = {
      name: `Live Resin - ${strain} (${amount})`,
      price: selectedProduct.price,
      strain,
      amount,
    };

    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  // Get unique strains from inventory
  const strains = [...new Set(inventory.map((item) => item.strain))];
  // Get amounts available for chosen strain
  const amounts = inventory
    .filter((item) => item.strain === strain)
    .map((item) => item.amount);

  const selectedProduct = inventory.find(
    (item) => item.strain === strain && item.amount === amount
  );

  return (
    <div className="product-page">
      <h1>Live Resin</h1>
      <p>
        Our Live Resin is a premium extract made from organic flower. Grown
        sustainably with minimal impact on the environment.
      </p>

      {loading ? (
        <p>Loading inventory...</p>
      ) : (
        <>
          <div className="selectors">
            <label>
              Strain:
              <select
                value={strain}
                onChange={(e) => {
                  setStrain(e.target.value);
                  setAmount(""); // reset amount when strain changes
                }}
              >
                <option value="">Select Strain</option>
                {strains.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Amount:
              <select
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                disabled={!strain}
              >
                <option value="">Select Amount</option>
                {amounts.map((a) => {
                  const item = inventory.find(
                    (inv) => inv.strain === strain && inv.amount === a
                  );
                  return (
                    <option key={a} value={a}>
                      {a} - ${item.price} ({item.quantity} left)
                    </option>
                  );
                })}
              </select>
            </label>
          </div>

          <button
            className="add-to-cart"
            onClick={handleAddToCart}
            disabled={!selectedProduct || selectedProduct.quantity <= 0}
          >
            {selectedProduct
              ? `Add to Cart - $${selectedProduct.price}`
              : "Select Options"}
          </button>
        </>
      )}
    </div>
  );
};

export default LiveResin;
        
