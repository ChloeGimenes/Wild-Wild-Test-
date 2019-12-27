import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Game from './components/Game';
import Contact from './components/Contact';
import Legal from './components/Legal';
import Rules from './components/Rules';
import Highscores from './components/Highscores';

class App extends React.Component {
  render() {
    return (
      <div id="app" className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Game/:theme/:nickname" component={Game} />
          <Route exact path="/Contact/:nickname" component={Contact} />
          <Route exact path="/Legal" component={Legal} />
          <Route exact path="/Rules" component={Rules} />
          <Route exact path="/Highscores" component={Highscores} />
        </Switch>
      </div>
    );
  }
}

export default App;
