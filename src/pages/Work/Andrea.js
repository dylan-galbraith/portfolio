import React, { useEffect } from 'react'

export default function Andrea() {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <main className="project">
      <div className="project__hero">
        <h1 className="project__heading">Andrea Parsons<br/></h1>
      </div>
      <div className="project__info">
        <div className="project__bio">
          <p className="project__text">This website was built for a client who was entering the Cosmetic Injections field. She came to me with the idea, and gave me the freedom to design and build her website. It is a single page application with different links to find any information needed, including FAQ, contact information, an about section, services, and a way for her clients to book appointments online.</p>
          <p className="project__text">To build this web page, I used React and JavaScript to build everything, as well as SASS for styling. Firebase was used for user signup and authentication, which was necessary for bookings and for users to subscribe to the mailing list.</p>
          <p className="project__text">View the code on GitHub: </p>
          <a className="project__link" href="https://github.com/dylan-galbraith/andrea-parsons-cosmetics" target="_blank" rel="noopener noreferrer">https://github.com/dylan-galbraith/andrea-parsons-cosmetics</a>
        </div>
      </div>
    </main>
  )
}