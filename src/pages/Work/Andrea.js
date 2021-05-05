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
          <p className="project__text project__text--line">In Progress</p>
        </div>
          <p className="project__text">This project is still under construction, as soon as it is finished, images and a link will be available. In the mean time, you can view the code at the GitHub link below.</p>
          <p className="project__text">This website was built for a client who was entering the Cosmetic Injections field. She came to me with the idea, and gave me the freedom to design and build her website. I created two different types of accounts for this website, one for clients and an admin one for the owner. This allows the owner to sign in just like the clients, but then has the ability to create, edit, and delete any bookings she would like. I created a completely user friendly interface for her to be able to use the database without having to touch the code. The client accounts get to view these appointments, and book the timeslot they would prefer.</p>
          <p className="project__text">To build this website, I used React and JavaScript for the front-end, as well as SASS for styling. Firebase was used for user signup and authentication. I then paired the user ids from Firebase to a MySQL database to store more information using Prisma as the ORM. The database is also used to store and maintain all appointments.</p>
          <div className="project__cta">
            <p className="project__label">View the code on GitHub: </p>
            <a className="project__link" href="https://github.com/dylan-galbraith/andrea-parsons-cosmetics" target="_blank" rel="noopener noreferrer">https://github.com/dylan-galbraith/andrea-parsons-cosmetics</a>
          </div>
        </div>
      </div>
    </main>
  )
}