import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import AppsIcon from '@mui/icons-material/Apps';

import proj1 from '../assets/proj1.png';
import proj2 from '../assets/proj2.png';
import proj3 from '../assets/proj3.png';


const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Project 1',
      image: proj1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      techStack: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 2,
      title: 'Project 2',
      image: proj2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      techStack: ['Python', 'Flask', 'SQL']
    },
    {
      id: 3,
      title: 'Project 3',
      image: proj3,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      techStack: ['React', 'Node.js', 'MongoDB']
    }
  ];

  const showProjectDetails = (id) => {
    setActiveProject(id);
  };

  const styles = {
    container: {
      padding: '4rem 0',
      position: 'relative',
      zIndex: 1,
    },
    heading: {
      textAlign: 'left',
      margin: '2rem',
      fontSize: '2rem',
      zIndex: 1,
    },
  }

  return (
    <div className="projects" id="projects" style={styles.container}>
      <h2 style={styles.heading}>
        <AppsIcon />
        Portfolio
      </h2>
      <div className="portfolio">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            isActive={activeProject === project.id}
            showProjectDetails={showProjectDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
