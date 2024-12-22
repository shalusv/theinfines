import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import PagesHero from "../../../components/client/common/PagesHero/PagesHero";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulating login validation
    if (email === "developer" && password === "123") {
      localStorage.setItem("isAuthenticated", true);
      navigate("/admin");
    } else {
      setErrorMessage("Invalid credentials. Please try again."); // Set the error message
    }
  };

  return (
    <div className="page-container">
      <PagesHero title="Login" subtitle="Get Full Expereince..." />
      <div className="form-container">
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit">Login</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}{" "}
          {/* Error message */}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
