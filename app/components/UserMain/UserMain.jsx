import React from 'react';
import styles from './userMain.scss';
import FeelingsBox from 'components/UserMain/FeelingsBox'

export default class UserMain extends React.Component {
  render() {
    return (
     <div className={styles.mainContainer}>
       <FeelingsBox />
     </div>
    )
  }

}