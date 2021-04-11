import About from '../components/About';
import Contact from '../components/Contact';
import Title from '../components/Title';
import Work from '../components/Work';

const scrollToTitle = (e) => {
  document.getElementById("title").scrollIntoView();
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

function Home() {
  return (
    <div className="home">
      <Title scrollDown={scrollToAbout} />
      <About scrollUp={scrollToTitle} scrollDown={scrollToWork} />
      <Work scrollUp={scrollToAbout} scrollDown={scrollToContact} />
      <Contact scrollUp={scrollToWork} />
  </div>
  )
}

export default Home;