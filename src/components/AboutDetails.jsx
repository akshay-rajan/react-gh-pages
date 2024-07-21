import react from "react";

import AboutMe from "./AboutMe";


export default function AboutDetails() {
  const flexRight = {
    container: {
      flex: 4,
      padding: '1rem',
      display: 'block',
      backgroundColor: 'black',
      maxWidth: '100%',
      height: 'auto',
      aspectRatio: 'attr(width) / attr(height)',
      background: '#000',
      borderRadius: '0 1.5rem 1.5rem 0',
    },
  }
  return (
    <>
      <div style={flexRight.container}>
        <AboutMe />
        <div>cards of info</div>
      </div>
    </>
  );
};
