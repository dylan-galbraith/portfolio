import '../styles/About.scss';
import headshot from '../assets/images/headshot.jpg';

function About() {
  return (
      <div id="about" className="about">
        <div className="about__bio">
          <img className="about__headshot" src={headshot} alt="headshot" />
          <p className="about__info">Hi there! My name's Dylan, and I am a full-stack web developer based in Toronto, Canada. Please, feel free to take a look at some of my past work, and contact me if you have any questions!</p>
        </div>
      </div>
  )
}

export default About;