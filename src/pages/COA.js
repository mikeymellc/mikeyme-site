import React from "react";
import "src/pages/COA.css";

export default function COA() {
  return (
    <div className="coa-page">
      <h1>Certificate of Analysis (COA)</h1>
      <p>Select a strain below to view or download its lab results.</p>

      <ul className="coa-list">
        <li><a href="/coa/sour-gas.pdf" target="_blank">Sour Gas</a></li>
        <li><a href="/coa/blueberry-muffin.pdf" target="_blank">Blueberry Muffin</a></li>
        <li><a href="/coa/cookies-2025.pdf" target="_blank">Cookies</a></li>
        <li><a href="/coa/gassy-apple.pdf" target="_blank">Gassy Apple</a></li>
      </ul>
    </div>
  );
}
