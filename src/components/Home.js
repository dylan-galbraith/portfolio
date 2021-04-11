import '../styles/Home.scss';
import downIconWhite from '../assets/icons/down-arrow-white.svg';

function Home({ scrollDown, autoScroll }) {
  return (
    <div id="home" className="home">
      <h1 className="home__heading">DYLAN GALBRAITH</h1>
      <p className="home__info">full-stack web developer</p>
      <img onClick={scrollDown} className="arrow arrow--down" src={downIconWhite} alt="down arrow"/>
    </div>
  )
}

export default Home;