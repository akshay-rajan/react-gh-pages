import React from 'react';

export default function Header() {
  return (
    <div className="header" id="home">
      <div className="head-container">
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="#home" id="home-button">Home</a></li>
            <li><a href="#about" id="about-button">About</a></li>
            <li><a href="#projects" id="projects-button">Projects</a></li>
            <li><a href="#contact" id="contact-button">Contact</a></li>
          </ul>
          <button style={{color: 'white'}} id="hamburger" className="js-enabled">
            <i className="fas fa-bars"></i>
          </button>
        </nav>
      </div>
    </div>
  );
}
