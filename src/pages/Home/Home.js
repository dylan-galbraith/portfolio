import React from 'react'
import './Home.scss'
import logo from '../../assets/images/logo.svg'

export default function Home() {
  return (
    <main className="home">
      <img className="home__logo" src={logo} alt="" />
    </main>
  )
}
