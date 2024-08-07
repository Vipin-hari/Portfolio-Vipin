// src/components/Projects.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projectsdata.js';
import '../CSS/Projects.css'

function Projects() {
  return (
    <div id="projects" className="projects-container">
      <h2>Projects</h2>
      <div className="projects-list">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} reverse={index % 2 !== 0} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
