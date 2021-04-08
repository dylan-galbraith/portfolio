import '../styles/About.scss';
import downIconBlack from '../assets/icons/down-arrow-black.png';
import upIconBlack from '../assets/icons/up-arrow-black.png';
import headshot from '../assets/images/headshot.jpg';

function About() {
  return (
    <main className="about">
      <img className="about__down" src={upIconBlack} />
      {/* <h1 className="about__heading">ABOUT ME</h1> */}
      <img className="about__headshot" src={headshot} />
      <p className="about__info">Hi there! Welcome to my portfolio! My name's Dylan, and I am a full-stack web developer. Please take a look at some of my past work, and feel free to contact me below!</p>
      <img className="about__down" src={downIconBlack} />
    </main>
  )
}

export default About;