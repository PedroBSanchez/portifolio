import React from "react";

import CardContact from "./infoCards/CardContact";
import SecondCardContact from "./infoCards/SecondCardContact";
import ThirdCardContact from "./infoCards/ThirCardContact";

import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-card-title-container">
          <h1 className="contact-card-title">
            <u>Contact</u>
          </h1>
        </div>
        <div className="contact-infos-container">
          <CardContact />
          <SecondCardContact />
          <ThirdCardContact />
        </div>
      </div>
    </div>
  );
};

export default Contact;
