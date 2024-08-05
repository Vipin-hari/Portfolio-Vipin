// src/components/ProjectCard.jsx
import React, { useState } from 'react';
import '../CSS/Projectcard.css';


function ProjectCard({ project, reverse }) {
    return (
      <div className={`project-container ${reverse ? 'reverse' : ''}`}>
        <div className="project-card">
          <img src={project.image} alt={project.title} className="project-image" />
        </div>
        <div className="project-details">
          <h2>{project.title}</h2>
          <p>{project.tech}</p>
        </div>
      </div>
    );
  }
  
  export default ProjectCard;