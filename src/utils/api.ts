import axios from 'axios';

// const url = 'http://192.168.200.14:3500/api/v1';
const url = 'https://ujimatcha.dddd20.info/api/v1';
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
  request(params: any) {
    const config = {
      headers: {
        Authorization: localStorage.getItem('key'),
      },
    };
    return axios.post(`${url}/request`, params, config);
  },
  approve(params: any) {
    const config = {
      headers: {
        Authorization: localStorage.getItem('key'),
      },
    };
    return axios.put(`${url}/approve`, params, config);
  },
  getUser(id: number) {
    const config = {
      headers: {
        Authorization: localStorage.getItem('key'),
      },
    };
    return axios.get(`${url}/user/${id}`, config);
  },
  getRC() {
    const config = {
      headers: {
        Authorization: localStorage.getItem('key'),
      },
    };
    return axios.get(`${url}/recommendation`, config);
  },
  getTags() {
    const config = {
      headers: {
        Authorization: localStorage.getItem('key'),
      },
    };
    return axios.get(`${url}/tags`, config);
  },
  getGames() {
    const config = {
      headers: {
        Authorization: localStorage.getItem('key'),
      },
    };
    return axios.get(`${url}/games`, config);
  },
};
