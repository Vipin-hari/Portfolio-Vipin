// src/components/AboutSkills.jsx
import React from 'react';
import '../CSS/AboutSkills.css';

const AboutSkills = () => {
    const skills = [
        { icon: 'fab fa-html5', name: 'HTML5' },
        { icon: 'fab fa-css3-alt', name: 'CSS3' },
        { icon: 'fab fa-js', name: 'JavaScript' },
        { icon: 'fab fa-react', name: 'React' },
        { icon: 'fab fa-node-js', name: 'Node.js' },
        { icon: 'fab fa-python', name: 'Python' },
        { icon: 'fas fa-database', name: 'SQL' }
    ];

    return (
        <div className="about-skills-section" id="skills">
            <h2>About & Skills</h2>
            <div className="content-container">
                <div className="about-me">
                    <h3>About Me</h3>
                    <p>Hello! I'm Vipin, a passionate developer with a strong background in React JS. I enjoy working on developing MERN applications and am constantly learning new technologies to improve my skills.</p>
                </div>
                <div className="skills">
                    <h3>Skills</h3>
                    <ul>
                        {skills.map((skill, index) => (
                            <li key={index} className="skill-item">
                                <i className={`${skill.icon} icon`}></i>
                                <span className="skill-name">{skill.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutSkills;
