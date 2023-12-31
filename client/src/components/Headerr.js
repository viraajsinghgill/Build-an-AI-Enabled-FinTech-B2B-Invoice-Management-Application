import React from "react";

import abclogo from "../images/abclogo.svg";
import hrclogo from "../images/hrclogo.svg";
import img from "../images/img.png";
import "../styles/header.css";

const Headerr = () => {
  return (
    <div className="header">
      <div className="upper">
        <div className="logocompany">
          <img src={abclogo} alt="ABC Product Logo" />
        </div>
        <div className="logohrc">
          <img src={hrclogo} alt="Highradius Logo" />
          {/* <img src= {img} alt="Ingenium"></img> */}
        </div>
      </div>
      <div className="lower">
        <h2 className="inv">Invoices</h2>
      </div>
    </div>
  );
};

export default Headerr;
