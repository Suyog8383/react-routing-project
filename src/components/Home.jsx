import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
function Home() {
  return (
    <div id="container">
      <div className="container-box">
        <span className="content">
          THIN
          <br />
          CRUST PIZZA
        </span>
        <p className="content02">
          <Link to="menu">Let me see the menu</Link>
        </p>
      </div>
    </div>
  );
}

export default Home;
