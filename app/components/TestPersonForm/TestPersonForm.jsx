import React from 'react'
import {observer} from 'mobx-react'

@observer(['userStore', 'feelingStore'])
export default class TestPersonForm extends React.Component {
  constructor (props) {
    super(props);
    this.updateProperty = this.updateProperty.bind(this);
    this.onChange = this.onChange.bind(this);
    this.user = this.props.userStore;
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
      <div>
        <h1>My Person Form</h1>
        <form>
          <input type="text" name="fullName" value={this.user.fullName} onChange={this.onChange}/>
        </form>
      </div>
    )
  }
}