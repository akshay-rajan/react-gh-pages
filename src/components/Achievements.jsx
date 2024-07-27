import React from "react";

import Badge from "./Badge";

import BadgeLogo from "../assets/badge.png";

export default function Achievements(props) {
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

  const logo = [BadgeLogo];
    
  return (
    <>
      <div style={container}>
        <div style={title} onMouseEnter={() => props.setExpanded(false)}>Achievements</div>
        
        {props.content.map((achievement, index) => {
          console.log(achievement);
          return <Badge key={index} logo={logo[0]} content={achievement} />
        })}
      </div>
    </>
  );
};
