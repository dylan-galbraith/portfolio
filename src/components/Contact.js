import '../styles/Contact.scss';
import upIconBlack from '../assets/icons/up-arrow-black.svg';
import gitHubLogo from '../assets/logos/github-logo.svg';
import gmailLogo from '../assets/logos/gmail-logo.png';
import linkedinLogo from '../assets/logos/linkedin-logo.png';

function Contact({ scrollUp }) {
  return (
    <div id="contact" className="contact">
      <img onClick={scrollUp} className="contact__down" src={upIconBlack} />
      <h1 className="contact__heading">CONTACT ME</h1>
      <form action="mailto:dylangalbraith9@gmail.com" method="post" className="contact__form">
        <input className="contact__input" placeholder="first name *" />
        <input className="contact__input" placeholder="last name *" />
        <input className="contact__input" placeholder="email address *" />
        <textarea className="contact__input contact__message" placeholder="message *" />
        <button className="contact__button">SEND</button>
      </form>
      <div className="contact__links">
        <a href="https://github.com/dylan-galbraith"><img className="contact__logo" src={gitHubLogo} /></a>
        <a href="mailto:dylangalbraith9@gmail.com"><img className="contact__logo" src={gmailLogo} /></a>
        <a href="https://www.linkedin.com/in/dylan-galbraith/"><img className="contact__logo" src={linkedinLogo} /></a>
      </div>
    </div>
  )
}

export default Contact;