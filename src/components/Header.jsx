import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Header() {
  return (
    <div className="header" id="home">
      <div className="head-container">
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <Link 
                to="" 
                smooth={true} 
                duration={800} 
                offset={-70}
                id="home-button"
                onClick={() => scroll.scrollToTop()}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="about" 
                smooth={true} 
                duration={800} 
                offset={-70}
                id="about-button"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="projects" 
                smooth={true} 
                duration={800} 
                offset={-40}
                id="projects-button"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to="contact" 
                smooth={true} 
                duration={800} 
                offset={-40}
                id="contact-button"
              >
                Contact
              </Link>
            </li>
          </ul>
          <button style={{color: 'white'}} id="hamburger" className="js-enabled">
            <i className="fas fa-bars"></i>
          </button>
        </nav>
      </div>
    </div>
  );
}
