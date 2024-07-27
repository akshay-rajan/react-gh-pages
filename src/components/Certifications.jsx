import React from "react";

export default function Certifications(props) {
  const container = {
    display: 'block',
    font: `monospace`,
    position: 'relative',
    width: '100%',
    margin: '10px',
    padding: '10px',
  };
  const title = {
    display: 'flex',
    font: `monospace`,
    color: 'white',
    fontSize: '30px',
    textAlign: 'left',
    fontWeight: 'bold',
  };
  
  
  return (
    <>
      <div style={container}>
        <div style={title} onMouseEnter={() => props.setExpanded(false)}>Certifications</div>
        
      </div>
    </>
  );
};
