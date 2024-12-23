import React, { useState, useEffect } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa"; // Icons for styling
import "./NotificationSubscriptionPage.css";

const NotificationSubscriptionPage = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [expandedRow, setExpandedRow] = useState(null);

  useEffect(() => {
    // Replace this with an API call to fetch subscriptions from the backend
    const fetchData = async () => {
      const data = [
        {
          id: 1,
          email: "user1@example.com",
          subscribedDate: "2024-01-01",
          preferences: { email: true, sms: false, push: true },
        },
        {
          id: 2,
          email: "user2@example.com",
          subscribedDate: "2024-02-10",
          preferences: { email: false, sms: true, push: false },
        },
        {
          id: 3,
          email: "user3@example.com",
          subscribedDate: "2024-03-15",
          preferences: { email: true, sms: true, push: true },
        },
      ];
      setSubscriptions(data);
    };

    fetchData();
  }, []);

  const toggleRow = (id) => {
    setExpandedRow((prev) => (prev === id ? null : id));
  };

  return (
    <div className="notification-subscription-page">
      <h1>Subscription Management</h1>
      <p>View and manage all user subscriptions in the system.</p>

      <table className="subscriptions-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Subscribed Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map((subscription, index) => (
            <React.Fragment key={subscription.id}>
              <tr>
                <td>{index + 1}</td>
                <td>
                  <FaEnvelope /> {subscription.email}
                </td>
                <td>
                  <FaCalendarAlt /> {subscription.subscribedDate}
                </td>
                <td>
                  <button
                    className="expand-button"
                    onClick={() => toggleRow(subscription.id)}
                  >
                    {expandedRow === subscription.id ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </button>
                </td>
              </tr>
              {expandedRow === subscription.id && (
                <tr className="expanded-row">
                  <td colSpan="4">
                    <div className="subscription-details">
                      <strong>Notification Preferences:</strong>
                      <ul>
                        <li>
                          Email Notifications:{" "}
                          {subscription.preferences.email
                            ? "Enabled"
                            : "Disabled"}
                        </li>
                        <li>
                          SMS Notifications:{" "}
                          {subscription.preferences.sms
                            ? "Enabled"
                            : "Disabled"}
                        </li>
                        <li>
                          Push Notifications:{" "}
                          {subscription.preferences.push
                            ? "Enabled"
                            : "Disabled"}
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NotificationSubscriptionPage;
