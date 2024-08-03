import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

import proj1 from '../assets/proj1.png';
import proj2 from '../assets/proj2.png';
import proj3 from '../assets/proj3.png';
import zIndex from '@mui/material/styles/zIndex';

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

  const toggleProject = (id) => {
    setActiveProject(activeProject === id ? null : id);
  };

  const styles = {
    cardContainer: {
      display: 'block',
      width: '100%',
      height: 'auto',
      zIndex: '1',
    },
  }

  return (
    <div className="project-wrapper" id="projects">
      <div className="project-header">
        <h1 className="project-header__title">Portfolio</h1>
      </div>

      <div className="project-cards" style={styles.cardContainer}>
        {projects.map((project) => (
          <div>
            <ProjectCard
              key={project.id}
              project={project}
              isActive={activeProject === project.id}
              toggleProject={toggleProject}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
