import '../styles/About.scss';
import downIconBlack from '../assets/icons/down-arrow-black.svg';
import upIconBlack from '../assets/icons/up-arrow-black.svg';
import headshot from '../assets/images/headshot.jpg';

function About({ scrollUp, scrollDown }) {
  return (
    <div id="about" className="about">
      <img onClick={scrollUp} className="about__down" src={upIconBlack} alt="up arrow" />
      <img className="about__headshot" src={headshot} alt="headshot" />
      <p className="about__info">Hi there! Welcome to my portfolio! My name's Dylan, and I am a full-stack web developer. Please take a look at some of my past work, and feel free to contact me below!</p>
      <img onClick={scrollDown} className="about__down" src={downIconBlack} alt="down arrow" />
    </div>
  )
}

export default About;