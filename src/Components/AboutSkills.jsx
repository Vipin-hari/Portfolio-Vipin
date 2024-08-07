import React from 'react';
import '../CSS/AboutSkills.css';

const AboutSkills = () => {
    const skills = [
        { icon: 'fab fa-html5' },
        { icon: 'fab fa-css3-alt' },
        { icon: 'fab fa-js' },
        { icon: 'fab fa-react' },
        { icon: 'fab fa-node-js' },
        { icon: 'fab fa-python' },
        { icon: "fas fa-database" } 
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
                            <li key={index}>
                                <i className={`${skill.icon} icon`}></i>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutSkills;
