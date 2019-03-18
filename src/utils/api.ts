import axios from 'axios';
// const url = 'http://192.168.200.3:3500/api/v1';
const url =
  'http://ec2-54-238-186-213.ap-northeast-1.compute.amazonaws.com/api/v1';
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
  signUp(params: any) {
    const config = {
      headers: {
        Authorization: localStorage.getItem('key'),
      },
    };
    console.log(params);
    return axios.post(`${url}/signup`, params, config);
  },
  getMe() {
    const config = {
      headers: {
        Authorization: localStorage.getItem('key'),
      },
    };
    return axios.get(`${url}/me`, config);
  },
  getFriendList() {
    const config = {
      headers: {
        Authorization: localStorage.getItem('key'),
      },
    };
    return axios.get(`${url}/friend_list`, config);
  },
  getRequestList() {
    const config = {
      headers: {
        Authorization: localStorage.getItem('key'),
      },
    };
    return axios.get(`${url}/request_list`, config);
  },
};
