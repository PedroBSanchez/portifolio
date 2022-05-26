import React from "react";

import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <div className="header-nav-container">
        <nav className="header-nav">
          <a href="#about" className="nav-button">
            About
          </a>
          <a href="#about" className="nav-button">
            Contact
          </a>
          <a href="#projects" className="nav-button">
            Projects
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
