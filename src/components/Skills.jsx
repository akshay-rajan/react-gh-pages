import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

import Pie from "./Pie";

export default function Skills(props) {
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
  const skillData = {
    display: 'flex',
    textAlign: 'left',
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
    // backgroundColor: '#242424',
  };
  const closeButton = {
    position: 'absolute',
    top: '20',
    left: '90%',
    color: 'white',
    cursor: 'pointer',
  };
  const pieInfo = {
    flex: 2,
    font: `monospace`,
    color: 'white',
    fontSize: '15px',
    margin: '15px 35px 0 0',
    opacity: '0.8',
    textAlign: 'left',
    padding: '1rem',
    maxHeight: '330px',    
    borderRadius: '10px',
    // backgroundColor: '#242424',
  }
  const skillsList = {
    columnCount: '2',
    columnGap: '10px',
    padding: '0',
    margin: '0',
  };
  
  const [info, setInfo] = useState([]);

  return (
    <>
      <div style={container}>
        <div style={title} onMouseEnter={() => props.setExpanded(false)}>
          <div>
            Skills
          </div>
          <div style={closeButton}>
            <CloseIcon />
          </div>
        </div>
        <div style={skillData}>

          <Pie setInfo={setInfo}></Pie>
          <div style={pieInfo}>
            <ul style={skillsList}>
              {info.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </>
  );
};
