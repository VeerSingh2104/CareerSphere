import React from "react";
import { Link } from "react-router-dom";
import "../Homepage/homepage.css"; // Import CSS

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to CareerSphere</h1>
      <p className="home-subtitle">Your Personalized Career Consultation Platform</p>

      {/* Call-to-Action Buttons */}
      <div className="cta-buttons">
        <Link to="/signup" className="cta-button">Sign Up</Link>
        <Link to="/login" className="cta-button">Login</Link>
      </div>

      {/* Features Overview */}
      <div className="features-container">
        <h2>Why Choose CareerSphere?</h2>
        <ul className="features-list">
          <li>🗣 One-on-one career consultations</li>
          <li>📄 Resume building & review</li>
          <li>💼 Industry expert guidance</li>
          <li>📅 Schedule mock interviews</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
