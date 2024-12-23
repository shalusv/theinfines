import React, { useState } from "react";
import "./SettingsPage.css";

const SettingsPage = () => {
  const [profile, setProfile] = useState({
    username: "JohnDoe",
    email: "john.doe@example.com",
    password: "",
  });

  const [preferences, setPreferences] = useState({
    notifications: true,
    darkMode: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handlePreferencesChange = (e) => {
    const { name, checked } = e.target;
    setPreferences((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Settings saved!");
    // Add your save logic here (e.g., API call)
  };

  return (
    <div className="settings-page">
      <h1>Settings</h1>
      <form onSubmit={handleSubmit}>
        <section className="settings-section">
          <h2>Profile Settings</h2>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={profile.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={profile.password}
              onChange={handleInputChange}
              placeholder="Enter new password"
            />
          </div>
        </section>

        <section className="settings-section">
          <h2>Preferences</h2>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="notifications"
                checked={preferences.notifications}
                onChange={handlePreferencesChange}
              />
              Enable Notifications
            </label>
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="darkMode"
                checked={preferences.darkMode}
                onChange={handlePreferencesChange}
              />
              Enable Dark Mode
            </label>
          </div>
        </section>

        <button type="submit" className="save-button">
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
