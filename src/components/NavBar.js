import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function NavBar() {

  const location = useLocation();

  return (
    <nav className={location.pathname==="/" ? "nav" : "nav nav__background"}>
      <NavLink to='/' exact className={location.pathname==="/" ? "hidden" : "nav__link nav__link--home"}>dylan<br/>galbraith</NavLink>
      <NavLink to='/about' className="nav__link">about</NavLink>
      <NavLink to='/work' className="nav__link">work</NavLink>
      <NavLink to='/contact' className="nav__link">contact</NavLink>
    </nav>
  )
}
