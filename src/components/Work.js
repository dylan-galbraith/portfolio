import '../styles/Work.scss';
import downIconWhite from '../assets/icons/down-arrow-white.svg';
import upIconWhite from '../assets/icons/up-arrow-white.svg';

function Work({ scrollUp, scrollDown }) {
  return (
    <div className="background">
      <img onClick={scrollUp} className="arrow arrow--up" src={upIconWhite} alt="up arrow" />
      <div id="work" className="work">
        <h1 className="work__heading">MY WORK</h1>
        <div className="work__display">
          <div className="work__box fittrack">
            <div className="work__info">
              <div className="work__info__section">
                <h3 className="work__info__title">FitTrack</h3>
                <p className="work__info__text work__info__text--bold">Creator/Lead Developer</p>
              </div>
              <div className="work__info__section">
              <p className="work__info__text work__info__text--bold">Front-End</p>
              <p className="work__info__text">HTML5, CSS, JavaScript, SASS, React</p>
              </div>
              <div className="work__info__section">
              <p className="work__info__text work__info__text--bold">Back-End</p>
              <p className="work__info__text">MySQL, Prisma, Express, Node.js</p>
              </div>
            </div>
          </div>
          <div className="work__box connectmd">
            <div className="work__info">
              <div className="work__info__section">
                <h3 className="work__info__title">ConnectMD</h3>
                <p className="work__info__text work__info__text--bold">Co-Creator/Developer</p>
              </div>
              <div className="work__info__section">
              <p className="work__info__text work__info__text--bold">Front-End</p>
              <p className="work__info__text">HTML5, CSS, JavaScript, SASS, React</p>
              </div>
              <div className="work__info__section">
              <p className="work__info__text work__info__text--bold">Back-End</p>
              <p className="work__info__text">Express, Node.js</p>
              </div>
            </div>
          </div>
          <div className="work__box connectmd">
            <div className="work__info">
              <div className="work__info__section">
                <h3 className="work__info__title">ConnectMD</h3>
                <p className="work__info__text work__info__text--bold">Co-Creator/Developer</p>
              </div>
              <div className="work__info__section">
              <p className="work__info__text work__info__text--bold">Front-End</p>
              <p className="work__info__text">HTML5, CSS, JavaScript, SASS, React</p>
              </div>
              <div className="work__info__section">
              <p className="work__info__text work__info__text--bold">Back-End</p>
              <p className="work__info__text">Express, Node.js</p>
              </div>
            </div>
          </div>
          <div className="work__box connectmd last">
            <div className="work__info">
              <div className="work__info__section">
                <h3 className="work__info__title">ConnectMD</h3>
                <p className="work__info__text work__info__text--bold">Co-Creator/Developer</p>
              </div>
              <div className="work__info__section">
              <p className="work__info__text work__info__text--bold">Front-End</p>
              <p className="work__info__text">HTML5, CSS, JavaScript, SASS, React</p>
              </div>
              <div className="work__info__section">
              <p className="work__info__text work__info__text--bold">Back-End</p>
              <p className="work__info__text">Express, Node.js</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img onClick={scrollDown} className="arrow arrow--down" src={downIconWhite} alt="down arrow" />
    </div>
  )
}

export default Work;