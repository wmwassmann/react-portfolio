import React from 'react';
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'


function Navbar() {
    return(
    
<nav className="navbar navbar-dark bg">
  <a className="navbar-brand" href="about">William Wassmann</a>
    
    {/* <!-- Navbar links --> */}
    
    <ul className="nav justify-content-center">
      <li className="nav-item">
      <NavLink className="nav-link" to='/about' exact>About</NavLink>
      </li>

      {/* portfolio button */}
      <li className="nav-item">
        <NavLink className="nav-link" to='/portfolio' exact>Portfolio</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to='/0' exact>RPG: Adventurer's Academy</NavLink>        
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to='/contact' exact>Contact</NavLink>    
      </li>     
    </ul>
</nav>

    );
}

export default Navbar;