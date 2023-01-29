import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
  return (
    <>
      <div id="nav_bar">
        <Link className="nav_bar_a" to="/">
          Home
        </Link>
        <Link className="nav_bar_a" to="menu">
          Menu
        </Link>
        <Link className="nav_bar_a" to="contact">
          Contact
        </Link>
        <Link className="nav_bar_a" to="about">
          About
        </Link>
      </div>
    </>
  );
}

export default NavBar;
