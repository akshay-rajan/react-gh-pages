import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { PieChart, pieArcLabelClasses } from "@mui/x-charts";


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

  const data = [
    { id: 0, value: 33, name: 'Software' },
    { id: 1, value: 33, name: 'AI' },
    { id: 2, value: 33, name: 'Linux' },
  ];
  

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

        <PieChart
          colors={['wheat', '#ffccff', '#ccffff']}
          series={[
            {
              data,
              paddingAngle: 5,
              innerRadius: 50,
              cornerRadius: 5,
              startAngle: 0 - 60,
              endAngle: 360 + 60,
              arcLabel: (item) => `${item.name}`,
              highlightScope: { faded: 'global', highlighted: 'item' },
              faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: 'black',
              fontSize: 14,
              fontWeight: 'bold',
            },
          }}
          height={400}
        />

        </div>
      </div>
    </>
  );
};
