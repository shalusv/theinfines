// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./assets/root.css";
import "./assets/styles/style.css";

import Header from "./components/client/common/Header/Header"; // Header component
import Footer from "./components/client/common/Footer/Footer";
import ServicesPage from "./pages/client/Services/ServicesPage";
import HomePage from "./pages/client/Home/HomePage";
import ContactPage from "./pages/client/Contact/ContactPage";
import AboutPage from "./pages/client/About/AboutPage";
import ScrollToTop from "./components/client/widgets/ScrollToTop/ScrollToTop";
// import Friends from "./components/Friends/Friends";

const App = () => {
  const location = useLocation();

  return (
    <>
      {/* Render Header conditionally based on current route */}
      {/* {location.pathname !== "/design-tester" && <Header />} */}
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          {/* <Route path="/friends" element={<Friends />} /> */}
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
