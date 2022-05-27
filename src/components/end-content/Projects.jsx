import React from "react";
import Application from "./Application";

import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-title-container">
        <h1 className="projects-text-title">
          <u>Projects</u>
        </h1>
      </div>
      <div className="projects-aplications-container">
        <Application applicationImage={"clock"} title={"Clock"} />
      </div>
    </div>
  );
};

export default Projects;
