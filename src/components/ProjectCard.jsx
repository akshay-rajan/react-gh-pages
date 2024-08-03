import React from 'react';
import ProjectImage from './ProjectImage';

const ProjectCard = ({ project, index }) => {
  return index % 2 === 1 ? (
    <div className="project-card">
      <div className="project-card left">
        <ProjectImage project={project} />
      </div>

      <div className="project-card right">
        <h4>{project.title}</h4>
        <p>{project.description}</p>
      </div>
    </div>
  ) : (
    <div className="project-card">
      <div className="project-card left">
        <h4>{project.title}</h4>
        <p>{project.description}</p>
      </div>

      <div className="project-card right">
        <ProjectImage project={project} />
      </div>
    </div>
  );
};

export default ProjectCard;
