import React from 'react'
import './Home.scss'
import logo from '../../assets/images/logo.svg'

export default function Home() {
  return (
    <main className="home">
      <img className="home__logo" src={logo} alt="" />
      {/* <h1 className="home__heading">dylan<br/>galbraith</h1>
      <p className="home__subheading">full stack web developer</p> */}
    </main>
  )
}
