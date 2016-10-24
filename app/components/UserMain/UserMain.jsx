import React from 'react';
import styles from './userMain.scss';
import TopBar from 'components/TopBar';
import FeelingsBox from 'components/UserMain/FeelingsBox';

export default class UserMain extends React.Component {
  render() {
    return (
     <div className={styles.mainContainer}>
       <TopBar/>
       <FeelingsBox />
     </div>
    )
  }

}