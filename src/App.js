import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Shop from "./pages/Shop";
import LiveResin from "./pages/LiveResin";
import LiveRosin from "./pages/LiveRosin";
import IndoorSmalls from "./pages/IndoorSmalls";
import Indoor from "./pages/Indoor";
import Greenhouse from "./pages/Greenhouse";
import Outdoors from "./pages/Outdoors";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/liveresin" element={<LiveResin />} />
        <Route path="/liverosin" element={<LiveRosin />} />
        <Route path="/indoorsmalls" element={<IndoorSmalls />} />
        <Route path="/indoor" element={<Indoor />} />
        <Route path="/greenhouse" element={<Greenhouse />} />
        <Route path="/outdoors" element={<Outdoors />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
  
