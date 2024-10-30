import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaCheckCircle,
  FaTimesCircle,
  FaSpinner,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(regex.test(value));
    setEmail(value);
  };

  const handleSubscription = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (isEmailValid) {
      setIsLoading(true);
      setMessage(""); // Clear previous message

      // Simulate an API call
      setTimeout(() => {
        setEmail(""); // Clear the input after submission
        setIsLoading(false);
        setMessage("Subscription successful! Thank you for subscribing.");
      }, 2000);
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubscription(e);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-box">
            <img
              src={require("../../../../assets/images/client/basic/logo.png")}
              alt="Logo"
              className="footer-logo"
            />
            <div className="contact-info">
              <p>
                <a href="tel:+911234567890" className="contact-link">
                  <FaPhone /> +91 123 456 7890
                </a>
              </p>
              <p>
                <a href="mailto:info@eamsquare.com" className="contact-link">
                  <FaEnvelope /> info@eamsquare.com
                </a>
              </p>
              <p>
                <a
                  href="http://www.eamsquare.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <FaGlobe /> www.eamsquare.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-column">
          <div className="footer-box">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-column">
          <div className="footer-box">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
            <div className="subscription">
              <div className="input-container">
                {email && !isEmailValid && (
                  <FaTimesCircle className="error-icon" />
                )}
                <input
                  type="email"
                  placeholder="Subscribe..."
                  value={email}
                  onChange={(e) => validateEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  aria-label="Subscribe"
                  className={`subscription-input ${
                    isEmailValid ? "valid" : ""
                  } ${email && !isEmailValid ? "invalid" : ""}`}
                />
                <button
                  onClick={handleSubscription}
                  disabled={isLoading}
                  className="subscribe-button"
                >
                  {isLoading ? (
                    <FaSpinner className="spinner-icon" />
                  ) : (
                    <FaEnvelope />
                  )}
                </button>
                {isEmailValid && <FaCheckCircle className="check-icon" />}
              </div>

              {message && <p className="subscription-message">{message}</p>}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} EAMSQUARE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
