import {observable} from 'mobx';
import autoBind from 'react-autobind';

export default class FeelingStore {
  @observable feeling;

  constructor() {
    autoBind(this);
    this.feeling = {
      currentFeeling: undefined
    };
  }
}