import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Routess from './Routess';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routess/>
      </Router>  
    </div>
  );
}

export default App;
