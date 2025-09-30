import React, { useState } from "react";
import "./Product.css";

const LiveResin = () => {
  const [quality, setQuality] = useState("");
  const [amount, setAmount] = useState("");
  const [strain, setStrain] = useState("");

  const qualityOptions = ["Indoor Smalls", "Indoor", "Greenhouse", "Outdoors"];
  const amountOptions = {
    "Indoor Smalls": ["1g", "2g", "3.5g"],
    Indoor: ["1g", "2g", "3.5g", "7g"],
    Greenhouse: ["1g", "3.5g", "7g", "14g"],
    Outdoors: ["3.5g", "7g", "14g", "28g"]
  };
  const strainOptions = {
    "Indoor Smalls": ["Strain A", "Strain B"],
    Indoor: ["Strain C", "Strain D"],
    Greenhouse: ["Strain E", "Strain F"],
    Outdoors: ["Strain G", "Strain H"]
  };

  return (
    <div className="product-page">
      <h1>Live Resin</h1>
      <p>
        Our Live Resin is a premium extract made from organic flower. Grown
        with minimal impact on the environment for a truly sustainable product.
      </p>

      <div className="selectors">
        <label>
          Quality:
          <select value={quality} onChange={(e) => setQuality(e.target.value)}>
            <option value="">Select Quality</option>
            {qualityOptions.map((q) => (
              <option key={q} value={q}>
                {q}
              </option>
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
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Strain:
              <select value={strain} onChange={(e) => setStrain(e.target.value)}>
                <option value="">Select Strain</option>
                {strainOptions[quality].map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
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

export default LiveResin;
