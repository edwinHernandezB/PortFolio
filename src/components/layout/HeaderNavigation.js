import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNavigation = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-icon">EH</span>
        <h3>Edwin Hernández</h3>
      </div>
      
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
