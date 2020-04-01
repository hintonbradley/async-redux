
import React from 'react';
import Nav from './Nav';
import Home from './Home';
import Instructions from './Instructions';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/instructions" component={Instructions} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


