// src/components/Home.jsx
import React from 'react';
import '../CSS/Home.css';
import Profile from '../assets/bgbg.png'; 
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsappSquare, FaEnvelope } from 'react-icons/fa';

function Home() {
  return (
    <div id="home" className="home-container">
      <div className="image-container">
        <img src={Profile} alt="My Image" className="profile-image" />
      </div>
      <div className="text-section">
        <h1 className='head'>Hello, I'm Vipin</h1>
        <p className='para'>I'm a passionate developer who loves creating web applications that make an impact. Let's connect and collaborate!</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/vipin-g/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="mailto:vipinganesan2003@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="icon" />
          </a>
          <a href="https://github.com/Vipin-hari" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="https://wa.me/+919600712774?text=Hello%20there!" target="_blank" rel="noopener noreferrer">
            <FaWhatsappSquare className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
