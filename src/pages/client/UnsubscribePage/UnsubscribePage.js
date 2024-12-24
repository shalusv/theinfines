import React from "react";
import axios from "axios";

import PagesHero from "../../../components/client/common/PagesHero/PagesHero";
import { BsEnvelope } from "react-icons/bs";
import "./UnsubscribePage.css";
import config from "../../../config/config";

const UnsubscribePage = () => {
  const handleUnsubscribe = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    try {
      const response = await axios.post(`${config.API_URL}/unsubscribe`, {
        email,
      });
      alert(response.data.message);
    } catch (err) {
      alert("Failed to process your request. Please try again.");
    }
  };

  return (
    <div className="page-container">
      <PagesHero
        title="Unsubscribe"
        subtitle="Manage Your Subscription Preferences"
      />
      <section className="unsubscribe-content">
        <div className="unsubscribe-section">
          <h2>We’re Sorry to See You Go</h2>
          <p>
            If you no longer wish to receive updates from us, please enter your
            email address below and confirm your decision to unsubscribe. You
            can always rejoin us later!
          </p>
        </div>

        <div className="unsubscribe-section unsubscribe-form-section">
          <h3>Unsubscribe From Our Mailing List</h3>
          <form className="unsubscribe-form" onSubmit={handleUnsubscribe}>
            <div className="form-group">
              <label htmlFor="email">
                <BsEnvelope /> Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Unsubscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default UnsubscribePage;
