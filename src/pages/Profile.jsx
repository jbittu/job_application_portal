import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const {user, updateUser} = useContext(UserContext);
  const [userData, setUserData] = useState({
    username: user?.username || "",
    useremail: user?.useremail || "",
  });

  const handleChange = (e) => {
    setUserData({...userData, [e.target.name] : e.target.value})
  };

  const handleSubmit = () => {
    e.preventDefault();
    updateUser(userData);
    alert("profile updated")
    navigate("/")

  }

  return (
    <div className="profile">
      <h2>Profile Setting</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User Name:
          <input
            type="text"
            placeholder="User Name"
            name="username"
            value={userData.username}
            onChange={handleChange}
            required
          ></input>
        </label>
        <label>
          User Email:
          <input
            type="email"
            placeholder="User Email"
            name="useremail"
            value={userData.useremail}
            onChange={handleChange}
            required
          ></input>
        </label>
        <button type="submit">Save Data</button>
      </form>
    </div>
  );
};

export default Profile;
