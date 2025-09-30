// src/components/Header.js
import React from 'react';
import './Header.css'; // optional, create this file if you want styling

const Header = () => {
  return (
    <header className="site-header">
      <h1>MikeyMe</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/Greenhouse">Greenhouse</a>
        <a href="/Rosin">Rosin</a>
        <a href="/Resin">Resin</a>
      </nav>
    </header>
  );
};

export default Header;
