// src/components/NavigationBar.jsx
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../CSS/NavigationBar.css';

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // Make sure this path points to your CV file in the public directory
    link.download = 'cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Vipin</div>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={`nav-list ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="home" smooth={true} duration={1000} onClick={toggleMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="projects" smooth={true} duration={1000} onClick={toggleMenu}>Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="contact" smooth={true} duration={1000} onClick={toggleMenu}>Contact</Link>
          </li>
          <li className="nav-item nav-btn">
            <button 
              onClick={() => {
                handleDownload();
                toggleMenu();
              }} 
              style={{borderBottomRightRadius: "10px", border: "1px", background: "none", color: "#ff2f00"}}
            >
              Download CV <i className='fa-solid fa-circle-down icon-down fa-beat-fade'></i>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
