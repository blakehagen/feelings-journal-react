import {observable, action} from 'mobx';
import autoBind from 'react-autobind';
// import testService from 'services/testService';

export default class UserStore {
  @observable user;

  constructor() {
    autoBind(this);
    //   testService.getData()
    //     .then(action(data => {
    //       this.myTestData = data;
    //       console.log('this.myTestData.data ====>', this.myTestData.data);
    //     }));
    this.user = {
      fullName: 'John Doe',
      job: 'Web Developer',
      email: 'john.doe@example.com',
      address: {
        city: 'Budapest',
        postalCode: '1000',
        street: 'Reactive street'
      }
    };
  }
}