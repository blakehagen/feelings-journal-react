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

    let feelingLowerCase     = _.lowerFirst(this.feeling);
    let placeholderMain      = `I wonder why I feel ${feelingLowerCase}?`;
    let placeholderSecondary = `If I wasn't feeling ${feelingLowerCase}, what would I be doing right now?`;

    let journalInput;

    if (feelingLowerCase === 'happy' || feelingLowerCase === 'excited') {
      console.log('feelingLowerCase', feelingLowerCase);
      journalInput = (
        <div className={styles.journalInput}>
          <textarea className={styles.whyTextArea} placeholder={placeholderMain} />
        </div>
      )
    } else {
      journalInput = (
        <div className={styles.journalInput}>
          <textarea className={styles.whyTextArea} placeholder={placeholderMain} />
          <textarea className={styles.whatTextArea} placeholder={placeholderSecondary} />
        </div>
      )
    }

    return journalInput;
  }
}