import React from 'react';
import {observer} from 'mobx-react';
import TopBar from 'components/TopBar';
import ActionButton from 'components/Journal/ActionButton'
import styles from './journal.scss';

@observer(['userStore', 'feelingStore'])
export default class Journal extends React.Component {
  constructor(props) {
    super(props);
    this.feeling = this.props.feelingStore.currentFeeling;
  }

  render() {

    let feelingImage;
    if (this.feeling === 'Happy') {
      feelingImage = (
        <div className={styles.happy}/>
      );
    }
    if (this.feeling === 'Excited') {
      feelingImage = (
        <div className={styles.excited}/>
      );
    }
    if (this.feeling === 'Shy') {
      feelingImage = (
        <div className={styles.shy}/>
      );
    }
    if (this.feeling === 'Mad') {
      feelingImage = (
        <div className={styles.mad}/>
      );
    }
    if (this.feeling === 'Nervous') {
      feelingImage = (
        <div className={styles.nervous}/>
      );
    }
    if (this.feeling === 'Sad') {
      feelingImage = (
        <div className={styles.sad}/>
      );
    }
    if (this.feeling === 'Scared') {
      feelingImage = (
        <div className={styles.scared}/>
      );
    }
    if (this.feeling === 'Bored') {
      feelingImage = (
        <div className={styles.bored}/>
      );
    }

    return (
      <div className={styles.container}>
        <TopBar/>
        <div className={styles.journalEntry}>
          <div className={styles.title}>
            <div className={styles.feelingImgBox}>
              {feelingImage}
            </div>
            <p>I Feel {this.feeling || 'Awesome'}</p>

          </div>
          <div className={styles.entryContent}>

          </div>
          <div className={styles.entryFooter}>
            <ActionButton action="Cancel"/>
            <ActionButton action="Save"/>
          </div>
        </div>
      </div>
    )
  }
}
