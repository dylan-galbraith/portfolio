import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import NavBar from './components/NavBar';
import About from './pages/About/About';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
