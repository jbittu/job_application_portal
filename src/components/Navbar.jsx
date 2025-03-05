import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Job Portal</h2>
      <div className="nav-link">
        <Link to="/">Home</Link>
        <Link to="/applications">Applications</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
