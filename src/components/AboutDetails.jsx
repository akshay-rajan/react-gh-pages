import react, { useState } from "react";

import AboutMe from "./AboutMe";
import AboutCards from "./AboutCards";


export default function AboutDetails() {
  const container = {
      flex: 4,
      padding: '1rem',
      display: 'block',
      backgroundColor: 'black',
      maxWidth: '100%',
      height: 'auto',
      background: '#000',
      borderRadius: '0 1.5rem 1.5rem 0',
    };

  const [isExpanded, setExpanded] = useState(false);
  
  return (
    <>
      <div style={container} onMouseLeave={() => setExpanded(false)}>
        <AboutMe isExpanded={isExpanded} />
        <AboutCards 
          isExpanded={isExpanded} 
          setExpanded={setExpanded} 
        />
      </div>
    </>
  );
};