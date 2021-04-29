import React from 'react'
import github from '../assets/icons/github.svg'
import gmail from '../assets/icons/gmail.svg'
import linkedin from '../assets/icons/linkedin.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/dylan-galbraith" target="_blank" rel="noopener noreferrer"><img className="footer__icon" src={github} alt="" /></a>
      <a href="mailto:dylangalbraith9@gmail.com"><img className="footer__icon" src={gmail} alt="" /></a>
      <a href="https://www.linkedin.com/in/dylan-galbraith/" target="_blank" rel="noopener noreferrer"><img className="footer__icon" src={linkedin} alt="" /></a>
    </footer>
  )
}
