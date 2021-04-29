import React, { useEffect } from 'react'
import './About.scss'
import heroImage from '../../assets/images/about.png'

export default function About() {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <main className="about">
      <div className="about__hero">
        <h1 className="about__heading">about<br/>me</h1>
      </div>
      <p className="about__text">Hi! My name’s Dylan Galbraith, and I'm a full stack web developer with a caffeine addiction based out of Toronto, Ontario. As a full stack developer, I pride myself on building robust web applications with a user-friendly and intuitive interface, paired with a fast and efficient back-end. </p>
      <img className="about__image" src={heroImage} alt="" />
      <p className="about__text">Please feel free to take a look through my portfolio and past work, and contact me with any questions you may have!</p>
    </main>
  )
}
