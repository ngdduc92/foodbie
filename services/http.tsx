import { REFRESH_TOKEN } from '@/share/constants';
import axios from 'axios';
import authService from './auth';

const BASE_URI = 'http://foobbie.com:5000';

function contains(target: string, pattern: any[]) {
  let value = 0;
  pattern.forEach((word) => {
    value = value + (target.includes(word) ? 1 : 0);
  });
  return value !== 0;
}

function getDefaultOptions() {
  const token = typeof localStorage !== 'undefined' ? localStorage.getItem('API_TOKEN') : null;
  return {
    baseURL: BASE_URI,
    timeout: 60000,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };
}

function get(url: string) {
  return axios.get(url, getDefaultOptions()).catch((errors) => {
    refreshTokenAndRetry(errors, url, () => get(url));
    return errors;
  });
}
function post(url: string, body: Object) {
  return axios.post(url, body, getDefaultOptions()).catch((errors) => {
    refreshTokenAndRetry(errors, url, () => post(url, body));
    return errors;
  });
}
function put(url: string, body: Object) {
  return axios.put(url, body, getDefaultOptions()).catch((errors) => {
    refreshTokenAndRetry(errors, url, () => put(url, body));
    return errors;
  });
}
function remove(url: string) {
  return axios.delete(url, getDefaultOptions()).catch((errors) => {
    refreshTokenAndRetry(errors, url, () => remove(url));
    return errors;
  });
}
function refreshTokenAndRetry(errors: any, url: string, apiCall: Function) {
  if (errors.response.status == 401 && !contains(url, ['logout', 'refresh'])) {
    get(REFRESH_TOKEN)
      .then((res) => {
        console.log(res);
        if (res.data) {
          localStorage.setItem('API_TOKEN', res.data);
          apiCall();
        } else {
          // authService.logout();
        }
      })
      .catch((errors) => {
        if (errors.status == 401) {
          // authService.logout();
        }
        return errors;
      });
  }
}

export default { get, post, put, remove };
