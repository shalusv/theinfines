// UsersPageAdd.js
import React, { useState } from "react";
import "./UsersPageAdd.css";

const UsersPageAdd = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle user creation logic
    console.log("User added", user);
  };

  return (
    <div className="users-page-add">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <input
            type="text"
            id="role"
            name="role"
            value={user.role}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Add User
        </button>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <input
            type="text"
            id="role"
            name="role"
            value={user.role}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Add User
        </button>
      </form>
    </div>
  );
};

export default UsersPageAdd;
