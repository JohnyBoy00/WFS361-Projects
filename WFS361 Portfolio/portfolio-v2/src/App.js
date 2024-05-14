import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home Page';
import AboutMe from './Components/About Me';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/about' component={AboutMe}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
