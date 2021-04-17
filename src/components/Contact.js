import '../styles/Contact.scss';
import upIconBlack from '../assets/icons/up-arrow-white.svg';
import gitHubLogo from '../assets/logos/github-logo.svg';
import gmailLogo from '../assets/logos/gmail-logo.png';
import linkedinLogo from '../assets/logos/linkedin-logo.png';

function Contact({ scrollUp }) {
  return (
    <div className="background">
      {/* <img onClick={scrollUp} className="arrow arrow--up" src={upIconBlack} alt="up arrow" /> */}
      <div id="contact" className="contact">
        <h1 className="contact__heading">CONTACT ME</h1>
        <div className="contact__links">
          <a className="contact__link" href="https://github.com/dylan-galbraith"><img className="contact__logo" src={gitHubLogo} alt="github logo" />https://github.com/dylan-galbraith</a>
          <a className="contact__link" href="mailto:dylangalbraith9@gmail.com"><img className="contact__logo" src={gmailLogo} alt="gamil logo" />dylangalbraith9@gmail.com</a>
          <a className="contact__link" href="https://www.linkedin.com/in/dylan-galbraith/"><img className="contact__logo" src={linkedinLogo} alt="contact logo" />https://www.linkedin.com/in/dylan-galbraith/</a>
        </div>
      </div>
    </div>
  )
}

export default Contact;