import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="myheader" id="home">

      <div className="head-container">
        <nav className="mynavbar">
          <ul className="navigation-links">
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
                offset={10}
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
                offset={20}
                id="projects-button"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link 
                to="experience" 
                smooth={true} 
                duration={800} 
                offset={20}
                id="experience-button"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link 
                to="contact" 
                smooth={true} 
                duration={800} 
                offset={20}
                id="contact-button"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <span className="hamburger-icon" onClick={toggleNavbar}>
          <i className="fa fa-bars"></i>
        </span>

        <div className={`mobile-navbar ${isOpen ? 'open' : ''}`}>
          <span className="closebtn" onClick={toggleNavbar}>&times;</span>
          <Link 
            to="" 
            smooth={true} 
            duration={800} 
            offset={-70}
            id="home-button"
            onClick={() => { scroll.scrollToTop(); toggleNavbar(); }}
          >
            Home
          </Link>
          <Link 
            to="about" 
            smooth={true} 
            duration={800} 
            offset={10}
            id="about-button"
            onClick={toggleNavbar}
          >
            About
          </Link>
          <Link 
            to="projects" 
            smooth={true} 
            duration={800} 
            offset={20}
            id="projects-button"
            onClick={toggleNavbar}
          >
            Portfolio
          </Link>
          <Link 
            to="experience" 
            smooth={true} 
            duration={800} 
            offset={20}
            id="experience-button"
            onClick={toggleNavbar}
          >
            Experience
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={800} 
            offset={20}
            id="contact-button"
            onClick={toggleNavbar}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
