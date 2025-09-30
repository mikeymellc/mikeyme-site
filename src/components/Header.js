import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Make sure your green/black theme CSS is here

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/Shop">Shop</Link></li>
          <li className="nav-item"><Link to="/Merch">Merch</Link></li>
          <li className="nav-item"><Link to="/AboutUs">About Us</Link></li>
          <li className="nav-item"><Link to="/ContactUs">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
