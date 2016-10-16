import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import App from '../components/App/App'
import UserMain from '../components/App/UserMain/UserMain';
import styles from './main.scss';

let Main = (
  <div className={styles.body}>
    <Router history={hashHistory}>
      <Route path='/' component={App}/>
      <Route path='/user' component={UserMain}/>
    </Router>
  </div>
);

module.exports = Main;