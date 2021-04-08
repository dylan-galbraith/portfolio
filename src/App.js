import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Work from './components/Work'
import './styles/App.scss'

const scrollToHome = (e) => {
  document.getElementById("home").scrollIntoView();
}

const scrollToAbout = (e) => {
  document.getElementById("about").scrollIntoView();
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
      <Home scrollDown={scrollToAbout} />
      <About scrollUp={scrollToHome} scrollDown={scrollToWork} />
      <Work scrollUp={scrollToAbout} scrollDown={scrollToContact} />
      <Contact scrollUp={scrollToWork} />
    </div>
  );
}

export default App;
