import React, { useEffect } from 'react'
import image1 from '../../assets/images/hangman/screenshot1.png'
import arrow from '../../assets/icons/arrow.svg'

export default function Hangman() {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <main className="project">
      <div className="project__hero">
        <h1 className="project__heading">Hangman</h1>
        <p className="project__tech project__tech__lower">REACT | SASS | JAVASCRIPT | EXPRESS | NODE.JS</p>
        <img className="project__arrow" src={arrow} alt="" />
      </div>
      <div className="project__bio">
        <p className="project__text">Hangman was developed by myself and another classmate for a pair-programming competition in which we came in SECOND PLACE. In just one day, we were tasked with designing and developing anything we wanted. We decided to challenge ourselves, so we created an interactive online version of the classic game, Hangman. When the user clicks the START button, a request goes to our server. The server then generates a random word consisting of at least 8 characters, and responds to the request with it. The word is then displayed as empty boxes, and the user can begin guessing. If the user guesses correctly, any boxes that contain that letter are revealed. If wrong, a part of the body gets hanged.</p>
        <div className="project__images">
          <img className="project__images__1" src={image1} alt="" />
        </div>
        <p className="project__text">To build Hangman, we used React and JavaScript, along with SASS for styling the front-end. For the back-end, we created a RESTful API with Express and Node.js.</p>
        <div className="project__cta">
          <p className="project__label">View the code on GitHub: </p>
          <a className="project__link" href="https://github.com/dylan-galbraith/tinder-md" target="_blank" rel="noopener noreferrer">https://github.com/dylan-galbraith/tinder-md</a>
        </div>
      </div>
    </main>
  )
}
