import React from "react";
import { Link, useNavigate} from "react-router-dom";
// import "../Dashboard/dashboard.css"; // Import CSS

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/")
  }

  return (
    <div className="dashboard-container">
      <h1>Welcome to Your Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/profile">View Profile</Link></li>
          <li><Link to="/consultations">Consultations</Link></li>
          <li><Link to="/search">Find Hiring Managers</Link></li>
          <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;


{}