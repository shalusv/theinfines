// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/client/common/Header/Header"; // Header component
import Home from "./pages/client/Home/Home"; // Home page
import "./assets/root.css";
import "./assets/styles/style.css";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
