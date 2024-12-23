import React, { useState } from "react";
import "./NotificationMessagesPage.css";

const NotificationMessagesPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      title: "Welcome!",
      content: "Thank you for joining us.",
      read: false,
    },
    {
      id: 2,
      title: "New Feature",
      content: "Check out our new feature!",
      read: true,
    },
    {
      id: 3,
      title: "Reminder",
      content: "Don't forget to update your profile.",
      read: false,
    },
  ]);

  const markAsRead = (id) => {
    setMessages((prev) =>
      prev.map((message) =>
        message.id === id ? { ...message, read: true } : message
      )
    );
  };

  return (
    <div className="notification-messages-page">
      <h1>Notification Messages</h1>
      <ul className="messages-list">
        {messages.map((message) => (
          <li
            key={message.id}
            className={`message-item ${message.read ? "read" : "unread"}`}
          >
            <h3>{message.title}</h3>
            <p>{message.content}</p>
            {!message.read && (
              <button
                onClick={() => markAsRead(message.id)}
                className="mark-read-button"
              >
                Mark as Read
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationMessagesPage;
