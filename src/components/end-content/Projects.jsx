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
        <Application
          application={"clock"}
          title={"Clock"}
          technologies={["html", "css", "javascript"]}
          description={
            "Project of a functional clock that has a greater focus on CSS and JavaScript."
          }
          linkFrontEnd={"https://github.com/PedroBSanchez/clock"}
          linkAplicacao={"https://clinquant-chimera-9981c3.netlify.app/"}
        />
        <Application
          application={"tasklist"}
          title={"TaskList"}
          technologies={["nodejs", "react", "mongodb"]}
          description={
            "Project to implement a task list manager and check if you have already finished the task."
          }
          linkFrontEnd={"https://github.com/PedroBSanchez/tasklist"}
          linkBackEnd={"https://github.com/PedroBSanchez/taskList_api"}
          linkAplicacao={"https://beautiful-kangaroo-204bb5.netlify.app/"}
        />
      </div>
    </div>
  );
};

export default Projects;
