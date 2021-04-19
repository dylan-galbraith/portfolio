import '../styles/About.scss';
import headshot from '../assets/images/headshot.jpg';

function About() {
  return (
      <div id="about" className="about">
        <div className="about__bio">
          <img className="about__headshot" src={headshot} alt="headshot" />
          <p className="about__info">Hello there, I'm Dylan, a full-stack web developer based out of Toronto, Canada. As a full-stack developer, I make sure all the websites I build are fast, dynamic, intuitive, and easy on the eyes. Keep scrolling to take a look at some of my past work, and feel free to get in touch with me <a className="about__link" href="mailto:dylangalbraith9@gmail.com">here</a> or through my links at the bottom!</p>
        </div>
      </div>
  )
}

export default About;