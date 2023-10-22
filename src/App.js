import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import OfferBar from "./components/OfferBar";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Shop from "./pages/Shop";

function App() {
  const [offerBar, setOfferBar] = useState(true);
  return (
    <div>
      <Router>
        {offerBar ? <OfferBar setOfferBar={setOfferBar} /> : null}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Newsletter />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
