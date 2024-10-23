// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
// import Header from "./components/client/common/Header/Header"; // Header component
import Home from "./pages/client/Home/Home"; // Home page
import About from "./pages/client/About/About";
import Contact from "./pages/client/Contact/Contact";
import Services from "./pages/client/Services/Services";
import Tester from "./pages/Tester/Tester"; // Updated import to the new name
import "./assets/root.css";
import "./assets/styles/style.css";
import DesignTester from "./components/client/common/DesignTester/DesignTester";

const App = () => {
  const location = useLocation();

  return (
    <>
      {/* Render Header conditionally based on current route */}
      {/* {location.pathname !== "/design-tester" && <Header />} */}
      <DesignTester />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/design-tester" element={<Tester />} />{" "}
          {/* Updated to new component name */}
        </Routes>
      </main>
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
