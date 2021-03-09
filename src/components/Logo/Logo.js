import React, { Component } from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import logo from "./eye.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 50 }}
        style={{ height: 150, width: 250 }}
      >
        <div className="Tilt-inner">
          <img style={{ paddingTop: "7px" }} src={logo} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
