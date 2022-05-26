import React from "react";

import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="card">
        <div className="card-container-title">
          <h1 className="about-title">
            <u>About</u>
          </h1>
        </div>
        <div className="card-container-image"></div>
        <div className="card-container-text">
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            perspiciatis unde repellendus quas quis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
