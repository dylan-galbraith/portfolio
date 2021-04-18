import '../styles/Work.scss';
import downIconWhite from '../assets/icons/down-arrow-white.svg';
import upIconWhite from '../assets/icons/up-arrow-white.svg';
import closeIcon from '../assets/icons/close-icon.svg';
import githubLogo from '../assets/logos/github-logo.svg';
import { Component } from 'react';
import fitTrack from '../assets/images/fittrack.png';

class Work extends Component {

  state = {
    workSelected: null,
  }

  selectedWork = (e) => {
    this.setState({
      workSelected: e.currentTarget.id
    })
  }

  closeWork = () => {
    this.setState({
      workSelected: null
    })
  }

  render() {
    if (this.state.workSelected === "fittrack") {
      return (
          <div id="work" className="work">
            <img onClick={this.closeWork} className="bio__close" src={closeIcon} alt="close icon" />
            <h1 className="bio__heading">FitTrack</h1>
            <p className="bio__stack">REACT | SASS | JAVASCRIPT | MYSQL | PRISMA | EXPRESS | NODE.JS</p>
            <p className="bio__text">I developed this project while in school as my final assignment. Given 10 days, we had to come up with an idea for a web application that would solve some type of issue. I built FitTrack, a mobile application that allows you to create your own exercises and routines, and track your progress at the gym.</p>
            <p className="bio__text">To build this application, I used React and SASS for my front-end. For the back-end, I used MySQL and Prisma to build the database, along with Express and Node.js for the server.</p>
            <div className="bio__links">
              <a href="https://fit-track.netlify.app/" className="bio__text bio__text--link">https://fit-track.netlify.app/</a>
              <a href="https://github.com/dylan-galbraith/fit-track" className="bio__text bio__text--link"><img className="bio__logo" src={githubLogo} alt="github logo" /> https://github.com/dylan-galbraith/fit-track</a>
            </div>
          </div>
      )
    }
    if (this.state.workSelected === "connectmd") {
      return (
          <div id="work" className="work">
            <img onClick={this.closeWork} className="bio__close" src={closeIcon} alt="close icon" />
            <h1 className="bio__heading">ConnectMD</h1>
            <p className="bio__stack">REACT | SASS | JAVASCRIPT | EXPRESS | NODE.JS</p>
            <p className="bio__text">This project was developed for a hackathon run by Google. Given <strong>24 hours</strong>, each team had to come up with a way to make health care more accessible to people through technology. Each team was made up of Developers, Designers, Digital Marketers, and Data Scientists. Our team came up with ConnectMD, a mobile application designed for those who's first language ins't English. The app would match each patient with a doctor who does speak their language, and can accomodate them for any religious/cultural/language preferences that were stopping them from seeing a doctor.</p>
            <p className="bio__text">To build this application, we used React and SASS for the front-end. For the back-end, we made a mock server using Express and Node.js.</p>
            <div className="bio__links">
              <a href="https://github.com/dylan-galbraith/tinder-md" className="bio__text bio__text--link"><img className="bio__logo" src={githubLogo} alt="github logo" /> https://github.com/dylan-galbraith/tinder-md</a>
            </div>
          </div>
      )
    }
    return (
        <div id="work" className="work">
          <div className="work__item">
            <p className="work__item__heading">FitTrack</p>
            <p className="work__item__info">REACT | SASS | JAVASCRIPT | FIREBASE | MYSQL | PRISMA | EXPRESS | NODE.JS</p>
            <p className="work__item__more">Learn More &#8594;</p>
          </div>
          <div className="work__item work__item--right">
            <p className="work__item__heading">ConnectMD</p>
            <p className="work__item__info">REACT | SASS | JAVASCRIPT | EXPRESS | NODE.JS</p>
            <p className="work__item__more">Learn More &#8594;</p>
          </div>
          {/* <h1 className="work__heading">MY WORK</h1> */}
          {/* <div className="work__display"> */}
            {/* <div onClick={this.selectedWork} className="work__box" id="fittrack">
              <img src={fitTrack} alt="FitTrack logo" className="work__image" />
              <div className="work__info">
                <div className="work__info__section">
                  <h3 className="work__info__title">FitTrack</h3>
                  <p className="work__info__text work__info__text--bold">Creator/Lead Developer</p>
                </div>
                <div className="work__info__section">
                <p className="work__info__text work__info__text--bold">Front-End</p>
                <p className="work__info__text">HTML5, CSS, JavaScript, SASS, React</p>
                </div>
                <div className="work__info__section">
                <p className="work__info__text work__info__text--bold">Back-End</p>
                <p className="work__info__text">MySQL, Prisma, Express, Node.js</p>
                </div>
              </div>
            </div> */}
            {/* <div onClick={this.selectedWork} className="work__box connectmd" id="connectmd">
              <div className="work__info">
                <div className="work__info__section">
                  <h3 className="work__info__title">ConnectMD</h3>
                  <p className="work__info__text work__info__text--bold">Co-Creator/Developer</p>
                </div>
                <div className="work__info__section">
                <p className="work__info__text work__info__text--bold">Front-End</p>
                <p className="work__info__text">HTML5, CSS, JavaScript, SASS, React</p>
                </div>
                <div className="work__info__section">
                <p className="work__info__text work__info__text--bold">Back-End</p>
                <p className="work__info__text">Express, Node.js</p>
                </div>
              </div>
            </div>             */}
          {/* </div> */}
        </div>
    )  
  }
}

export default Work;