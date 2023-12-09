import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="main-container">
      <h1>Home</h1>
      <ul>
        <li>
          <h3>About</h3>
        </li>
        <li>
          <h3>profile</h3>
        </li>
        <li>
          <h3>signin</h3>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
