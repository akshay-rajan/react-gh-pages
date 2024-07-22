import React from "react";


export default function AboutCard(props) {
  const container = {
    font: `monospace`,
    fontSize: '15px',
    padding: '15px',
    paddingTop: '15px',
    marginLeft: '0',
    marginTop: '0',
    textAlign: 'left',
    display: 'block',
    backgroundColor: 'black',
    maxWidth: '100%',
    height: 'auto',
    aspectRatio: 'attr(width) / attr(height)',
    background: '#000',
    border: '0.1px solid rgb(100, 100, 100)',
    borderRadius: '10px',
  };
  const title = {
    font: `monospace`,
    color: 'wheat',
    fontSize: '15px',
    fontWeight: 'bold',
  };
  const desc = {
    font: `monospace`,
    color: 'white',
    fontSize: '15px',
    marginTop: '5px',
    opacity: '0.8',
  };
  const points = {
    font: `monospace`,
    color: 'white',
    fontSize: '15px',
    marginTop: '5px',
    opacity: '0.8',
  };
  const item = {
    display: 'inline',
    font: `monospace`,
    color: 'white',
    fontSize: '15px',
    marginTop: '5px',
    opacity: '0.8',
  }

  return (
    <>
      <div 
        style={props.isExpanded ? {display: 'none'} : container} 
        onMouseEnter={() => {
          props.setExpanded(true);
          props.setHovering(props.title);
        }
      }>
        <div style={title}>{props.title}</div>
        <div style={desc}>
          {props.description}
        </div>
        <div style={points}>
          {props.points.map((point) => (
            <li style={item}>⚫ {point} </li>
          ))}
        </div>
      </div>
    </>
  );
};