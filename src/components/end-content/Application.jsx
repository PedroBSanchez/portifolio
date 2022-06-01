import React, { useEffect } from "react";

import ApplicationImage from "./ApplicationImage";
import ApplicationIcon from "./ApplicationIcon";

import "./Application.css";
import clock from "../../assets/clockimage.png";
import tasklist from "../../assets/tasklist.png";

//As imagems das aplicações devem ser do tamanho de até 220x140

// Transformar img e os ícones em outros componentes

const Application = ({
  application,
  title,
  technologies,
  description,
  links,
}) => {
  return (
    <div className="application-card">
      <div className="application-image">
        <ApplicationImage applicationName={application} />
      </div>
      <div className="application-title">
        <h1 className="application-title-text">{title}</h1>
      </div>
      <div className="application-technologies">
        {technologies.map((tech, index) => (
          <ApplicationIcon technology={tech} />
        ))}
      </div>
    </div>
  );
};

export default Application;
