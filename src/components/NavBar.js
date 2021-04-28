import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="nav">
      <NavLink to='/about' exact className="nav__link">about</NavLink>
      <NavLink to='/work' exact className="nav__link">work</NavLink>
      <NavLink to='/contact' exact className="nav__link">contact</NavLink>
    </nav>
  )
}
