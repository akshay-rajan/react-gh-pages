import React, { useState } from "react";

import EduBlock from "./EduBlock";

export default function Education(props) {
  const container = {
    display: 'block',
    font: `monospace`,
    position: 'relative',
    width: '100%',
    margin: '10px',
    padding: '10px',
  };
  const title = {
    font: `monospace`,
    color: 'white',
    fontSize: '30px',
    textAlign: 'left',
    fontWeight: 'bold',
  };
  const eduData = {
    font: `monospace`,
    color: 'white',
    fontSize: '15px',
    margin: '15px 35px 0 0',
    opacity: '0.8',
    textAlign: 'left',
    padding: '1rem',
    border: '0.1px solid rgb(100, 100, 100)',
    height: 'auto',
    borderRadius: '10px',
    backgroundColor: '#242424',
  };
  const rightAlign = {
    textAlign: 'right',
    float: 'right',
    marginRight: '0',

  }


  
  return (
    <>
      <div style={container}>
        <div style={title}>
          Education
        </div>
        <div style={eduData}>
          <EduBlock content={props.content[0]} />

          <div style={{display: "flex"}}>
            <svg style={{width: "100%", height: "120px"}} viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
              {/*
                Moveto(265, 0) and draw a cubic Beizer curve CurveTo(1050, 605)
                The cubic Beizer curve is defined by two control points and an end point
                The first control point is (250, 250) and the second control point is (400, 100)
              */}
              <path d="M240,0 C250,250,400,100 3050,240" stroke="grey" strokeWidth="10px" fill="transparent" />
            </svg>

            <div style={rightAlign}>
              <EduBlock content={props.content[1]} />
            </div>
          </div>
          <div style={{display: "flex"}}>
              
            <EduBlock content={props.content[2]} />

            <svg viewBox="0 0 auto auto" xmlns="http://www.w3.org/2000/svg"> 
              <path d="M0,50 C100,50 100,162 150,0" stroke="grey" strokeWidth="4px" fill="transparent" />
            </svg>

          </div>
        </div>
      </div>
    </>
  );
};
