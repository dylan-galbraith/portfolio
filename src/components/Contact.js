import '../styles/Contact.scss';
import downIconBlack from '../assets/icons/down-arrow-black.png';
import upIconBlack from '../assets/icons/up-arrow-black.png';

function Contact() {
  return (
    <main className="contact">
      <img className="contact__down" src={upIconBlack} />
      <h1 className="contact__heading">CONTACT ME</h1>
      <form className="contact__form">
        <input className="contact__input" placeholder="first name *" />
        <input className="contact__input" placeholder="last name *" />
        <input className="contact__input" placeholder="email address *" />
        <textarea className="contact__input contact__message" placeholder="message *" />
        <button className="contact__button">SEND</button>
      </form>
    </main>
  )
}

export default Contact;