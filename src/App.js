import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AgeGate from "./components/AgeGate"; // AgeGate component
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
import Cart from "./pages/Cart"; // Cart page
import Wholesale from "./pages/Wholesale"; // ✅ Wholesale page
import CartProvider from "./context/CartContext"; // ✅ default export

// ✅ Import new merch product pages
import TShirt from "./pages/TShirt";
import Hoodie from "./pages/Hoodie";

function App() {
  const [ageConfirmed, setAgeConfirmed] = useState(
    localStorage.getItem("ageConfirmed") === "true"
  );

  const handleAgeConfirm = () => {
    localStorage.setItem("ageConfirmed", "true");
    setAgeConfirmed(true);
  };

  return (
    <Router>
      <CartProvider>
        {!ageConfirmed && <AgeGate onConfirm={handleAgeConfirm} />}
        {ageConfirmed && (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Shop" element={<Shop />} />
              <Route path="/Merch" element={<Merch />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="/Wholesale" element={<Wholesale />} /> {/* ✅ Wholesale route */}
              <Route path="/Cart" element={<Cart />} /> {/* ✅ Cart route */}

              {/* Product pages */}
              <Route path="/LiveResin" element={<LiveResin />} />
              <Route path="/LiveRosin" element={<LiveRosin />} />
              <Route path="/IndoorSmalls" element={<IndoorSmalls />} />
              <Route path="/Indoor" element={<Indoor />} />
              <Route path="/Greenhouse" element={<Greenhouse />} />
              <Route path="/Outdoors" element={<Outdoors />} />

              {/* ✅ Merch product pages */}
              <Route path="/tshirt" element={<TShirt />} />
              <Route path="/hoodie" element={<Hoodie />} />
            </Routes>
          </>
        )}
      </CartProvider>
    </Router>
  );
}

export default App;
          
