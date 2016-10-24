import React from 'react';
import {browserHistory} from 'react-router';
import styles from './actionButton.scss';

export default class ActionButton extends React.Component {

  render() {

    let button;
    if (this.props.action === 'Cancel') {
      button = (
        <div className={styles.button} onClick={browserHistory.goBack}>
          <p>{this.props.action}</p>
        </div>
      );
    } else {
      button = (
        <div className={styles.button}>
          <p>{this.props.action}</p>
        </div>
      );
    }
    return (
      <div>
        {button}
      </div>
    )
  }
}