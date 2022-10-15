// Deps
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// Components
import { RootHeader, Nav } from './NavbarElements';
import { CgMenu, CgClose } from "react-icons/cg";

//-----------------------------------------------------------

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <RootHeader>

      <div className="nav-wrapper">

        <div className='mobile-menu-icon' onClick={toggleMenu}>{isMenuOpen ? <CgClose/> : <CgMenu/>}</div>

        <NavLink to="/"><h1 className="logo">LOGO</h1></NavLink>

        <Nav isMenuOpen={isMenuOpen}>

          <ul>
            <li><NavLink to="/" className="nav-links">Home</NavLink></li>
            <li><NavLink to="/about" className="nav-links">About</NavLink></li>
            <li><NavLink to="/services" className="nav-links">Services</NavLink></li>
            <li><NavLink to="/contact" className="nav-links">Contact</NavLink></li>
          </ul>

        </Nav>
      
      </div>

    </RootHeader>
  )
}

export default Navbar