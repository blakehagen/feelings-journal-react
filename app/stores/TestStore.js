import {observable, action} from 'mobx';
import autoBind from 'react-autobind';
import testService from 'services/testService';

export default class TestStore {
  @observable myTestData;

  constructor() {
    autoBind(this);
    testService.getData()
      .then(action(data => {
        this.myTestData = data;
        console.log('this.myTestData.data ====>', this.myTestData.data);
      }));
  }
}

