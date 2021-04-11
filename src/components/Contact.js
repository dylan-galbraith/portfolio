import '../styles/Contact.scss';
import upIconBlack from '../assets/icons/up-arrow-white.svg';
import gitHubLogo from '../assets/logos/github-logo.svg';
import gmailLogo from '../assets/logos/gmail-logo.png';
import linkedinLogo from '../assets/logos/linkedin-logo.png';
// import axios from 'axios'

// const handleEmail = (e) => {
//   e.preventDefault();
//   const newEmail = {
//     fName: e.target.firstName,
//     lName: e.target.lastName,
//     emailAddress: e.target.email,
//     message: e.target.message
//   }
//   axios
//     .post(`http://localhost:8080/send`, newEmail)
//     .then(response => {
//       console.log(response);
//     })
// }

function Contact({ scrollUp }) {
  return (
    <div className="background">
      <img onClick={scrollUp} className="arrow arrow--up" src={upIconBlack} alt="up arrow" />
      <div id="contact" className="contact">
        <h1 className="contact__heading">CONTACT ME</h1>
        <form method="post" className="contact__form">
          <input name='firstName' className="contact__input" placeholder="first name *" />
          <input name='lastName' className="contact__input" placeholder="last name *" />
          <input name='email' className="contact__input" placeholder="email address *" />
          <textarea name='message' className="contact__input contact__message" placeholder="message *" />
          <button className="contact__button">SEND</button>
        </form>
        <div className="contact__links">
          <a href="https://github.com/dylan-galbraith"><img className="contact__logo" src={gitHubLogo} alt="github logo" /></a>
          <a href="mailto:dylangalbraith9@gmail.com"><img className="contact__logo" src={gmailLogo} alt="gamil logo" /></a>
          <a href="https://www.linkedin.com/in/dylan-galbraith/"><img className="contact__logo" src={linkedinLogo} alt="contact logo" /></a>
        </div>
      </div>
    </div>
  )
}

export default Contact;