import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import image1 from '../../assets/images/connectmd/screenshot1.png'
import image2 from '../../assets/images/connectmd/screenshot2.png'
import image3 from '../../assets/images/connectmd/screenshot4.png'
import arrow from '../../assets/icons/arrow.svg'

Modal.setAppElement(document.getElementById('root'))

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.7)'
  }
}

export default function Connectmd() {

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
        <h1 className="project__heading">Connect<br/>MD</h1>
        <p className="project__tech">REACT | SASS | JAVASCRIPT | EXPRESS | NODE.JS</p>
        <img className="project__arrow" src={arrow} alt="" />
      </div>
      <div className="project__bio">
        <div className="project__intro">
          <p className="project__label">My Role: </p>
          <p className="project__text project__text--line">Co-Creator / Developer</p>
        </div>
        <div className="project__intro">
          <p className="project__label">Duration: </p>
          <p className="project__text project__text--line">24 hours</p>
        </div>
        <p className="project__text">This project was developed for a hackathon sponsored by Google. Given 24 HOURS, each team had to come up with a way to make health care more accessible to people through technology. Each team was made up of Developers, Designers, Digital Marketers, and Data Scientists. Our team came up with ConnectMD, a mobile application designed for those who's first language ins't English. The app would match each patient with a doctor who does speak their language, and can accomodate them for any religious/cultural/language preferences that were stopping them from seeing a doctor.</p>
        <div className="project__images">
          <img onClick={()=>openModal(image1)} className="project__images__each" src={image1} alt="" />
          <img onClick={()=>openModal(image2)} className="project__images__each" src={image2} alt="" />
          <img onClick={()=>openModal(image3)} className="project__images__each" src={image3} alt="" />
        </div>
        <p className="project__text">To build this application, we used React and JavaScript, along with SASS for the front-end. For the back-end, we made a mock server using Express and Node.js. Our server is functional, but for the hackathon, we didn't feel it necessary to connect it to the front-end.</p>
        <div className="project__cta">
          <p className="project__label">View the code on GitHub: </p>
          <a className="project__link" href="https://github.com/dylan-galbraith/tinder-md" target="_blank" rel="noopener noreferrer">https://github.com/dylan-galbraith/tinder-md</a>
        </div>
      </div>
    </main>
  )
}