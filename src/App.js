import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Andrea from './pages/Work/Andrea';
import Connectmd from './pages/Work/Connectmd';
import Fittrack from './pages/Work/Fittrack';
import Hangman from './pages/Work/Hangman';
import Work from './pages/Work/Work';

function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/work' exact component={Work} />
          <Route path='/work/fittrack' component={Fittrack} />
          <Route path='/work/connectmd' component={Connectmd} />
          <Route path='/work/andrea-parsons-cosmetics' component={Andrea} />
          <Route path='/work/hangman' component={Hangman} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
