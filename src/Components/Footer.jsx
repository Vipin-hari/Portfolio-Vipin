import React from 'react';
import { Link } from 'react-scroll';
import '../CSS/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>About Me</h3>
          <p>
            I'm a passionate web developer dedicated to creating impactful web applications. Let's connect and create something amazing together!
          </p>
        </div>
        <div className="footer-contact">
          <h3>Contact</h3>
          <div className="contact-info">
            <a href="mailto:vipinganesan2003@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-icon">
              <i className="fa-solid fa-envelope"></i> vipinganesan2003@gmail.com
            </a>
            <a href="tel:+919600712774" target="_blank" rel="noopener noreferrer" className="contact-icon">
              <i className="fa-solid fa-phone"></i> +91 9600712774
            </a>
          </div>
        </div>
        <div className="footer-social">
          <h3>Follow Me</h3>
          <a href="https://www.linkedin.com/in/vipin-g/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-linkedin contact-icon"></i>
          </a>
          <a href="https://github.com/Vipin-hari" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="home" smooth={true} duration={1000}>Home</Link></li>
            <li><Link to="skills" smooth={true} duration={1000}>Skills</Link></li>
            {/* <li><Link to="about" smooth={true} duration={1000}>About</Link></li> */}
            <li><Link to="projects" smooth={true} duration={1000}>Projects</Link></li>
            <li><Link to="mini-projects" smooth={true} duration={1000}>Mini-Projects</Link></li>
            <li><Link to="certifications" smooth={true} duration={1000}>My Certifications</Link></li>
            <li><Link to="contact" smooth={true} duration={1000}>Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Vipin.</p>
      </div>
    </footer>
  );
}

export default Footer;
