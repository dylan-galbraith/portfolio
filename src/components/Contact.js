import '../styles/Contact.scss';
import upIconBlack from '../assets/icons/up-arrow-white.svg';
import gitHubLogo from '../assets/logos/github-logo.svg';
import gmailLogo from '../assets/logos/gmail-logo.png';
import linkedinLogo from '../assets/logos/linkedin-logo.png';

function Contact({ scrollUp }) {
  return (
      <div id="contact" className="contact">
        <div className="contact__links">
          <a className="contact__link" href="https://github.com/dylan-galbraith"><img className="contact__logo" src={gitHubLogo} alt="github logo" /></a>
          <a className="contact__link" href="mailto:dylangalbraith9@gmail.com"><img className="contact__logo" src={gmailLogo} alt="gamil logo" /></a>
          <a className="contact__link" href="https://www.linkedin.com/in/dylan-galbraith/"><img className="contact__logo" src={linkedinLogo} alt="contact logo" /></a>
        </div>
      </div>
  )
}

export default Contact;