import React, { useEffect } from 'react'
import './Home.scss'
import logo from '../../assets/images/logo.svg'

export default function Home() {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <main className="home">
      <img className="home__logo" src={logo} alt="" />
    </main>
  )
}
