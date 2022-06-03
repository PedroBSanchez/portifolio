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
            Technology lover and eager to learn more and more to create systems
            to make our lives easier.
            <br />
            <br />
            Front-End: React and React Native.
            <br />
            <br />
            Back-End: NodeJs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
