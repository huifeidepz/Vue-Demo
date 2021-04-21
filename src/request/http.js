import axios from 'axios';

const baseUrl = "http://127.0.0.1:5000/"
// const baseUrl = "/api/"
// const baseUrl = "http://47.98.108.37/api/"
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

export function get(url, params) {
  return axios.get( baseUrl+url, {
    params: params
  })
}
export function post(url, params) {
    return axios.post( baseUrl+url, params)

  }

