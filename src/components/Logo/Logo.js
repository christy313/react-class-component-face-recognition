import React from "react";
import Tilt from "react-parallax-tilt";
import face from "./face.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt>
        <div className="tilt">
          <div>
            <img src={face} alt="face-recognition" />
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
