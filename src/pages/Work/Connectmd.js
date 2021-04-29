import React from 'react'
import image1 from '../../assets/images/connectmd/screenshot1.png'
import image2 from '../../assets/images/connectmd/screenshot2.png'
import image3 from '../../assets/images/connectmd/screenshot3.png'
import image4 from '../../assets/images/connectmd/screenshot4.png'
import image5 from '../../assets/images/connectmd/screenshot5.png'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
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

export default function Connectmd() {
  return (
    <main className="project">
      <div className="project__hero">
        <h1 className="project__heading">Connect<br/>MD</h1>
      </div>
      <div className="project__info">
        <div>
          <Carousel className="carousel" responsive={responsive}>
            <img className="carousel__image" src={image1} alt="" />
            <img className="carousel__image" src={image2} alt="" />
            <img className="carousel__image" src={image3} alt="" />
            <img className="carousel__image" src={image4} alt="" />
            <img className="carousel__image" src={image5} alt="" />
          </Carousel>
        </div>
        <div className="project__bio">
          <p className="project__text">This project was developed for a hackathon sponsored by Google. Given 24 HOURS, each team had to come up with a way to make health care more accessible to people through technology. Each team was made up of Developers, Designers, Digital Marketers, and Data Scientists. Our team came up with ConnectMD, a mobile application designed for those who's first language ins't English. The app would match each patient with a doctor who does speak their language, and can accomodate them for any religious/cultural/language preferences that were stopping them from seeing a doctor.</p>
          <p className="project__text">To build this application, we used React and SASS for the front-end. For the back-end, we made a mock server using Express and Node.js.</p>
          <p className="project__text">View the code on GitHub: </p>
          <a className="project__link" href="https://github.com/dylan-galbraith/tinder-md" target="_blank" rel="noopener noreferrer">https://github.com/dylan-galbraith/tinder-md</a>
        </div>
      </div>
    </main>
  )
}