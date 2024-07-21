import React, { useState, useEffect } from "react";
import AboutDetails from "./AboutDetails";
import AboutProfile from "./AboutProfile";

export default function About() {
  const styles = {
    laptopStyle: {
      position: 'relative',
      margin: 'auto',
      maxWidth: '80rem',
    },
    laptopScreenStyle: {
      display: 'flex',
      position: 'relative',
      zIndex: 1,
      padding: '10px',
      height: '90vh',
      width: '90vw',
      borderRadius: '2rem',
      background: '#ecf1f7',
      backgroundImage: 'linear-gradient(to bottom, #333, #111)',
      boxShadow: '0 0.1rem 0 #cfcfcf',
      border: '1px solid wheat',
    },
    imgStyle: {
      display: 'block',
      maxWidth: '100%',
      height: 'auto',
      aspectRatio: 'attr(width) / attr(height)',
      background: '#000',
      borderRadius: '1.5rem',
    },
    laptopShadowStyle: {
      position: 'absolute',
      right: '-10%',
      bottom: '-2.5rem',
      left: '-10%',
      zIndex: 0,
      height: '2rem',
      background: 'radial-gradient(ellipse closest-side,#000,transparent)',
      opacity: 0.5,
    }
  }
  const bigScreen = {
    ...styles
  };

  const smallScreen = {
    ...styles
  };

  // State to hold the current styles
  const [currentStyles, setCurrentStyles] = useState(bigScreen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCurrentStyles(smallScreen);
      } else {
        setCurrentStyles(bigScreen);
      }
    };

    // Set the initial style based on the current window width
    handleResize(); 
    // Update styles on window resize
    window.addEventListener("resize", handleResize); 
    // Cleanup on component unmount
    return () => window.removeEventListener("resize", handleResize); 
  }, []);

  return (
    <main>
      <div className="container">
        <div className="laptop" style={currentStyles.laptopStyle}>
          <div className="laptop__screen" style={currentStyles.laptopScreenStyle}>
            <AboutProfile />
            <AboutDetails />
          </div>
          <div className="laptop__shadow" style={currentStyles.laptopShadowStyle}></div>
        </div>
      </div>
    </main>
  );
}
