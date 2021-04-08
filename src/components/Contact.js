import '../styles/Contact.scss';
import upIconBlack from '../assets/icons/up-arrow-black.svg';

function Contact({ scrollUp }) {
  return (
    <div id="contact" className="contact">
      <img onClick={scrollUp} className="contact__down" src={upIconBlack} />
      <h1 className="contact__heading">CONTACT ME</h1>
      <form className="contact__form">
        <input className="contact__input" placeholder="first name *" />
        <input className="contact__input" placeholder="last name *" />
        <input className="contact__input" placeholder="email address *" />
        <textarea className="contact__input contact__message" placeholder="message *" />
        <button className="contact__button">SEND</button>
      </form>
    </div>
  )
}

export default Contact;