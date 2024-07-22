import React from "react";

import loading from "../assets/github-loading.gif";
import done from "../assets/green-checkmark.png";

export default function EduBlock({ content, setCurrentEdu, index }) {

  const container = {
    display: 'flex',
    font: `monospace`,
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
  
  return (
    <>
      <div style={container} onMouseEnter={() => setCurrentEdu(index.index)} onMouseLeave={setCurrentEdu(-1)}>
        
        {content.ongoing ? <img style={icon} src={loading} alt="Loading" />: <img style={icon} src={done} alt="Loading" />}

        <div>
          <div>
            {content.degree} 
          </div>
          <div>
            {content.school} <br />
            ({content.year}) 
            {content.marks} <br />
          </div>
        </div>
      </div>
    </>
  );
}
