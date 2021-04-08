import '../styles/Work.scss';
import downIconWhite from '../assets/icons/down-arrow-white.png';
import upIconWhite from '../assets/icons/up-arrow-white.png';

function Work({ scrollUp, scrollDown }) {
  return (
    <main id="work" className="work">
      <img onClick={scrollUp} className="work__down" src={upIconWhite} />
      <h1 className="work__heading">MY WORK</h1>
      <div className="work__carousel">
        <div className="work__box"></div>
        <div className="work__box"></div>
        <div className="work__box"></div>
      </div>
      <img onClick={scrollDown} className="work__down" src={downIconWhite} />
    </main>
  )
}

export default Work;