import '../styles/Home.scss';
import downIcon from '../assets/icons/chevron-down-outline.svg';

function Home() {
  return (
    <main className="home">
      <h1 className="home__heading">DYLAN GALBRAITH</h1>
      <img className="home__down" src={downIcon} />
    </main>
  )
}

export default Home;