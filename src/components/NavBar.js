import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function NavBar(props) {

  const location = useLocation();
  console.log(location.pathname);

  return (
    <nav className="nav">
      <NavLink to='/' exact className={location.pathname==="/" ? "hidden" : "nav__link nav__link--home"}>&#8592;</NavLink>
      <NavLink to='/about' className="nav__link">about</NavLink>
      <NavLink to='/work' className="nav__link">work</NavLink>
      <NavLink to='/contact' className="nav__link">contact</NavLink>
    </nav>
  )
}
