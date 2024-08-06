import React from 'react';
import BackgroundAnimation from './BackgroundAnimation';

const Main = () => (
  <div className="main" id="home">
    <div className="bg"></div>
    <div className="content first quarter">
      <div className="name-container">
        <div className="name-intro"></div>
        <h1 className="name marquee">
          <span className="m1">SOFTWARE DEVELOPER </span>
          <span className="m2">SOFTWARE DEVELOPER </span>
        </h1>
        <div className="skills"></div>
      </div>
    </div>
  </div>
);

export default Main;
