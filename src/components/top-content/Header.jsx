import React from "react";
import Navigation from "../top-content/Navigation";

import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <Navigation />
        <div className="text-container">
          <h1 className="text">Welcome to my portifolio</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
