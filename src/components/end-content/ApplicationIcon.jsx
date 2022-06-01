import React, { useState, useEffect } from "react";

import "./ApplicationIcon.css";

import {
  DiNodejsSmall,
  DiReact,
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiMongodb,
  DiJavascript,
} from "react-icons/di";

const ApplicationIcon = ({ technology }) => {
  const iconSize = 50;
  return (
    <>
      {technology === "nodejs" && (
        <DiNodejsSmall size={iconSize} className="icon" />
      )}
      {technology === "react" && <DiReact size={iconSize} className="icon" />}
      {technology === "html" && <DiHtml5 size={iconSize} className="icon" />}
      {technology === "css" && <DiCss3 size={iconSize} className="icon" />}
      {technology === "javascript" && technology && (
        <DiJavascript size={iconSize} className="icon" />
      )}
      {technology === "mongodb" && (
        <DiMongodb size={iconSize} className="icon" />
      )}
    </>
  );
};

export default ApplicationIcon;
