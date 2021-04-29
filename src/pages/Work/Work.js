import React from 'react'
import './Work.scss'
import fittrack from '../../assets/images/fittrack.png'
import connectmd from '../../assets/images/connectmd.png'
import andrea from '../../assets/images/andrea.png'

export default function Work() {
  return (
    <main className="work">
      <div className="work__hero">
        <h1 className="work__heading">past<br/>work.</h1>
      </div>
      <div className="grid">
      <div className="project">
          <img className="project__image" src={connectmd} alt="" />
        </div>
        <div className="project">
          <img className="project__image" src={fittrack} alt="" />
        </div>
        <div className="project project--long">
          <img className="project__image" src={andrea} alt="" />
        </div>
      </div>
    </main>
  )
}