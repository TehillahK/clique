import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Home from "./pages/Home";

function App() {
  return (
    <Router>
        <Home />
    </Router>
    
  );
}

export default App;
