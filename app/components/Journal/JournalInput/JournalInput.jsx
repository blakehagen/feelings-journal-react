import React from 'react';
import {observer} from 'mobx-react';
import styles from './journalInput.scss';

// @observer(['userStore', 'feelingStore'])
export default class Journal extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
    )
  }
}