import React, { useState, useEffect, useContext } from "react";
import "./Product.css";
import { CartContext } from "../context/CartContext";

export default function LiveRosin() {
  const { addToCart } = useContext(CartContext);

  const [inventory, setInventory] = useState([]);
  const [strain, setStrain] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const res = await fetch("/api/inventory");
        const data = await res.json();
        const liveRosin = data.inventory?.LiveRosin;

        if (liveRosin?.strains && liveRosin?.amounts && liveRosin?.pricing) {
          // Flatten inventory to array of { strain, amount, price, quantity }
          const flat = [];
          liveRosin.strains.forEach((s) => {
            liveRosin.amounts.forEach((a) => {
              flat.push({
                strain: s,
                amount: a,
                price: liveRosin.pricing[a],
                quantity: liveRosin.quantities?.[s]?.[a] ?? 10 // default quantity if missing
              });
            });
          });
          setInventory(flat);
        } else {
          setInventory([]);
        }
      } catch (err) {
        console.error("Error fetching inventory:", err);
        setInventory([]);
      } finally {
        setLoading(false);
      }
    };
    fetchInventory();
  }, []);

  const handleAddToCart = () => {
    const selected = inventory.find((item) => item.strain === strain && item.amount === amount);
    if (!selected) {
      alert("Please select both a strain and amount.");
      return;
    }
    if (selected.quantity <= 0) {
      alert("Sorry, this item is out of stock.");
      return;
    }

    addToCart({
      name: `Live Rosin - ${strain} (${amount})`,
      price: selected.price,
      strain,
      amount,
    });
    alert(`✅ Live Rosin - ${strain} (${amount}) added to cart!`);
  };

  const strains = [...new Set(inventory.map((item) => item.strain))];
  const amounts = inventory.filter((item) => item.strain === strain).map((item) => item.amount);
  const selected = inventory.find((item) => item.strain === strain && item.amount === amount);

  return (
    <div className="product-page">
      <h1>Live Rosin</h1>
      <p>Our Live Rosin is a solventless concentrate made from organic flower.</p>

      {loading ? (
        <p>Loading inventory...</p>
      ) : (
        <>
          <div className="selectors">
            <label>
              Strain:
              <select value={strain} onChange={(e) => { setStrain(e.target.value); setAmount(""); }}>
                <option value="">Select Strain</option>
                {strains.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </label>

            <label>
              Amount:
              <select value={amount} onChange={(e) => setAmount(e.target.value)} disabled={!strain}>
                <option value="">Select Amount</option>
                {amounts.map((a) => {
                  const item = inventory.find((inv) => inv.strain === strain && inv.amount === a);
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
            disabled={!selected || selected.quantity <= 0}
          >
            {selected ? `Add to Cart - $${selected.price}` : "Select Options"}
          </button>
        </>
      )}
    </div>
  );
}
