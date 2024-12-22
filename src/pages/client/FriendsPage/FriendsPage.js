import React, { useEffect, useState } from "react";
import PagesHero from "../../../components/client/common/PagesHero/PagesHero";
import config from "../../../config/config"; // Importing the config file
import "./FriendsPage.css";

const FriendsPage = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    // Fetch data from your API using the API URL from config.js
    fetch(`${config.API_URL}/friends`)
      .then((response) => response.json())
      .then((data) => setFriends(data))
      .catch((error) => console.error("Error fetching friends data:", error));
  }, []);

  return (
    <div className="page-container">
      <PagesHero title="Our Friends" subtitle="Connect and Network" />
      <section className="friends-content">
        <div className="friends-table-container">
          <h2>Friends List</h2>
          <table className="friends-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {friends.length > 0 ? (
                friends.map((friend) => (
                  <tr key={friend.id}>
                    <td>{friend.id}</td>
                    <td>{friend.name}</td>
                    <td>{friend.email}</td>
                    <td>{friend.phone || "N/A"}</td>{" "}
                    {/* Display "N/A" if phone is missing */}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No friends found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default FriendsPage;
