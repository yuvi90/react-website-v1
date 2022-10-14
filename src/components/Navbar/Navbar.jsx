// Deps
import React from 'react';
import { NavLink } from 'react-router-dom';
// Components
import { RootHeader, Nav } from './NavbarElements';

const Navbar = () => {
  return (
    <RootHeader>
      <NavLink to="/"><h1 className="logo">LOGO</h1></NavLink>
      <Nav>
        <ul>
          <li><NavLink to="/" className="nav-links">Home</NavLink></li>
          <li><NavLink to="/about" className="nav-links">About</NavLink></li>
          <li><NavLink to="/services" className="nav-links">Services</NavLink></li>
          <li><NavLink to="/contact" className="nav-links">Contact</NavLink></li>
        </ul>
      </Nav>
    </RootHeader>
  )
}

export default Navbar