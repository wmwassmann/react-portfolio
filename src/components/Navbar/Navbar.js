import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './css/style.css'



export class Navbar extends Component {
  
  setLocal = (e) => {
    localStorage.setItem('featured-page', '0')
  }

render() {
    return(
    
<nav className="navbar navbar-dark navstyle">
  <a className="navbar-brand" href="about">William Wassmann</a>
    
    {/* <!-- Navbar links --> */}
    
    <ul className="nav justify-content-center">
      <li className="nav-item">
      <NavLink className="nav-link border-pop" to='/about' exact>About</NavLink>
      </li>

      {/* portfolio button */}
      <li className="nav-item">
        <NavLink className="nav-link" to='/0' onClick={this.setLocal} exact>RPG: Adventurer's Academy</NavLink>        
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to='/inventory' onClick={this.setLocal} exact>Inventory Spreadsheet</NavLink>        
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to='/portfolio' exact>Bootcamp Portfolio</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to='/contact' exact>Contact</NavLink>    
      </li>     
    </ul>
</nav>

    );
}
}
export default Navbar;