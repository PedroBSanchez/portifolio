import React, { useEffect, useState } from "react";

import ApplicationImage from "./ApplicationImage";
import ApplicationIcon from "./ApplicationIcon";

import "./Application.css";
import clock from "../../assets/clockimage.png";
import tasklist from "../../assets/tasklist.png";

const Application = ({
  application,
  title,
  technologies,
  description,
  linkFrontEnd,
  linkBackEnd,
  linkAplicacao,
}) => {
  const [onMouseOver, setOnMouseOver] = useState(false);

  const handleApplicationCardClick = () => {
    window.open(linkAplicacao);
  };

  return (
    <div
      className="application-card"
      onMouseOver={() => setOnMouseOver(true)}
      onMouseOut={() => setOnMouseOver(false)}
    >
      <div className="application-image" onClick={handleApplicationCardClick}>
        {!onMouseOver && <ApplicationImage applicationName={application} />}
        {onMouseOver && (
          <p className="application-text description">{description}</p>
        )}
      </div>
      <div className="application-title">
        {!onMouseOver && <h1 className="application-text title">{title}</h1>}
        {onMouseOver && linkFrontEnd && (
          <a className="application-text link" href={linkFrontEnd}>
            {`GitHub Front-end: ${linkFrontEnd}`}
            <hr />
            <br />
          </a>
        )}
        {onMouseOver && linkBackEnd && (
          <a className="application-text link" href={linkBackEnd}>
            {`GitHub Back-end: ${linkBackEnd}`}
            <hr />
            <br />
          </a>
        )}
        {onMouseOver && linkAplicacao && (
          <a className="application-text link" href={linkAplicacao}>
            Application: <br />
            {linkAplicacao}
            <hr />
          </a>
        )}
      </div>
      <div className="application-technologies">
        {technologies.map((tech) => (
          <ApplicationIcon technology={tech} />
        ))}
      </div>
    </div>
  );
};

export default Application;
