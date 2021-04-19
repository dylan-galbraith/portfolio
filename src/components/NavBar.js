import React from 'react'
import '../styles/NavBar.scss'

export default function NavBar() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list__item"><a className="nav__list__link">home</a></li>
        <li className="nav__list__item"><a className="nav__list__link">about</a></li>
        <li className="nav__list__item"><a className="nav__list__link">work</a></li>
        <li className="nav__list__item"><a className="nav__list__link">contact</a></li>
      </ul>
    </nav>
  )
}
