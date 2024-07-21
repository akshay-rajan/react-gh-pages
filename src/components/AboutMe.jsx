import React from "react";

export default function AboutMe({ isExpanded }) {
  const content = {
    container: {
      font: `monospace`,
      fontSize: '15px',
      padding: '1rem',
      marginLeft: '0',
      marginBottom: '1rem',
      textAlign: 'left',
      display: 'block',
      backgroundColor: 'black',
      maxWidth: '100%',
      height: 'auto',
      aspectRatio: 'attr(width) / attr(height)',
      background: '#000',
      border: '0.1px solid rgb(100, 100, 100)',
      borderRadius: '10px',
    },
    heading: {
      font: `monospace`,
      color: 'wheat',
      fontSize: '25px',
      fontWeight: 'bold',
    },
    }

  return (
    <>
      <div style={isExpanded ? {display: "none"} : content.container}>
        <div style={content.heading}>
          About Me
        </div>
        <div>
          As an aspiring programmer with a passion for technology, I am committed to continuous learning and professional growth. 
          My goal is to build a robust career in Computer Science, where I can contribute to and make a significant impact in various innovative fields.
          My interests span across a diverse range of disciplines within technology, including Web Programming, App Development, Artificial Intelligence, Data Science, and Cyber Security. 
          With each day, I strive to enhance my skills and knowledge, staying abreast of the latest trends and advancements in technology. 
          I am currently working on my skills in Machine Learning and Cybersecurity. 
        </div>
      </div>
    </>
  );
};
