import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./HeaderGreenBlack.css";

export default function Header() {
  const { cartItems } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">MIKEYME</h1>

        {/* Hamburger menu for mobile */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/Shop" onClick={() => setMenuOpen(false)}>Shop</Link>
            </li>
            <li>
              <Link to="/Merch" onClick={() => setMenuOpen(false)}>Merch</Link>
            </li>
            <li>
              <Link to="/AboutUs" onClick={() => setMenuOpen(false)}>About Us</Link>
            </li>
            <li>
              <Link to="/ContactUs" onClick={() => setMenuOpen(false)}>Contact Us</Link>
            </li>
            <li>
              <Link to="/Cart" onClick={() => setMenuOpen(false)}>
                Cart {cartItems.length > 0 && `(${cartItems.length})`}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
