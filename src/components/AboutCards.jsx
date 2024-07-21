import React from "react";

import AboutCard from "./AboutCard";

export default function AboutCards() {

  const education = {
    title: "Education",
    description: "This is the description for education",
    content: [
      {
        "degree": "Masters in Computer Applications",
        "school": "College of Engineering, Trivandrum",
        "year": "2023 - Present",
        "marks": "CGPA: 9.36",
      },
      {
        "degree": "Bachelor of Science in Mathematics",
        "school": "University College, Trivandrum",
        "year": "2020 - 2023",
        "marks": "CGPA: 9.63 (Core) {College Topper}",
      },
      {
        "degree": "Higher Secondary",
        "school": "St. Joseph's Higher Secondary School",
        "year": "2018 - 2020",
        "marks": "Percentage: 94%",
      },
    ],
  };

  const skills = {
    title: "Skills",
    description: "This is the description for skills",
    content: [
      {
        "skill": "Django",
      },
      {
        "skill": "Flask",
      },
      {
        "skill": "Python",
      },
      {
        "skill": "C",
      },
      {
        "skill": "Java",
      },
      {
        "skill": "HTML & CSS",
      },
      {
        "skill": "JavaScript",
      },
      {
        "skill": "Bootstrap",
      },
      {
        "skill": "PHP",
      },
      {
        "skill": "SQL",
      },
      {
        "skill": "Linux",
      },
      {
        "skill": "Cybersecurity",
      },
      {
        "skill": "Git",
      },
      {
        "skill": "Data Structures",
      },
      {
        "skill": "Machine Learning",
      },
      {
        "skill": "Mathematics",
      },
    ],
  };

  // const experience = {
  //   title: "Experience",
  //   description: "This is the description for experience",
  //   content: [
  //     {
  //       "job": "Software Developer Intern",
  //       "company": "XTG Technologies",
  //       "year": "May 2024 - Present",
  //       "desc": "Developed a full-stack web application for managing employee data using React, Node.js, and MongoDB.",
  //     },
  //   ],
  // };

  const certifications = {
    title: "Certifications",
    description: "This is the description for certifications",
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

  const achievements = {
    title: "Achievements",
    description: "This is the description for achievements",
    content: [
      {
        "achievement": "College Topper",
        "year": "2023",
        "additional": "University College, Trivandrum",
      },
      {
        "achievement": "IIT JAM AIR 1778",
        "year": "2023",
        "additional": "",
      },
      {
        "achievement": "Rank 20 - Kerala MCA Entrance",
        "year": "2023",
        "additional": "",
      },
    ],
  };

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '20px' }}>
        <AboutCard {...education} />
        <AboutCard {...skills} />
        <AboutCard {...certifications} />
        <AboutCard {...achievements} />
      </div>
    </>
  );
};
