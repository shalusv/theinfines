import React, { useState, useEffect } from "react";
import logo from "../../../../assets/images/client/basic/logo.png";
import "./Footer.css";
import {
  FaEnvelope,
  FaGlobe,
  FaPhoneAlt,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaSpinner,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setMessageType("error");
      setMessage("Enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    setTimeout(() => {
      setIsSubmitting(false);
      setMessageType("success");
      setMessage("Subscribed successfully!");
      setEmail("");

      // Clear the success message after 4 seconds
      setTimeout(() => {
        setMessage("");
      }, 4000);
    }, 2000);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Header */}
        <div className="footer-header footer-row">
          <div className="footer-column footer-logo">
            <div className="footer-logo-container">
              <div className="top-text">THE</div>
              <img src={logo} alt="Logo" className="logo" />
              <p className="tagline">solutions</p>
            </div>
          </div>
          {/* Contact */}
          <div className="footer-column contact">
            <span className="footer-title">CALL US</span>
            <a href="tel:+919633898785" className="contact-number">
              <FaPhoneAlt className="contact-icon" />
              <span className="number">+91 9633 89 87 85</span>
            </a>
          </div>
          {/* Social Media Links */}
          <div className="footer-column social">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Footer Body */}
        <div className="footer-footer footer-row">
          {/* Connections */}
          <div className="footer-column online">
            <span className="footer-title">CONNECTIONS</span>
            <div className="sub">
              <a href="mailto:info@theinfines.com" className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span className="contact-text">info@theinfines.com</span>
              </a>
              <NavLink
                to="//www.theinfines.com"
                target="_blank"
                className="contact-item"
              >
                <FaGlobe className="contact-icon" />
                <span className="contact-text">www.theinfines.com</span>
              </NavLink>
            </div>
          </div>
          {/* Quick Links */}
          <div className="footer-column quicklinks">
            <span className="footer-title">QUICK LINKS</span>
            <div className="">
              <NavLink to="/Privacy" className="contact-item">
                <span className="contact-text">Privacy Policy</span>
              </NavLink>
              <NavLink to="/blog" className="contact-item">
                <span className="contact-text">Blog</span>
              </NavLink>
              <NavLink to="/about" className="contact-item">
                <span className="contact-text">About us</span>
              </NavLink>
              <NavLink to="/careers" className="contact-item">
                <span className="contact-text">Careers</span>
              </NavLink>
            </div>
          </div>
          {/* Subscription Form */}
          <div className="footer-column subscription">
            <span className="footer-title">SUBSCRIBE</span>

            <form className="subscribe-form" onSubmit={handleSubmit}>
              <div className={`message ${messageType}`}>{message}</div>
              <input
                type="text"
                placeholder="Enter your email"
                className="subscribe-input"
                value={email}
                onChange={handleEmailChange}
              />
              <button
                type="submit"
                className="subscribe-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <FaSpinner className="submit-icon spinning" />
                ) : (
                  <FaEnvelope />
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom footer-row">
          <div className="footer-column copyright">© 2024 INFINES</div>
          <div className="footer-column developer">Developed by INFINES</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
