import axios from 'axios';
const url = 'http://192.168.200.6:3500/api/v1';
// 'http://ec2-54-238-186-213.ap-northeast-1.compute.amazonaws.com/api/v1';
export default {
  login(email: string, password: string) {
    const param = {
      email,
      password,
    };
    return axios.post(`${url}/login`, param);
  },
  register(email: string, password: string) {
    const param = {
      email,
      password,
    };
    return axios.post(`${url}/register`, param);
  },
  getMe() {
    return axios.get(`${url}/me`);
  },
};
