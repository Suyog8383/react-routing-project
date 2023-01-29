import React from "react";
import "./style.css";
function About() {
  return (
    <div className="about-cont">
      <div className="contain">
        <h1>About</h1>
        <p style={{ width: "827px" }}>
          The Pizza Restaurant was founded in blabla by Mr. Italiano in lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>
        <img
          style={{ width: "400px", height: "400px" }}
          src="src\assets\onepage_restaurant.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default About;
