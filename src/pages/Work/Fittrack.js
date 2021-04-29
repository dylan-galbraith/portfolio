import React from 'react'
import image1 from '../../assets/images/fittrack/fittrack-screenshot1.jpg'
import image2 from '../../assets/images/fittrack/fittrack-screenshot2.jpg'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Fittrack() {
  return (
    <main className="project">
      <div className="project__hero">
        <h1 className="project__heading">FitTrack</h1>
      </div>
      <div className="project__info">
        <div>
          <Carousel className="carousel" responsive={responsive}>
            <img className="carousel__image" src={image1} alt="" />
            <img className="carousel__image" src={image2} alt="" />
          </Carousel>
        </div>
        <div className="project__bio">
          <p className="project__text">I developed FitTrack while in school as my final capstone assignment. Given 10 days, we had to come up with an idea for a web application that would solve some type of issue. I built FitTrack, a mobile application that allows you to create your own exercises and routines, and track your progress at the gym.</p>
          <p className="project__text">To build this application, I used React and JavaScript, as well as CSS/SASS for my front-end. To set up authentication and authorization, I used Firebase. For the back-end, I used MySQL and Prisma to build the database, along with Express and Node.js for the server.</p>
          <p className="project__text">Try out FitTrack: </p>
          <a className="project__link" href="https://fit-track.netlify.app/" target="_blank" rel="noopener noreferrer">https://fit-track.netlify.app/</a>
          <p className="project__text">View the code on GitHub: </p>
          <a className="project__link" href="https://github.com/dylan-galbraith/fit-track" target="_blank" rel="noopener noreferrer">https://github.com/dylan-galbraith/fit-track</a>
        </div>
      </div>
    </main>
  )
}
