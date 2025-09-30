import React from "react";
import { Link } from "react-router-dom";
import "./HeaderGreenBlack.css"; // Import the CSS file from the same folder

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Shop">Shop</Link>
          </li>
          <li>
            <Link to="/Merch">Merch</Link>
          </li>
          <li>
            <Link to="/AboutUs">About Us</Link>
          </li>
          <li>
            <Link to="/ContactUs">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
