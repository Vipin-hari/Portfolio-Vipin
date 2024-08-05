// src/components/Footer.jsx
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
          <p>Email: vipin@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-social">
          <h3>Follow Me</h3>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://tumblr.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-tumblr"></i>
          </a>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="home" smooth={true} duration={1000}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={1000}>About</Link></li>
            <li><Link to="projects" smooth={true} duration={1000}>Projects</Link></li>
            <li><Link to="contact" smooth={true} duration={1000}>Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Vipin. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
