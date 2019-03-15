import axios from 'axios';
const url = '';
export default {
  getMe() {
    return axios.get(`${url}/me`);
  },
};
