import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Router>
        <Switch>
          <Route path='/' exact><Home /></Route>
        </Switch>
        <Switch>
          <Route path='/about' exact><About /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
