// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/client/common/Header/Header"; // Header component
import Home from "./pages/client/Home/Home"; // Home page
import About from "./pages/client/About/About";
import Contact from "./pages/client/Contact/Contact";
import Services from "./pages/client/Services/Services";
import "./assets/root.css";
import "./assets/styles/style.css";
import Footer from "./components/client/common/Footer/Footer";

const App = () => {
  const location = useLocation();

  return (
    <>
      {/* Render Header conditionally based on current route */}
      {/* {location.pathname !== "/design-tester" && <Header />} */}
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          {/* Updated to new component name */}
        </Routes>
      </main>
      <Footer />
    </>
  );
};

// Wrap the App component in Router for proper routing
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
