import React, { useEffect } from 'react'
import './Work.scss'
import fittrack from '../../assets/images/fittrack/fittrack.png'
import connectmd from '../../assets/images/connectmd/connectmd.png'
import andrea from '../../assets/images/andrea.png'
import { Link } from 'react-router-dom'

export default function Work() {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <main className="work">
      <div className="work__hero">
        <h1 className="work__heading">past<br/>work.</h1>
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
      </div>
    </main>
  )
}