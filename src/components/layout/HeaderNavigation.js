import React from 'react'
import { NavLink } from 'react-router-dom'

const getNavLinkClass = ({ isActive }) => isActive ? 'active' : '';

export const HeaderNavigation = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-icon">EH</span>
        <h3>Edwin Hernández</h3>
      </div>
      
      <nav>
        <ul>
          <li><NavLink to="/" className={getNavLinkClass}>Home</NavLink></li>
          <li><NavLink to="/portfolio" className={getNavLinkClass}>Portfolio</NavLink></li>
          <li><NavLink to="/curriculum" className={getNavLinkClass}>Curriculum</NavLink></li>
          <li><NavLink to="/services" className={getNavLinkClass}>Services</NavLink></li>
          <li><NavLink to="/contact" className={getNavLinkClass}>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
