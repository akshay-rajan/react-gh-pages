import React from 'react';

const ProjectCard = ({ project, isActive, toggleProject }) => {
  return (
    <div className={`project-card ${isActive ? 'is-expanded' : 'is-collapsed'}`} onClick={() => toggleProject(project.id)}>
      <div className="project-card__inner">
        <span>{project.title}</span>
        <i className="fa fa-folder-o"></i>
      </div>

      <div className="project-card__expander">
        <i className="fa fa-close" onClick={(e) => {
          e.stopPropagation();
          toggleProject(null);
        }}></i>
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
