import React from 'react';
import ProjectImage from './ProjectImage';


const ProjectCard = ({ project }) => {

  return (
    <div className="project-card">
      <div className="project-card left">
        <ProjectImage project={project} />
      </div>

      <div className="project-card right">
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <div className="project-tech-stack">
          {project.techStack.map((tech, index) => (
            <span key={index} className="project-tech">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
