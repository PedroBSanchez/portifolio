import React, { useEffect } from "react";

import "./Application.css";
import clock from "../../assets/clockimage.png";

//As imagems das aplicações devem ser do tamanho de até 220x140

// Transformar img e os ícones em outros componentes

const Application = ({
  application,
  title,
  technologies,
  description,
  links,
}) => {
  let applicationImage;

  switch (application) {
    case "clock":
      applicationImage = clock;
      break;

    default:
      applicationImage = clock;
      break;
  }

  return (
    <div className="application-card">
      <div className="application-image">
        <img className="application-image-img" src={applicationImage} />
      </div>
      <div className="application-title">
        <h1 className="application-title-text">{title}</h1>
      </div>
      <div className="application-technologies"></div>
    </div>
  );
};

export default Application;
