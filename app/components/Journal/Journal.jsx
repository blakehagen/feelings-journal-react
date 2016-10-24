import React from 'react';
import {observer} from 'mobx-react';
import TopBar from 'components/TopBar';
import styles from './journal.scss';

@observer(['userStore', 'feelingStore'])
export default class Journal extends React.Component {
  constructor(props) {
    super(props);
    this.feeling = this.props.feelingStore.name;
  }

  render() {
    return (
      <div className={styles.journalContainer}>
        <TopBar/>
        <div>I feel {this.feeling}</div>
      </div>
    )
  }
}
