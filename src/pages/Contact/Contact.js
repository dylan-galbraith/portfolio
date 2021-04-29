import React, { useEffect } from 'react'
import './Contact.scss'

export default function Contact() {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <main className="contact">
      <div className="contact__hero">
        <h1 className="contact__heading">contact<br/>me</h1>
      </div>
      <form className="contact__form" name="contact" netlify method="POST">
        <input type="hidden" name="form-name" value="contact" />
        <input className="contact__input" placeholder="first name" name="firstName"/>
        <input className="contact__input" placeholder="last name"name="lastName" />
        <input className="contact__input" placeholder="email address" name="email" />
        <textarea className="contact__input contact__input--textarea" placeholder="message" name="message" />
        <button className="contact__button" type="submit">SEND</button>
      </form>
    </main>
  )
}
