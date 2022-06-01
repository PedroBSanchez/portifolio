import React from "react";
import clock from "../../assets/clockimage.png";
import tasklist from "../../assets/tasklist.png";

import "./ApplicationImage.css";

const ApplicationImage = ({ applicationName }) => {
  let applicationImage;

  switch (applicationName) {
    case "clock":
      applicationImage = clock;
      break;

    case "tasklist":
      applicationImage = tasklist;
      break;

    default:
      applicationImage = null;
      break;
  }

  return <img className="application-image-img" src={applicationImage} />;
};

export default ApplicationImage;
