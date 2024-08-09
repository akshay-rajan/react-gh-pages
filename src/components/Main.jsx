import React from 'react';

import "../styles/Main.css";

import dp from "../assets/main.png";

const Main = () => {

  return (
    <div className="main" id="home">
      <div className="bg"></div>
      <div className="content first quarter">
        <div className="name-container">
          <div className="name-intro imgDiv">
            <img src={dp} alt="dp" className="main-img" />
          </div>
          <h1 className="name marquee">
            <span className="m1">SOFTWARE DEVELOPER </span>
            <span className="m2">SOFTWARE DEVELOPER </span>
          </h1>
        </div>
      </div>
    </div>
  )
};

export default Main;
