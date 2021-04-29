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
      <form className="contact__form">
        <input className="contact__input" placeholder="first name"/>
        <input className="contact__input" placeholder="last name"/>
        <input className="contact__input" placeholder="email address"/>
        <textarea className="contact__input contact__input--textarea" placeholder="message"/>
        <button className="contact__button">SEND</button>
      </form>
    </main>
  )
}
