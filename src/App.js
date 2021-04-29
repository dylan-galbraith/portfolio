import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Fittrack from './pages/Work/Fittrack';
import Work from './pages/Work/Work';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/work' component={Work} />
          <Route path='/fittrack' component={Fittrack} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
