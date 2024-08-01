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
    width: '100%',
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
    display: 'flex',
    flexWrap: 'wrap',
    columnGap: '10px',
    padding: '0',
    margin: '0',
  };
  const skillStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px',
    margin: '5px',
    borderRadius: '5px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    fontSize: '12px',
    fontWeight: 'bold',
    width: 'auto',
  };

  const small = {
    skillData: {
      display: 'block',
      textAlign: 'center',
      font: `monospace`,
      color: 'white',
      fontSize: '15px',
      margin: '15px 35px 0 0',
      opacity: '0.8',
      padding: '1rem',
      border: '0.1px solid rgb(100, 100, 100)',
      height: 'auto',
      borderRadius: '10px',
    },
  }
  
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
        <div style={window.innerWidth < 798 ? small.skillData : skillData}>

          <Pie setInfo={setInfo}></Pie>

          <div style={pieInfo}>
            <div style={skillsList}>
              {info.map((item, index) => (
                <div style={skillStyle} key={index}>
                  
                  {item.logo && <img src={item.logo} alt="" style={{ width: '20px', height: '20px', marginRight: '5px' }} />}
                  {item.name}
                  
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
