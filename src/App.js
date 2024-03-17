import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Menu from './components/Menu/Menu';
import Contact from './components/Contact';
import './index.css'; // Make sure to import your styles

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/about" component={About} />
          <Route path="/menu" component={Menu} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
