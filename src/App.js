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

// Client Components
import Header from "./components/client/common/Header/Header";
import Footer from "./components/client/common/Footer/Footer";
import HomePage from "./pages/client/Home/HomePage";
import AboutPage from "./pages/client/About/AboutPage";
import ServicesPage from "./pages/client/Services/ServicesPage";
import ContactPage from "./pages/client/Contact/ContactPage";
import LoginPage from "./pages/client/LoginPage/LoginPage";
import ScrollToTop from "./components/client/widgets/ScrollToTop/ScrollToTop";

// Admin Components
import Dashboard from "./components/admin/Dashboard/Dashboard";
import ProtectedRoute from "./components/admin/common/ProtectedRoute/ProtectedRoute";

// Admin Pages (content)
import FriendsPage from "./pages/client/FriendsPage/FriendsPage";
import UnsubscribePage from "./pages/client/UnsubscribePage/UnsubscribePage";

const App = () => {
  const location = useLocation();

  return (
    <>
      {/* Conditional Header/Footer rendering for client-side routes */}
      {!location.pathname.startsWith("/admin") && <Header />}
      <ScrollToTop />
      <main>
        <Routes>
          {/* Client Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/friends" element={<FriendsPage />} />{" "}
          <Route path="/unsubscribe" element={<UnsubscribePage />} />{" "}
          <Route path="/login" element={<LoginPage />} />{" "}
          {/* Login page for client */}
          {/* Admin Routes */}
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      {/* Only show Footer on client-side routes */}
      {!location.pathname.startsWith("/admin") && <Footer />}
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
