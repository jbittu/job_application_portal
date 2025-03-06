import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import "../styles/Navbar.css";
import {UserContext} from "../context/UserContext"


const Navbar = () => {

    const {user} = useContext(UserContext);
  return (
    <nav className="navbar">
      <h2>Job Portal</h2>
      <div className="nav-link">
        <Link to="/">Home</Link>
        <Link to="/applications">Applications</Link>
        <Link to="/profile">Profile</Link>
      </div>
      <div className="user-info">
        <p>{user.username}</p>
        <p>{user.useremail}</p>
      </div>
    </nav>
  );
};

export default Navbar;
