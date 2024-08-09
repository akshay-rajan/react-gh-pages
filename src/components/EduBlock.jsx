import React from "react";

import loading from "../assets/github-loading.gif";
import done from "../assets/green-checkmark.png";

export default function EduBlock({ content, setCurrentEdu, index }) {

  const container = window.innerWidth < 798 ? {
    display: 'flex',
    width: 'auto',
    textAlign: 'left',
    border: '0.1px solid rgb(100, 100, 100)',
    borderRadius: '10px',
    backgroundColor: 'black',
    padding: '1rem',
    margin: '0',
    height: '100px',
  } : {
    display: 'flex',
    width: '300px',
    textAlign: 'left',
    border: '0.1px solid rgb(100, 100, 100)',
    borderRadius: '10px',
    backgroundColor: 'black',
    padding: '1rem',
    margin: '0',
    height: '100px',
  };
  const icon = {
    width: '15px',
    height: '15px',
    margin: '10px',
    marginLeft: '0',
  }
  const degree = {
    fontWeight: 'bold',
    fontSize: '15px',
  };
  const marks = {
    color: 'wheat',
    fontSize: '13px',
  };
  
  const handleMouseEnter = () => setCurrentEdu(index.index);
  const handleMouseLeave = () => setCurrentEdu(-1);

  return (
    <>
      <div style={container} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        
        {content.ongoing ? <img style={icon} src={loading} alt="Loading" />: <img style={icon} src={done} alt="Loading" />}

        <div>
          <div style={degree}>
            {content.degree} 
          </div>
          <div>
            {content.school}
          </div>
          <div style={{fontSize: "14px"}}>({content.year})</div>
          <div style={marks}>
            {content.marks} <br />
          </div>
        </div>
      </div>
    </>
  );
}
