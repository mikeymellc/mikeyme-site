import React, { useState } from "react";
import AgeGate from "./components/AgeGate";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Merch from "./pages/Merch";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [ageConfirmed, setAgeConfirmed] = useState(false);

  return (
    <Router>
      {!ageConfirmed && <AgeGate onConfirm={() => setAgeConfirmed(true)} />}
      {ageConfirmed && (
        <div>
          <nav style={styles.nav}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/about" style={styles.link}>About</Link>
            <Link to="/shop" style={styles.link}>Shop</Link>
            <Link to="/merch" style={styles.link}>Merch</Link>
            <Link to="/contact" style={styles.link}>Contact</Link>
          </nav>
          <div style={styles.page}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/merch" element={<Merch />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      )}
    </Router>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "1rem",
    padding: "1rem",
    background: "#000",
    borderBottom: "2px solid #16a34a",
  },
  link: {
    color: "#16a34a",
    fontWeight: "bold",
    textDecoration: "none",
  },
  page: {
    padding: "2rem",
  },
};

export default App;
        
