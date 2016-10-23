import React from 'react';
import styles from './userEntryForm.scss';
import InputField from 'components/UserEntryForm/InputField';
import EntryButton from 'components/UserEntryForm/EntryButton'

export default class UserEntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state       = {type: 'login'};
    this.toggleEntry = this.toggleEntry.bind(this);
  }

  render() {
    let entryForm;

    if (this.state.type === 'login') {
      entryForm = (
        <div className={styles.mainContainer}>
          <div className={styles.entryBox}>
            <p className={styles.title}>Feelings Journal</p>
            <div className={styles.inputContainer}>
              <InputField type="text" placeholder="Email"/>
              <InputField style={{marginTop: '8px'}} type="password" placeholder="Password"/>
            </div>
            <EntryButton buttonAction="Login"/>
            <p className={styles.toggleEntry} onClick={this.toggleEntry}>Create an Account</p>
          </div>
        </div>
      );
    } else {
      entryForm = (
        <div className={styles.mainContainer}>
          <div className={styles.entryBox}>
            <p className={styles.title}>Feelings Journal</p>
            <div className={styles.inputContainer}>
              <InputField type="text" placeholder="First Name"/>
              <InputField style={{marginTop: '8px'}} type="text" placeholder="Last Name"/>
              <InputField style={{marginTop: '8px'}} type="text" placeholder="Email"/>
              <InputField style={{marginTop: '8px'}} type="password" placeholder="Password"/>
              <InputField style={{marginTop: '8px'}} type="password" placeholder="Confirm Password"/>
            </div>
            <EntryButton buttonAction="Register"/>
            <p className={styles.toggleEntry} onClick={this.toggleEntry}>Login</p>
          </div>
        </div>
      );
    }

    return (
      <div>
        {entryForm}
      </div>
    )
  }

  toggleEntry() {
    if (this.state.type === 'login') {
      this.setState({
        type: 'register'
      });
    } else {
      this.setState({
        type: 'login'
      });
    }
  }
}
