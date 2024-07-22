import React from "react";

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
    color: 'wheat',
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
  
  return (
    <>
      <div style={container}>
        <div style={title}>
          Education
        </div>
        <div style={eduData}>
          <EduBlock content={props.content[0]} />
          <EduBlock content={props.content[1]} />
          <EduBlock content={props.content[2]} />
        </div>
      </div>
    </>
  );
};
