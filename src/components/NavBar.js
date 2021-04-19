import React from 'react'
import '../styles/NavBar.scss'

export default function NavBar({ home, about, work, contact }) {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li onClick={home} className="nav__list__item"><a className="nav__list__link">home</a></li>
        <li onClick={about} className="nav__list__item"><a className="nav__list__link">about</a></li>
        <li onClick={work} className="nav__list__item"><a className="nav__list__link">work</a></li>
        <li onClick={contact} className="nav__list__item"><a className="nav__list__link">contact</a></li>
      </ul>
    </nav>
  )
}
