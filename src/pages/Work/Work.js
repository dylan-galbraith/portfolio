import React from 'react'
import './Work.scss'
import fittrack from '../../assets/images/fittrack/fittrack.png'
import connectmd from '../../assets/images/connectmd.png'
import andrea from '../../assets/images/andrea.png'
import { Link } from 'react-router-dom'

export default function Work() {
  return (
    <main className="work">
      <div className="work__hero">
        <h1 className="work__heading">past<br/>work.</h1>
      </div>
      <div className="grid">
        <Link to='/connectmd' className="project">
          <img className="project__image" src={connectmd} alt="" />
        </Link>
        <Link to='/fittrack' className="project">
          <img className="project__image" src={fittrack} alt="" />
        </Link>
        <Link to='/andrea-parsons-cosmetics' className="project project--long">
          <img className="project__image" src={andrea} alt="" />
        </Link>
      </div>
    </main>
  )
}