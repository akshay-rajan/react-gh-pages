import React from "react";

export default function AboutProfile() {
  const flexLeft = {
    container: {
      flex: 1,
      padding: '1rem',
    },
  }
  return (
    <>
      <div style={flexLeft.container}>
        <div>photo</div>
        <div>details</div>
      </div>
    </>
  );
};
