import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AgeGate from "./components/AgeGate";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import About from "./pages/About";

// Product description pages
import LiveRosin from "./pages/LiveRosin";
import LiveResin from "./pages/LiveResin";

// Flower category pages
import IndoorSmalls from "./pages/IndoorSmalls";
import Indoor from "./pages/Indoor";
import Greenhouse from "./pages/Greenhouse";
import Outdoors from "./pages/Outdoors";

import "./App.css";

function App() {
  const [isOfAge, setIsOfAge] = useState(false);

  if (!isOfAge) {
    return <AgeGate setIsOfAge={setIsOfAge} />;
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Product description pages */}
            <Route path="/live-rosin" element={<LiveRosin />} />
            <Route path="/live-resin" element={<LiveResin />} />

            {/* Flower category pages */}
            <Route path="/indoor-smalls" element={<IndoorSmalls />} />
            <Route path="/indoor" element={<Indoor />} />
            <Route path="/greenhouse" element={<Greenhouse />} />
            <Route path="/outdoors" element={<Outdoors />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
              
