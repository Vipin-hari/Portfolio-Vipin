// src/components/ProjectCard.jsx
import React from 'react';
import '../CSS/Projectcard.css'; // Ensure the file name is correct
import { Link } from 'react-router-dom';

function ProjectCard({ project, reverse }) {
  return (
    <div className={`project-container ${reverse ? 'reverse' : ''}`}>
      <div className="project-card">
        <img src={project.image} alt={project.title} className="project-image" />
      </div>
      <div className="project-details">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <p><strong>TECH USED:</strong> {project.tech}</p>
        <Link to={project.repo} className="project-link">Repository</Link>
      </div>
    </div>
  );
}

export default ProjectCard;
