import React from 'react'
import styles from './topBar.scss';

export default class TopBar extends React.Component {

  render() {
    return (
      <div className={styles.topBar}>
        <p>Journal</p>
        <p>Reports</p>
        <p onClick={this.signOut}>Sign Out</p>
      </div>
    )
  }

  signOut(){
    localStorage.setItem('currentFeeling', undefined);
    location.assign("#/");
  }
}
