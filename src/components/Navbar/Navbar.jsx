// Deps
import React from 'react';
import { NavLink } from 'react-router-dom';
// Components
import Nav from './Nav';

const Navbar = () => {
  return (
    <header>
      <NavLink to="/">LOGO</NavLink>
      <Nav />
    </header>
  )
}

export default Navbar