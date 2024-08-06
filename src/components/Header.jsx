import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import { Home, Info, Engineering, Work, Message } from '@mui/icons-material';

export default function Header() {

  const [isOpen, setIsOpen] = useState(true);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="myheader" id="nav">

      <div className="head-container">
        <nav className="mynavbar" style={window.innerWidth < 798 ? {display: 'none'} : {}}>
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

        {/* <div className={`mobile-navbar ${isOpen ? 'open' : ''}`} style={window.innerWidth < 798 && {display: 'block'}}>
          <span className="closebtn" onClick={toggleNavbar}>&times;</span>
          <Link 
            to="" 
            smooth={true} 
            duration={800} 
            offset={-70}
            id="home-button"
            onClick={() => { scroll.scrollToTop(); toggleNavbar(); }}
          >
            <Home />
          </Link>
          <Link 
            to="about" 
            smooth={true} 
            duration={800} 
            offset={10}
            id="about-button"
            onClick={toggleNavbar}
          >
            <Info />
          </Link>
          <Link 
            to="projects" 
            smooth={true} 
            duration={800} 
            offset={20}
            id="projects-button"
            onClick={toggleNavbar}
          >
            <Engineering />
          </Link>
          <Link 
            to="experience" 
            smooth={true} 
            duration={800} 
            offset={20}
            id="experience-button"
            onClick={toggleNavbar}
          >
            <Work />
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={800} 
            offset={20}
            id="contact-button"
            onClick={toggleNavbar}
          >
            <Message />
          </Link>
        </div> */}
      </div>
    </div>
  );
}
