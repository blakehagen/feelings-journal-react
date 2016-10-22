import React from 'react';
import styles from './entryButton.scss';

export default class EntryButton extends React.Component {
  render() {
    return (
      <div className={styles.button} onClick={this.login}>
        <p>{this.props.buttonAction}</p>
      </div>
    )
  }

  login() {
    location.assign("#/user");
  }
}
