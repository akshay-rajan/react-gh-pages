import React from "react";

export default function ProjectImage({ project }) {
  return (
    <div>
        <img src={project.image} className="project-image" alt={project.title} />
    </div>
  );
}