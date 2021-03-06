import React from 'react';
import {observer} from 'mobx-react'
import styles from './feeling.scss';

@observer(['feelingStore'])
export default class Feeling extends React.Component {
  constructor(props) {
    super(props);
    this.goToJournal = this.goToJournal.bind(this);
  }

  render() {
    let feelingImage;
    if (this.props.name === 'Happy') {
      feelingImage = (
        <div className={styles.happy}/>
      );
    }
    if (this.props.name === 'Excited') {
      feelingImage = (
        <div className={styles.excited}/>
      );
    }
    if (this.props.name === 'Shy') {
      feelingImage = (
        <div className={styles.shy}/>
      );
    }
    if (this.props.name === 'Mad') {
      feelingImage = (
        <div className={styles.mad}/>
      );
    }
    if (this.props.name === 'Nervous') {
      feelingImage = (
        <div className={styles.nervous}/>
      );
    }
    if (this.props.name === 'Sad') {
      feelingImage = (
        <div className={styles.sad}/>
      );
    }
    if (this.props.name === 'Scared') {
      feelingImage = (
        <div className={styles.scared}/>
      );
    }
    if (this.props.name === 'Bored') {
      feelingImage = (
        <div className={styles.bored}/>
      );
    }

    return (
      <div className={styles.container} onClick={this.goToJournal.bind(this, this.props.name)}>
        <div className={styles.emotion}>
          {feelingImage}
        </div>
        <p>{this.props.name}</p>
      </div>
    )
  }

  goToJournal(currentFeeling) {
    this.props.feelingStore.currentFeeling = currentFeeling;
    localStorage.setItem('currentFeeling', currentFeeling);
    location.assign("#/user/journal");
  }
}