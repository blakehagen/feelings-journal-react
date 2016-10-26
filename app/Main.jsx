import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {Provider} from 'mobx-react';
import App from 'components/App';
import UserMain from 'components/UserMain';
import Journal from 'components/Journal';
import TestPersonForm from 'components/TestPersonForm';
import styles from './main.scss';
import UserStore from './stores/UserStore';
import FeelingStore from './stores/FeelingStore';
import TestStore from './stores/TestStore';

const testStore    = new TestStore();
const userStore    = new UserStore();
const feelingStore = new FeelingStore();


ReactDOM.render(
  <div className={styles.body}>
    <Provider userStore={userStore} feelingStore={feelingStore} testStore={testStore}>
      <Router history={hashHistory}>
        <Route path='/' component={App}/>
        <Route path='/test' component={TestPersonForm}/>
        <Route path='/user' component={UserMain}/>
        <Route path='/user/journal' component={Journal}/>
      </Router>
    </Provider>
  </div>, document.getElementById('app')
);
