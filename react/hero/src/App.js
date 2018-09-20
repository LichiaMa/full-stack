import React, { Component } from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';

import Dashboard from './dashboard';
import Heroes from './heroes';
import Detail from './detail';
import { HeroesContext } from './context';

import styles from './App.css';

const heroes = [
  {
    id: 1,
    name: 'Lucifer'
  },
  {
    id: 2,
    name: 'Tom'
  },
  {
    id: 3,
    name: 'Super Man'
  },
  {
    id: 4,
    name: 'Lucy'
  },
  {
    id: 5,
    name: 'Spider Man'
  },
  {
    id: 6,
    name: 'Lichia'
  }
];

class App extends Component {
  render() {
    return (
      <HeroesContext.Provider value={{ heroes }}>
        <h1 className={styles.title}>Tour of Heroes</h1>
        <nav>
          <Link className={styles.navBtn} to="/dashboard">
            Dashboard
          </Link>
          <Link className={styles.navBtn} to="/heroes">
            Heroes
          </Link>
        </nav>

        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/heroes" component={Heroes} />
          <Route exact path="/detail/:id" component={Detail} />
          <Redirect path="/" to="/dashboard" />
        </Switch>
      </HeroesContext.Provider>
    );
  }
}

export default App;
