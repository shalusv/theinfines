import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../../../config/config";
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
  FaWhatsapp,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

// case 1:  Subscribed
// case 2:  Email already subscribed.
// case 3:  Subscription reactivated successfully.
// case 4:  $subscribed.'Failed to send email.
// case 5:  Failed to subscribe.Try again later
// case 6:  Subscribed
const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const phoneNumber = "+919633898785"; // Replace with your WhatsApp number
  const msg = "Hello, I need assistance!"; // Custom message (optional)

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    msg
  )}`;

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
    setMessage(""); // Clear previous message

    try {
      const response = await axios.post(`${config.API_URL}/subscribe`, {
        sender_email: email,
      });

      const { status, message } = response.data;

      switch (status) {
        case 1: // Subscribed successfully
          setMessageType("success");
          setMessage("Subscribed successfully!");
          setEmail("");
          break;
        case 2: // Already subscribed
          setMessageType("warning");
          setMessage("You're already subscribed.");
          setEmail("");
          break;
        case 3: // Reactivated
          setMessageType("success");
          setMessage("Subscription reactivated successfully!");
          setEmail("");
          break;
        case 4: // Subscribed after reactivation
          setMessageType("success");
          setMessage("Subscription reactivated.");
          setEmail("");
          break;
        case 5: // Subscription failed
          setMessageType("error");
          setMessage("Failed to subscribe. Try again later.");
          break;
        case 0:
        default: // Invalid email or unknown error
          setMessageType("error");
          setMessage(message || "Something went wrong.");
          break;
      }
    } catch (error) {
      setMessageType("error");
      if (error.response && error.response.status === 422) {
        setMessage("Invalid email address or validation error.");
      } else {
        setMessage("Failed to subscribe. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setMessage(""), 4000); // Clear the message after 4 seconds
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Header */}
        <div className="footer-header footer-row">
          <div className="footer-column footer-logo">
            <div className="footer-logo-container">
              <div className="top-text">THE</div>
              <img src={logo} alt="Logo" className="footer-logo" />
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

              <a
                href={whatsappUrl}
                className="contact-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="contact-icon" />
                <span className="contact-text">Message us</span>
              </a>
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
              <NavLink to="/unsubscribe" className="contact-item">
                <span className="contact-text">Unsubscribe</span>
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
