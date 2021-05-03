import React, { useEffect } from 'react'
import arrow from '../../assets/icons/arrow.svg'

export default function Dylan() {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <main className="project">
      <div className="project__hero">
        <h1 className="project__heading">Dylan<br/>Galbraith</h1>
        <p className="project__tech">REACT | SASS | JAVASCRIPT</p>
        <img className="project__arrow" src={arrow} alt="" />
      </div>
      <div className="project__info">
        <div className="project__bio">
        <div className="project__intro">
          <p className="project__label">My Role: </p>
          <p className="project__text project__text--line">Owner / Developer / Designer</p>
        </div>
        <div className="project__intro">
          <p className="project__label">Duration: </p>
          <p className="project__text project__text--line">Forever In Progress</p>
        </div>
          <p className="project__text">Due to this being my own portfolio, I am constantly working to improve it, and add to it. I built my portfolio to not only display my past work, but to give me a project to constantly be able to work on and improve, with all the freedom in the world. Please feel free to keep looking around, and view my code on GitHub below!</p>
          <p className="project__text">To build this website, I used React because it is my favourite framework, and of course SASS for styling.</p>
          <div className="project__cta">
            <p className="project__label">View the code on GitHub: </p>
            <a className="project__link" href="https://github.com/dylan-galbraith/andrea-parsons-cosmetics" target="_blank" rel="noopener noreferrer">https://github.com/dylan-galbraith/andrea-parsons-cosmetics</a>
          </div>
        </div>
      </div>
    </main>
  )
}