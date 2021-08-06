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
        <p className="project__tech">REACT | SASS | JAVASCRIPT | FIREBASE | MYSQL | PRISMA | EXPRESS | NODE.JS</p>
        <img className="project__arrow" src={arrow} alt="" />
      </div>
      <div className="project__info">
        <div className="project__bio">
        <div className="project__intro">
          <p className="project__label">My Role: </p>
          <p className="project__text project__text--line">Developer / Designer</p>
        </div>
        <div className="project__intro">
          <p className="project__label">Duration: </p>
          <p className="project__text project__text--line">2 Months</p>
        </div>
          <p className="project__text">This project was built for a client who was entering the Cosmetic Injections field, and starting her own business. She came to me with a high level idea of what she wanted, and gave me free reign to design and build it however I wanted. After establishing a colour pallete and theme, we then sat down to discuss pages, layout, and functionality.</p>
          <p className="project__text">The biggest hurdle to overcome in this was building a fully functioning booking system, with two different interfaces, one for the client to view and book appointments, and one for the owner to create, edit, delete, and confirm appointments. The first step I took was building a server and database using Express, Node.js, MySQL, and Prisma. After creating a RESTful API, I then needed to focus on the front-end. I built the front-end through React and Javascript, using SASS for styling and Firebase for user authentication. Using unique user ids, I was able to create two seperate interfaces, one for the clients, and one for the owner.</p>
          <div className="project__cta">
            <p className="project__label">Visit: </p>
            <a className="project__link" href="https://cosmeticnurseange.com/" target="_blank" rel="noopener noreferrer">https://cosmeticnurseange.com/</a>
          </div>
          <div className="project__cta">
            <p className="project__label">View the code on GitHub: </p>
            <a className="project__link" href="https://github.com/dylan-galbraith/andrea-parsons-cosmetics" target="_blank" rel="noopener noreferrer">https://github.com/dylan-galbraith/andrea-parsons-cosmetics</a>
          </div>
        </div>
      </div>
    </main>
  )
}