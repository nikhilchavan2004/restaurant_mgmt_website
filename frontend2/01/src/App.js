import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home.jsx";
import Success from "./Pages/Success.jsx";
import Nf from "./Pages/Nf.jsx";

import React from "react";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<Nf />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
