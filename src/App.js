import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import LiveResin from "./pages/LiveResin";
import LiveRosin from "./pages/LiveRosin";
import IndoorSmalls from "./pages/IndoorSmalls";
import Indoor from "./pages/Indoor";
import Greenhouse from "./pages/Greenhouse";
import Outdoors from "./pages/Outdoors";
import Merch from "./pages/Merch";
import Cart from "./pages/Cart"; // ✅ new cart page
import { CartProvider } from "./context/CartContext"; // ✅ import provider

function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Merch" element={<Merch />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Cart" element={<Cart />} /> {/* ✅ cart route */}

          {/* Product pages */}
          <Route path="/LiveResin" element={<LiveResin />} />
          <Route path="/LiveRosin" element={<LiveRosin />} />
          <Route path="/IndoorSmalls" element={<IndoorSmalls />} />
          <Route path="/Indoor" element={<Indoor />} />
          <Route path="/Greenhouse" element={<Greenhouse />} />
          <Route path="/Outdoors" element={<Outdoors />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
            
