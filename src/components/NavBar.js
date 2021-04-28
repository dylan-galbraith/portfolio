import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="nav">
      <NavLink to='/' exact className="nav__link nav__link--home">dg</NavLink>
      <NavLink to='/about' className="nav__link">about</NavLink>
      <NavLink to='/work' className="nav__link">work</NavLink>
      <NavLink to='/contact' className="nav__link">contact</NavLink>
    </nav>
  )
}
