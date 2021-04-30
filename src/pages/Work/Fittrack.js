import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import image1 from '../../assets/images/fittrack/fittrack-screenshot1.jpg'
import image2 from '../../assets/images/fittrack/fittrack-screenshot2.jpg'
import image3 from '../../assets/images/fittrack/fittrack-screenshot3.jpg'
import arrow from '../../assets/icons/arrow.svg'

Modal.setAppElement(document.getElementById('root'))

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    backgroundColor: 'rgba(0,0,0,0.6)'
  }
}

export default function Fittrack() {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const [modalIsOpen,setIsOpen] = useState(false);
  const [openImage, setOpenImage] = useState("")
  function openModal(image) {
    setIsOpen(true);
    setOpenImage(image)
  }

  function closeModal(){
    setIsOpen(false);
  }

  return (
    <main className="project">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="project__modal"
        style={customStyles}
      >
        <img className="project__modal__image" src={openImage} alt="" />
        <button onClick={closeModal} className="project__modal__button">close</button>
      </Modal>
      <div className="project__hero">
        <h1 className="project__heading">FitTrack</h1>
        <p className="project__tech"> REACT | SASS | JAVASCRIPT | FIREBASE | MYSQL | PRISMA | EXPRESS | NODE.JS</p>
        <img className="project__arrow" src={arrow} alt="" />
      </div>
      <div className="project__bio">
        <p className="project__text">I developed FitTrack while in school as my final capstone assignment. Given 10 days, we had to come up with an idea for a web application that would solve some type of issue. I decided to design and build FitTrack, a mobile application that allows you to create your own exercises and routines, and track your progress at the gym. After creating an account, the user can create their own custom exercises, create records of them performing those exercises, and add them to custom routines as well. This allows FitTrack to be completely customizable to each user.</p>
        <div className="project__images">
          <img onClick={()=>openModal(image1)} className="project__images__each" src={image1} alt="" />
          <img onClick={()=>openModal(image2)} className="project__images__each" src={image2} alt="" />
          <img onClick={()=>openModal(image3)} className="project__images__each" src={image3} alt="" />
        </div>
        <p className="project__text">To build FitTrack, I used React and JavaScript to build the front-end, as well as CSS/SASS for styling. To set up authentication and authorization, I used Firebase. For the back-end, I used MySQL, along Prisma as the ORM, to build the database, and built the server using Express and Node.js.</p>
        <div className="project__cta">
          <p className="project__label">Visit FitTrack: </p>
          <a className="project__link" href="https://fit-track.netlify.app/" target="_blank" rel="noopener noreferrer">https://fit-track.netlify.app/</a>
        </div>
        <div className="project__cta">
          <p className="project__label">View the code on GitHub: </p>
          <a className="project__link" href="https://github.com/dylan-galbraith/fit-track" target="_blank" rel="noopener noreferrer">https://github.com/dylan-galbraith/fit-track</a>
        </div>
      </div>
    </main>
  )
}
