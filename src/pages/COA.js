import React from "react";

export default function COA() {
  return (
    <div className="product-page">
      <h1>Certificates of Analysis</h1>
      <p>Select a strain below to view the COA PDF.</p>

      <ul style={{ lineHeight: "2rem" }}>
        <li>
          <a href="/coa/strain1.pdf" target="_blank" rel="noopener noreferrer">
            Strain 1 COA
          </a>
        </li>

        <li>
          <a href="/coa/strain2.pdf" target="_blank" rel="noopener noreferrer">
            Strain 2 COA
          </a>
        </li>

        <li>
          <a href="/coa/strain3.pdf" target="_blank" rel="noopener noreferrer">
            Strain 3 COA
          </a>
        </li>
      </ul>
    </div>
  );
}
