import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/App.scss';
import Home from './pages/home/Home';
import FitTrack from './pages/FitTrack';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/fittrack' component={FitTrack} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;