import React from "react";
import { Link } from "react-router-dom";
// import "../Dashboard/dashboard.css"; // Import CSS

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Welcome to Your Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/profile">View Profile</Link></li>
          <li><Link to="/consultations">Consultations</Link></li>
          <li><Link to="/search">Find Hiring Managers</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
