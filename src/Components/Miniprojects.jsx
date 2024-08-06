import React from 'react';
import '../CSS/mini.css';

const MiniProjects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A brief description of what this project does.',
      technologies: 'HTML, CSS, JavaScript',
      repoLink: 'http://github.com/yourusername/project-one'
    },
    {
      title: 'Project Two',
      description: 'A brief description of what this project does.',
      technologies: 'React, Node.js, Express',
      repoLink: 'http://github.com/yourusername/project-two'
    },
    // Add more projects as needed
  ];

  return (
    <div className="mini-projects-section" id='mini-projects'>
      <h2>Mini Projects</h2>
      <div className="mini-projects-container">
        {projects.map((project, index) => (
          <div className="mini-project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies}</p>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">View Repository</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniProjects;
