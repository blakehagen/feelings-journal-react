import React from 'react';
import styles from './app.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.mainContainer}>
        <p>Feelings Journal</p>
        <button onClick={this.login}>Login</button>
      </div>
    )
  }

  login() {
    location.assign("#/user");
  }
}