import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Merch from "./pages/Merch";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Simple Navbar Component
function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      backgroundColor: "#222",
      color: "white",
      flexWrap: "wrap"
    }}>
      <Link to="/" style={{ color: "white", fontWeight: "bold", fontSize: "1.5rem", textDecoration: "none" }}>MIKEYME</Link>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/shop" style={{ color: "white", textDecoration: "none" }}>Shop</Link>
        <Link to="/merch" style={{ color: "white", textDecoration: "none" }}>Merch</Link>
        <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
        <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
      </div>
    </nav>
  );
}

// Footer Component (optional)
function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "1rem", marginTop: "2rem", borderTop: "1px solid #ccc" }}>
      &copy; {new Date().getFullYear()} MIKEYME. All rights reserved.
    </footer>
  );
}

// Main App Component
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
  }
