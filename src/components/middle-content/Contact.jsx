import React from "react";
import ContactField from "./ContactField";

import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-card-title">
          <h1 className="contact-card-title-text">
            <u>Contact</u>
          </h1>
        </div>
        <ContactField
          iconType={"github"}
          link={"https://github.com/PedroBSanchez"}
          user={"/PedroBSanchez"}
        />
        <ContactField
          iconType={"linkedin"}
          link={"https://www.linkedin.com/in/pedro-sanchez-b884831b2/"}
          user={"/pedro-sanchez"}
        />
        <ContactField
          iconType={"instagram"}
          link={"https://www.instagram.com/pedro.bsanchez/"}
          user={"/pedro.bsanchez"}
        />
      </div>
    </div>
  );
};

export default Contact;
