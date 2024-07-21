import React from "react";

export default function Education(props) {
  const container = {
    font: `monospace`,
    display: 'block',
    borderRadius: '10px',
    position: 'relative', // or 'absolute', 'fixed', depending on your needs
    zIndex: 1000, // High value to ensure it's on top
  };
  
  return (
    <>
      <div style={container}>
        Hello, world!
      </div>
    </>
  );
};
