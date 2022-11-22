import React from "react";
import Tilt from "react-parallax-tilt";
import face from "./face.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="tilt">
        <img src={face} alt="face-recognition" />
      </Tilt>
    </div>
  );
};

export default Logo;
