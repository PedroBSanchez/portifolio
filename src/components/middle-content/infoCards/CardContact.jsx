import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { BsGithub, BsLinkedin } from "react-icons/bs";

import "./CardContact.css";

const CardContact = () => {
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
    window.open("https://github.com/PedroBSanchez");
  };

  return (
    <Tilt className="card-contact-card" options={options} onClick={handleClick}>
      <div>
        <BsGithub size={60} onClick={handleClick} />
        <h1 className="card-contact-card-text">/PedroBSanchez</h1>
      </div>
    </Tilt>
  );
};

export default CardContact;
