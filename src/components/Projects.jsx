import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Project 1',
      image: 'static/proj1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      techStack: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 2,
      title: 'Project 2',
      image: 'static/proj2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      techStack: ['Python', 'Flask', 'SQL']
    },
    {
      id: 3,
      title: 'Project 3',
      image: 'static/proj3.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      techStack: ['React', 'Node.js', 'MongoDB']
    }
  ];

  const showProjectDetails = (id) => {
    setActiveProject(id);
  };

  return (
    <div className="projects" id="projects">
      <h2>My Portfolio</h2>
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
