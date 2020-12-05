import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <ul className="Navbar" onClick={(e) => console.log(e.target)}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/feed">Feed</Link>
      </li>
      <li>
        <Link to="/create">Create</Link>
      </li>
    </ul>
  );
}

export default Navbar;
