import React, { useEffect } from 'react'
import arrow from '../../assets/icons/arrow.svg'

export default function Andrea() {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <main className="project">
      <div className="project__hero">
        <h1 className="project__heading">Andrea<br/>Parsons</h1>
        <p className="project__tech">REACT | SASS | JAVASCRIPT | FIREBASE</p>
        <img className="project__arrow" src={arrow} alt="" />
      </div>
      <div className="project__info">
        <div className="project__bio">
          <p className="project__text">This project is still under construction, as soon as it is finished, images and a link will be available. In the mean time, you can view the code at the GitHub link below.</p>
          <p className="project__text">This website was built for a client who was entering the Cosmetic Injections field. She came to me with the idea, and gave me the freedom to design and build her website. It is a single page application with different links to find any information needed, including FAQ, contact information, an about section, services, and a way for her clients to book appointments online.</p>
          <p className="project__text">To build this website, I used React and JavaScript for the front-end, as well as SASS for styling. Firebase was used for user signup and authentication, which was necessary for bookings and for users to subscribe to the mailing list.</p>
          <div className="project__cta">
            <p className="project__label">View the code on GitHub: </p>
            <a className="project__link" href="https://github.com/dylan-galbraith/andrea-parsons-cosmetics" target="_blank" rel="noopener noreferrer">https://github.com/dylan-galbraith/andrea-parsons-cosmetics</a>
          </div>
        </div>
      </div>
    </main>
  )
}