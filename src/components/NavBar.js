import React, { useState } from 'react'
import '../styles/NavBar.scss'

export default function NavBar({ home, about, work, contact }) {

  const [menu, setMenu] = useState(false)

  function toggleMenu() {
    setMenu(!menu)
  }

  return (
    <nav className="nav">
      <ul className={menu ? "nav__list nav__list--mobile" : "nav__list"}>
        <li onClick={home} className="nav__list__item">home</li>
        <li onClick={about} className="nav__list__item">about</li>
        <li onClick={work} className="nav__list__item">work</li>
        <li onClick={contact} className="nav__list__item">connect</li>
      </ul>
      <p onClick={toggleMenu} className="nav__list__menu">{menu ? "close" : "menu"}</p>
    </nav>
  )
}
