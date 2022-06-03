/// @file:      App.js
/// @author:    John Ed Quinn
// @desc:       X

/* IMPORTS */
import React, { Fragment } from 'react';
import HomePage from './components/pages/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

/* APP */
const App = () =>
  <Router>
    <Fragment>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </Fragment>
  </Router>

/* EXPORTS */
export default App;
