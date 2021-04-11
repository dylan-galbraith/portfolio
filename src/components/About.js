import '../styles/About.scss';
import downIconBlack from '../assets/icons/down-arrow-white.svg';
import upIconBlack from '../assets/icons/up-arrow-white.svg';
import headshot from '../assets/images/headshot.jpg';

function About({ scrollUp, scrollDown }) {
  return (
    <div className="background background--left">
      <img onClick={scrollUp} className="about__up" src={upIconBlack} alt="up arrow" />
      <div id="about" className="about">
        <div className="about__bio">
          <img className="about__headshot" src={headshot} alt="headshot" />
          <p className="about__info">Hi there! My name's Dylan, and I am a full-stack web developer based in Toronto, Canada. Feel free to take a look at some of my past work, and contact me if you have any questions!</p>
        </div>
      </div>
      <img onClick={scrollDown} className="about__down" src={downIconBlack} alt="down arrow" />
    </div>
  )
}

export default About;