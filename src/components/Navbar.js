import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.scss';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="logo">
          <Link to="home" smooth={true} duration={500}>Your Logo</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="education" smooth={true} duration={500}>Education</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;