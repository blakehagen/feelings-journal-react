import React from 'react'
import {observer} from 'mobx-react'

@observer(['userStore', 'feelingStore'])
export default class TestPersonForm extends React.Component {
  constructor (props) {
    super(props);
    this.updateProperty = this.updateProperty.bind(this);
    this.onChange = this.onChange.bind(this);
    this.user = this.props.userStore.user;
    console.log('this.user', this.user);
  }

  updateProperty (key, value) {
    console.log('key, value :::: ', key, value);
    this.user[key] = value
  }

  onChange (event) {
    console.log('event', event);
    this.updateProperty(event.target.name, event.target.value)
  }

  render () {
    return (
      <div style={{padding: '30px'}}>
        <h1>My Person Form</h1>
        <form>
          <input style={{width: '200px'}} type="text" name="fullName" value={this.user.fullName} onChange={this.onChange}/>
        </form>
      </div>
    )
  }
}