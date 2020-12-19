import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink to='/' exact>
        HOME
      </NavLink>
      <NavLink to='/movielist' exact>
        MOVIE LIST
      </NavLink>
    </nav>
  );
};

export default Navbar;
