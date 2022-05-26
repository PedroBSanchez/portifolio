import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { BsGithub, BsLinkedin, BsFillEnvelopeFill } from "react-icons/bs";

import "./ThirdCardContact.css";

const ThirdCardContact = () => {
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

  return (
    <Tilt className="card-contact-card-email" options={options}>
      <div>
        <BsFillEnvelopeFill size={60} />
        <h1 className="card-contact-card-text-email">
          contato.pedrosanchez
          <br />
          @gmail.com
        </h1>
      </div>
    </Tilt>
  );
};

export default ThirdCardContact;
