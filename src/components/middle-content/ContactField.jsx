import React from "react";

import "./ContactField.css";

import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const ContactField = ({ iconType, link, user }) => {
  const handleClick = () => {};

  return (
    <>
      <div className="contactField-container">
        {iconType == "github" && <BsGithub size={50} />}
        {iconType == "instagram" && <BsInstagram size={50} />}
        {iconType == "linkedin" && <BsLinkedin size={50} />}
        <a className="contactField-anchor" href={link} target="_blank">
          {user}
        </a>
      </div>
    </>
  );
};

export default ContactField;
