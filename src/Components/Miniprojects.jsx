import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../CSS/mini.css';

const MiniProjects = () => {
  const projects = [
    {
      title: 'To-Do App',
      description: 'A to-do app helps to organize, track, and complete tasks efficiently and boosting time management.',
      technologies: 'HTML, CSS, JavaScript',
      repoLink: 'https://github.com/Vipin-hari/TO-Do.git'
    },
    {
      title: 'Live Weather App',
      description: 'A live weather app provides real-time updates, forecasts, and alerts, helping users stay informed.',
      technologies: 'React JS, Axios, weather API',
      repoLink: 'https://github.com/Vipin-hari/Live-Weather-React.git'
    },
    {
      title: 'Blog Frontend',
      description: 'A blog frontend built with React JS that offers a dynamic and responsive user interface for reading and managing posts.',
      technologies: 'React JS, Bootstrap',
      repoLink: 'https://github.com/Vipin-hari/Blog.git'
    },
  ];

  return (
    <div className="mini-projects-section" id='mini-projects'>
      <h2>Mini Projects</h2>
      <div className="mini-projects-container">
        {projects.map((project, index) => (
          <div className="mini-project-card" key={index}>
            <h3 style={{color:'#ff2f00'}} className='mini-title'>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies}</p>
            <Link to={project.repoLink } target="_blank" rel="noopener noreferrer" className='view-repo'>
              View Repository
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniProjects;
