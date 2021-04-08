import '../styles/Home.scss';
import downIconWhite from '../assets/icons/down-arrow-white.png';

function Home() {
  return (
    <main className="home">
      <h1 className="home__heading">DYLAN GALBRAITH</h1>
      <img className="home__down" src={downIconWhite} />
    </main>
  )
}

export default Home;