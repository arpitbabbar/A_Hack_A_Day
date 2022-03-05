import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Hospital from './components/Hospital';
import Doctors from './components/Doctors';

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
        <Switch>
          <Route path='/bookappointment' exact><Hospital /></Route>
        </Switch>
        <Switch>
          <Route path='/*/doctors' exact><Doctors /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
