import React from "react";
import PagesHero from "../../../components/client/common/PagesHero/PagesHero";

import "./ContactPage.css";
import { FaPhone } from "react-icons/fa";
import { BsEnvelope, BsWhatsapp } from "react-icons/bs";
import formImage from "../../../assets/images/client/contact/form.jpg";

const ContactPage = () => {
  return (
    <div className="page-container">
      <PagesHero
        title="Contact Us"
        subtitle="Let’s Start Your Digital Transformation Journey"
      />
      <section className="contact-content">
        <div className="contact-section">
          <h2>We’d Love to Hear From You!</h2>
          <p>
            Got a question or an idea you want to explore? Our team is excited
            to help you turn your vision into reality. Reach out to us and let’s
            start the conversation!
          </p>
        </div>

        <div className="contact-section contact-message">
          <div className="getin-touch">
            <h2 className="section-heading">Get in Touch</h2>
            <p className="section-subheading">
              Here are the ways you can reach us:
            </p>
            <ul className="contact-info">
              <li className="email">
                <BsEnvelope />
                <a href="mailto:info@theinfines.com">info@theinfines.com</a>
              </li>
              <li className="call">
                <FaPhone />
                <a href="tel:+919633898785">+91 96338 98785</a>
              </li>
              <li className="whatsapp">
                <BsWhatsapp />
                <a
                  href="https://wa.me/+919633898785"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect through Whatsapp
                </a>
              </li>
            </ul>
          </div>
          <div className="message-us">
            <div className="contact-section">
              <h3>Send Us a Message</h3>
              <form className="contact-form">
                {/* <img src={formImage} alt="form-Image" className="service-image" /> */}
                <div className="form-fields">
                  <div className="form-group">
                    <label htmlFor="name"></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email"></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message"></label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Write your message"
                      required
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
