import {observable} from 'mobx';

const person = observable({
  fullName: 'John Doe',
  job: 'Web Developer',
  email: 'john.doe@example.com',
  address: {
    city: 'Budapest',
    postalCode: '1000',
    street: 'Reactive street'
  }
});

export default person;