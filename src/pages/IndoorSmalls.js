import React, { useState } from "react";
import "./Product.css";

const IndoorSmalls = () => {
  const [quality, setQuality] = useState("");
  const [amount, setAmount] = useState("");
  const [strain, setStrain] = useState("");

  const qualityOptions = ["Indoor Smalls"];
  const amountOptions = {
    "Indoor Smalls": ["1g", "2g", "3.5g"]
  };
  const strainOptions = {
    "Indoor Smalls": ["Strain A", "Strain B"]
  };

  return (
    <div className="product-page">
      <h1>Indoor Smalls</h1>
      <p>
        Our Indoor Smalls are organically grown with a light footprint on the
        ecosystem, delivering high-quality flower in smaller quantities.
      </p>

      <div className="selectors">
        <label>
          Quality:
          <select value={quality} onChange={(e) => setQuality(e.target.value)}>
            <option value="">Select Quality</option>
            {qualityOptions.map((q) => (
              <option key={q} value={q}>{q}</option>
            ))}
          </select>
        </label>

        {quality && (
          <>
            <label>
              Amount:
              <select value={amount} onChange={(e) => setAmount(e.target.value)}>
                <option value="">Select Amount</option>
                {amountOptions[quality].map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </label>

            <label>
              Strain:
              <select value={strain} onChange={(e) => setStrain(e.target.value)}>
                <option value="">Select Strain</option>
                {strainOptions[quality].map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </label>
          </>
        )}
      </div>

      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default IndoorSmalls;
          
