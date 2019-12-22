/// @file:      App.js
/// @author:    John Ed Quinn
// @desc:       X

/* IMPORTS */
import React, { Fragment } from 'react';
import HomePage from './components/pages/HomePage';
import ProjectsPage from './components/pages/ProjectsPage';
import ContactPage from './components/pages/ContactPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

/* APP */
const App = () =>
  <Router>
    <Fragment>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/projects' component={ProjectsPage} />
        <Route exact path='/contact' component={ContactPage} />
      </Switch>
    </Fragment>
  </Router>

/* EXPORTS */
export default App;
