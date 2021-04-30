import React, { useEffect } from 'react'
import './About.scss'
import heroImage from '../../assets/images/about.png'
import arrow from '../../assets/icons/arrow.svg'

export default function About() {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <main className="about">
      <div className="about__hero">
        <h1 className="about__heading">about<br/>me</h1>
        <img className="about__arrow" src={arrow} alt="" />
      </div>
      <div className="about__bio">
        <p className="about__text">Hi, I'm Dylan! I am a caffeine addicted, full stack web and software developer based out of Toronto, Ontario. As a full stack developer, I pride myself on building robust web applications with a user-friendly and intuitive interface, paired with a fast and efficient back-end. </p>
        <img className="about__image" src={heroImage} alt="" />
        <p className="about__text">Please feel free to take a look through my portfolio and past work, and contact me with any questions you may have!</p>
      </div>
    </main>
  )
}
