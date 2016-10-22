import React from 'react';
import styles from './userEntryForm.scss';
import InputField from 'components/UserEntryForm/InputField';
import EntryButton from 'components/UserEntryForm/EntryButton'

export default class UserEntryForm extends React.Component {
  render() {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.entryBox}>
          <p className={styles.title}>Feelings Journal</p>
          <div className={styles.inputContainer}>
            <InputField type="text" placeholder="Email"></InputField>
            <InputField style={{marginTop: '8px'}} type="password" placeholder="Password"></InputField>
          </div>
          <EntryButton buttonAction="Login"></EntryButton>
        </div>
      </div>
    )
  }

  login() {
    location.assign("#/user");
  }
}
