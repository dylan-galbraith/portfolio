import React, { useEffect } from 'react'
import './Work.scss'
import fittrack from '../../assets/images/fittrack/fittrack.png'
import connectmd from '../../assets/images/connectmd/connectmd.png'
import andrea from '../../assets/images/andrea.png'
import hangman from '../../assets/images/hangman/hangman.png'
import { Link } from 'react-router-dom'
import arrow from '../../assets/icons/arrow.svg'

export default function Work() {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <main className="work">
      <div className="work__hero">
        <h1 className="work__heading">previous<br/>work</h1>
        <img className="work__arrow" src={arrow} alt="" />
      </div>
      <div className="grid">
        <Link to='/connectmd' className="grid__project">
          <img className="grid__project__image" src={connectmd} alt="" />
        </Link>
        <Link to='/fittrack' className="grid__project">
          <img className="grid__project__image" src={fittrack} alt="" />
        </Link>
        <Link to='/andrea-parsons-cosmetics' className="grid__project grid__project--long">
          <img className="grid__project__image" src={andrea} alt="" />
        </Link>
        <Link to='/hangman' className="grid__project">
          <img className="grid__project__image" src={hangman} alt="" />
        </Link>
      </div>
    </main>
  )
}