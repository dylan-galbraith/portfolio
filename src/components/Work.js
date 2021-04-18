import '../styles/Work.scss';
import React, { useState } from 'react';

function Work() {

  const [fitTrack, setFitTrack] = useState(false)
  const [connectMD, setConnectMD] = useState(false)

  function fitTrackDropDown() {
    setFitTrack(!fitTrack)
  }

  function connectMDDropDown() {
    setConnectMD(!connectMD)
  }

  return (
    <div id="work" className="work">
      <div className="work__item">
        <p className="work__item__heading work__item__heading--right">FitTrack</p>
        <p className="work__item__tech work__item__tech--right">REACT | SASS | JAVASCRIPT | FIREBASE | MYSQL | PRISMA | EXPRESS | NODE.JS</p>
        <div>
          {fitTrack ? <p onClick={fitTrackDropDown} className="work__item__more work__item__more--right">Learn Less	&#8593;</p> : <p onClick={fitTrackDropDown} className="work__item__more work__item__more--right">Learn More &#8595;</p>}
        </div>
      </div>
      <div className={fitTrack ? "work__bio active" : "work__bio"} >
          <p className="work__item__info work__item__info--right">I developed this project while in school as my final assignment. Given 10 days, we had to come up with an idea for a web application that would solve some type of issue. I built FitTrack, a mobile application that allows you to create your own exercises and routines, and track your progress at the gym.</p>
          <p className="work__item__info work__item__info--right">To build this application, I used React and JavaScript, as well as CSS/SASS for my front-end. To set up authentication and authorization, I used Firebase. For the back-end, I used MySQL and Prisma to build the database, along with Express and Node.js for the server.</p>
          <div className="work__item__links">
            <a href="https://fit-track.netlify.app/" className="work__item__link work__item__link--right">https://fit-track.netlify.app/</a>
            <a href="https://github.com/dylan-galbraith/fit-track" className="work__item__link work__item__link--right">https://github.com/dylan-galbraith/fit-track</a>
          </div>
        </div>

      <div className="work__item work__item--right">
        <p className="work__item__heading">ConnectMD</p>
        <p className="work__item__tech">REACT | SASS | JAVASCRIPT | EXPRESS | NODE.JS</p>
        <div>
          {connectMD ? <p onClick={connectMDDropDown} className="work__item__more">Learn Less	&#8593;</p> : <p onClick={connectMDDropDown} className="work__item__more">Learn More &#8595;</p>}
        </div>
      </div>
      <div className={connectMD ? "work__bio work__bio--right active" : "work__bio work__bio--right"} >
          <p className="work__item__info">This project was developed for a hackathon run by Google. Given <strong>24 hours</strong>, each team had to come up with a way to make health care more accessible to people through technology. Each team was made up of Developers, Designers, Digital Marketers, and Data Scientists. Our team came up with ConnectMD, a mobile application designed for those who's first language ins't English. The app would match each patient with a doctor who does speak their language, and can accomodate them for any religious/cultural/language preferences that were stopping them from seeing a doctor.</p>
          <p className="work__item__info">To build this application, we used React and SASS for the front-end. For the back-end, we made a mock server using Express and Node.js.</p>
          <div className="work__item__links">
            <a href="https://github.com/dylan-galbraith/tinder-md" className="work__item__link">https://github.com/dylan-galbraith/tinder-md</a>
          </div>
        </div>

    </div>
  )
}

export default Work;