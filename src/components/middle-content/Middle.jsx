import React from "react";
import About from "./About";
import Contact from "./Contact";
import { BsGithub } from "react-icons/bs";

import "./Middle.css";

const Middle = () => {
  return (
    <div className="middle-container">
      <About />
      <Contact />
    </div>
  );
};

export default Middle;
