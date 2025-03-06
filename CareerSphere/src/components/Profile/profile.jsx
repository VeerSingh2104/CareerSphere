import React, { useState } from "react";
// import "../Profile/profile.css"; // Import CSS

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    role: "Student",
    bio: "Aspiring software developer.",
  });

  return (
    <div className="profile-container">
      <h2>{user.name}'s Profile</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <p><strong>Bio:</strong> {user.bio}</p>
    </div>
  );
};

export default Profile;
