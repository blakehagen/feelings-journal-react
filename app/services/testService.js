import axios from 'axios';

export default {
  getData() {
    return axios.get('/api/v1/test')
      .catch(error => {
        return error;
      });
  }

};