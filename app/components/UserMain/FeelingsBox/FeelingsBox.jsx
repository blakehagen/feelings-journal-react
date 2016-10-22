import React from 'react';
import styles from './feelingsBox.scss';
import Feeling from 'components/UserMain/Feeling';

export default class FeelingsBox extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <p>Right now I feel ... </p>
        </div>
        <div className={styles.feelingsContainer}>
          <Feeling name="Happy" />
          <Feeling name="Excited"/>
          <Feeling name="Shy"/>
          <Feeling name="Mad"/>
          <Feeling name="Nervous"/>
          <Feeling name="Sad"/>
          <Feeling name="Scared"/>
          <Feeling name="Bored"/>
        </div>
      </div>
    )
  }
}