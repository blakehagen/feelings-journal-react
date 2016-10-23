import React from 'react';
import {observer} from 'mobx-react'
import styles from './journal.scss';

@observer(['userStore', 'feelingStore'])
export default class Journal extends React.Component {
  constructor(props) {
    super(props);
    this.feeling = this.props.feelingStore.name;
    console.log('this.feeling on JOURNAL =>', this.feeling);
  }
  
  render() {
    return <div>JOURNAL</div>
  }
}
