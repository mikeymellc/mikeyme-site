import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Indoor from "./pages/Indoor";
import IndoorSmalls from "./pages/IndoorSmalls";
import Greenhouse from "./pages/Greenhouse";
import Outdoors from "./pages/Outdoors";
import LiveRosin from "./pages/LiveRosin";
import LiveResin from "./pages/LiveResin";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/Indoor" element={<Indoor />} />
        <Route path="/IndoorSmalls" element={<IndoorSmalls />} />
        <Route path="/Greenhouse" element={<Greenhouse />} />
        <Route path="/Outdoors" element={<Outdoors />} />
        <Route path="/LiveRosin" element={<LiveRosin />} />
        <Route path="/LiveResin" element={<LiveResin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
  
