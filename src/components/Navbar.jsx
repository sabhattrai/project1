import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="main-container">
      <Link to="/">
        <h1>Home</h1>
      </Link>

      <ul>
        <Link to="/about">
          <li>
            <h3>About</h3>
          </li>
        </Link>
        <Link to="/profile">
          <li>
            <h3>profile</h3>
          </li>
        </Link>
        <Link to="/signin">
          <li>
            <h3>signin</h3>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
