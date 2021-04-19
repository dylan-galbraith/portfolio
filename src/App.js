import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Work from './components/Work';
import './App.scss';
import NavBar from './components/NavBar';

const scrollToHome = (e) => {
  document.getElementById("home").scrollIntoView();
}

const scrollToAbout = (e) => {
  document.getElementById("about").scrollIntoView({block: "center"});
}

const scrollToWork = (e) => {
  document.getElementById("work").scrollIntoView();
}

const scrollToContact = (e) => {
  document.getElementById("contact").scrollIntoView();
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home scrollDown={scrollToAbout} />
      <About scrollUp={scrollToHome} scrollDown={scrollToWork} />
      <Work scrollUp={scrollToAbout} scrollDown={scrollToContact} />
      <Contact scrollUp={scrollToWork} />
    </div>
  );
}

export default App;
