import React from 'react';

const ProjectCard = ({ project, isActive, showProjectDetails }) => (
  <div className={`project-card ${isActive ? 'active' : ''}`} onClick={() => showProjectDetails(project.id)}>
    <div className="project-card-inner">
      <div className="project-card-front">
        <img src={project.image} alt={project.title} width="150px" />
        <h3>{project.title}</h3>
      </div>
      {isActive && (
        <div className="project-card-back">
          <h4>{project.title}</h4>
          <p>{project.description}</p>
          <div className="tech-stack">
            {project.techStack.map((tech, index) => (
              <span key={index} className="tech">{tech}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
);

export default ProjectCard;
