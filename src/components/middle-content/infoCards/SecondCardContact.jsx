import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { BsGithub, BsLinkedin } from "react-icons/bs";

import "./SecondCardContact.css";

const SecondCardContact = () => {
  const Tilt = (props) => {
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);

    return <div ref={tilt} {...rest} />;
  };

  const options = {
    scale: 1.2,
    speed: 1000,
    max: 30,
  };

  const handleClick = () => {
    window.open("https://www.linkedin.com/in/pedro-sanchez-b884831b2/");
  };

  return (
    <Tilt className="card-contact-card" options={options} onClick={handleClick}>
      <div>
        <BsLinkedin size={60} />
        <h1 className="card-contact-card-text">/pedro-sanchez</h1>
      </div>
    </Tilt>
  );
};

export default SecondCardContact;
