import _ from 'lodash';
import React from 'react';
import {observer} from 'mobx-react';
import styles from './journalInput.scss';

@observer(['userStore', 'feelingStore'])
export default class Journal extends React.Component {
  constructor(props) {
    super(props);
    this.feeling = this.props.feelingStore.currentFeeling ? this.props.feelingStore.currentFeeling : localStorage.currentFeeling;
  }

  render() {

    let feelingLowerCase = _.lowerFirst(this.feeling);
    let placeholder      = `I wonder why I feel ${feelingLowerCase}?`;

    return (
      <div>
        <textarea className={styles.journalField} placeholder={placeholder}></textarea>
      </div>
    )
  }
}