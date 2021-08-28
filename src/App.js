import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import State from './context/State';
import AboutPage from './pages/About';
import HomePage from './pages/Home';

function App() {
  return (
    <State>
      <BrowserRouter>
        <Navbar />
        
        <div className="App">
          <div className="container">
            <Alert />
          </div>
          <Switch>
            <Route path={'/'} exact component={HomePage} />
            <Route path={'/about'} exact component={AboutPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </State>
  );
}

export default App;
