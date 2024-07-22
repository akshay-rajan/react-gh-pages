import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

import EduBlock from "./EduBlock";
import SvgComponent1 from "./SvgComponent1";
import SvgComponent2 from "./SvgComponent2";

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
    display: 'flex',
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
  };
  const closeButton = {
    position: 'absolute',
    top: '20',
    left: '90%',
    color: 'white',
    cursor: 'pointer',
  };

  const [currentEdu, setCurrentEdu] = useState(-1);

  
  return (
    <>
      <div style={container}>
        <div style={title} onMouseEnter={() => props.setExpanded(false)}>
          <div>
            Education 
          </div>
          <div style={closeButton}>
            <CloseIcon />
          </div>
        </div>
        <div style={eduData}>
          <EduBlock content={props.content[0]} setCurrentEdu={setCurrentEdu} index={{index: 0}} />

          <div style={{display: "flex"}}>
            
            <SvgComponent1 currentEdu={currentEdu} />

            <div style={rightAlign}>
              <EduBlock content={props.content[1]} setCurrentEdu={setCurrentEdu} index={{index: 1}} />
            </div>
          </div>
          <div style={{display: "flex"}}>
            <EduBlock content={props.content[2]} setCurrentEdu={setCurrentEdu} index={{index: 2}} />

            <SvgComponent2 currentEdu={currentEdu} />

          </div>
        </div>
      </div>
    </>
  );
};
