import React, { useEffect } from 'react'
import image1 from '../../assets/images/fittrack/fittrack-screenshot1.jpg'
import image2 from '../../assets/images/fittrack/fittrack-screenshot2.jpg'
import image3 from '../../assets/images/fittrack/fittrack-screenshot3.jpg'

export default function Fittrack() {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <main className="project work">
      <div className="project__hero">
        <h1 className="project__heading">FitTrack</h1>
        <p className="project__tech"> REACT | SASS | JAVASCRIPT | FIREBASE | MYSQL | PRISMA | EXPRESS | NODE.JS</p>
      </div>
      <div className="project__bio">
        <p className="project__text">I developed FitTrack while in school as my final capstone assignment. Given 10 days, we had to come up with an idea for a web application that would solve some type of issue. I built FitTrack, a mobile application that allows you to create your own exercises and routines, and track your progress at the gym.</p>
        <div className="project__images">
          <img className="project__images__each" src={image1} alt="" />
          <img className="project__images__each" src={image2} alt="" />
          <img className="project__images__each" src={image3} alt="" />
        </div>
        <p className="project__text">To build this application, I used React and JavaScript, as well as CSS/SASS for my front-end. To set up authentication and authorization, I used Firebase. For the back-end, I used MySQL and Prisma to build the database, along with Express and Node.js for the server.</p>
        <div className="project__cta">
          <p className="project__label">Visit FitTrack: </p>
          <a className="project__link" href="https://fit-track.netlify.app/" target="_blank" rel="noopener noreferrer">https://fit-track.netlify.app/</a>
        </div>
        <div className="project__cta">
          <p className="project__label">View the code on GitHub: </p>
          <a className="project__link" href="https://github.com/dylan-galbraith/fit-track" target="_blank" rel="noopener noreferrer">https://github.com/dylan-galbraith/fit-track</a>
        </div>
      </div>
    </main>
  )
}
