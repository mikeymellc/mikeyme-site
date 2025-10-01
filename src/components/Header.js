import React from "react";
import { Link } from "react-router-dom";
import "./HeaderGreenBlack.css"; // keep your theme

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Shop">Shop</Link></li>
          <li><Link to="/Merch">Merch</Link></li>
          <li><Link to="/AboutUs">About Us</Link></li>
          <li><Link to="/ContactUs">Contact Us</Link></li>
          <li><Link to="/Cart">Cart</Link></li> {/* ✅ Added Cart */}
        </ul>
      </nav>
    </header>
  );
}
