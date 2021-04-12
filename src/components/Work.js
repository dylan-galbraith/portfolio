import '../styles/Work.scss';
import downIconWhite from '../assets/icons/down-arrow-white.svg';
import upIconWhite from '../assets/icons/up-arrow-white.svg';
import closeIcon from '../assets/icons/close-icon.svg';
import { Component } from 'react';

class Work extends Component {

  state = {
    workSelected: null,
  }

  selectedWork = (e) => {
    console.log(e.currentTarget.id);
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
    if (this.state.workSelected) {
      return (
        <div className="background">
          <div id="work" className="work">
            <img onClick={this.closeWork} className="work__close" src={closeIcon} alt="close icon" />
            <h1 className="work__heading">FitTrack</h1>
            <p className="work__stack">REACT | SASS | JAVASCRIPT | MYSQL | PRISMA | EXPRESS | NODE.JS</p>
            <p className="work__bio">I developed this project while in school as my final assignment. Given 10 days, we had to come up with an idea for a web application that would solve some type of issue. I built FitTrack, a mobile application that allows you to create your own exercises and routines, and track your progress at the gym.</p>
            <p className="work__bio">To build this application, I used React and SASS for my end. For the back-end, I used MySQL and Prisma to build the database, along with Express and Node.js for the server.</p>
            <a href="https://fit-track-capstone.herokuapp.com/" className="work__bio work__bio--link">https://fit-track-capstone.herokuapp.com/</a>
          </div>
        </div>
      )
    }
    return (
      <div className="background">
        <img onClick={this.props.scrollUp} className="arrow arrow--up" src={upIconWhite} alt="up arrow" />
        <div id="work" className="work">
          <h1 className="work__heading">MY WORK</h1>
          <div className="work__display">
            <div onClick={this.selectedWork} id="fittrack" className="work__box fittrack">
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
            </div>
            <div className="work__box connectmd">
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
            </div>
            <div className="work__box connectmd">
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
            </div>
            <div className="work__box connectmd last">
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
            </div>
          </div>
        </div>
        <img onClick={this.props.scrollDown} className="arrow arrow--down" src={downIconWhite} alt="down arrow" />
      </div>
    )  
  }
}

export default Work;