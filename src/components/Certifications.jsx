import React from "react";

export default function Certifications(props) {
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
  
  const certifications = {
    title: "Certifications",
    description: "Proofs of sacrifices and dedication",
    points: ["Harvard", "Google", "IIT Madras", "ACM..."],
    content: [
      {
        "certification": "Full Stack Web Development",
        "year": "2024",
        "institution": "Udemy",
      },
      {
        "certification": "Machine Learning",
        "year": "2024",
        "institution": "Coursera",
      },
      {
        "certification": "Google Cybersecurity Professional",
        "year": "2024",
        "institution": "Coursera",
      },
    ],
  };
  
  return (
    <>
      <div style={container}>
        <div style={title} onMouseEnter={() => props.setExpanded(false)}>Certifications</div>
          {certifications.content.map((certification, index) => {
            return (
              <div className="certification-card" key={index}>
                <div style={{color: "white", fontSize: "20px"}}>{certification.certification}</div>
                <div style={{color: "grey"}}>{certification.year}</div>
                <div style={{color: "grey"}}>{certification.institution}</div>
              </div>
            );
          }
        )}
      </div>
    </>
  );
};
