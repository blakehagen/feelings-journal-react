import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from 'components/App';
// import UserMain from '../components/App/UserMain/UserMain';
import styles from './main.scss';

ReactDOM.render (
  <div className={styles.body}>
    <Router history={hashHistory}>
      <Route path='/' component={App}/>
      {/*<Route path='/user' component={UserMain}/>*/}
    </Router>
  </div>, document.getElementById('app')
);
