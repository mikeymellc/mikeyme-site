// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Merch from "./pages/Merch";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Indoor from "./pages/Indoor";
import IndoorSmalls from "./pages/IndoorSmalls";
import Greenhouse from "./pages/Greenhouse";
import Outdoors from "./pages/Outdoors";
import LiveRosin from "./pages/LiveRosin";
import LiveResin from "./pages/LiveResin";
import "./App.css";

function App() {
  return (
    <Router>
      <header className="site-header">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/merch">Merch</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {/* Product Pages */}
          <Route path="/Indoor" element={<Indoor />} />
          <Route path="/IndoorSmalls" element={<IndoorSmalls />} />
          <Route path="/Greenhouse" element={<Greenhouse />} />
          <Route path="/Outdoors" element={<Outdoors />} />
          <Route path="/LiveRosin" element={<LiveRosin />} />
          <Route path="/LiveResin" element={<LiveResin />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} MikeyMe. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
  
