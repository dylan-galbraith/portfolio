import '../styles/Home.scss';
import downIconWhite from '../assets/icons/down-arrow-white.png';

function Home({ scrollDown }) {
  return (
    <main id="home" className="home">
      <h1 className="home__heading">DYLAN GALBRAITH</h1>
      <img onClick={scrollDown} className="home__down" src={downIconWhite} />
    </main>
  )
}

export default Home;