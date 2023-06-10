import { REFRESH_TOKEN } from '@/share/constants';
import axios from 'axios';
import authService from './auth';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

const BASE_URI = process.env.NEXT_PUBLIC_BASE_URI || 'http://foobbie.com/api';

const refreshTokenInstance = axios.create();

const controller = new AbortController();

const refreshAuthLogic = async (failedRequest: any) => {
  if (contains(failedRequest.request.responseURL, ['refresh', 'logout', 'login'])) return;
  const refreshToken = await refreshTokenInstance.get(`${BASE_URI}/${REFRESH_TOKEN}`, getDefaultOptions());
  if (!refreshToken) return;
  localStorage.setItem('API_TOKEN', refreshToken.data);
  failedRequest.response.config.headers['Authorization'] = 'Bearer ' + authService.getToken();
};

refreshTokenInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    controller.abort();
    window.location.href = '/login';
    return;
  },
);

createAuthRefreshInterceptor(axios, refreshAuthLogic);

axios.interceptors.response.use(
  (response) => {
    if (!response) {
      throw new Error('Response data is null');
    }
    return response;
  },
  (error) => {
    if (error.response && error.response.status) {
      switch (error.response.status) {
        case 403:
          //console.log(403);
          break;
        default:
          break;
      }
    }
    return Promise.reject(error);
  },
);

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
    signal: controller.signal,
    baseURL: BASE_URI,
    timeout: 60000,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };
}

const get = (url: string) => {
  return axios.get(`${BASE_URI}/${url}`, getDefaultOptions());
};
const post = (url: string, body: Object) => {
  return axios.post(`${BASE_URI}/${url}`, body, getDefaultOptions());
};
const put = (url: string, body: Object) => {
  return axios.put(`${BASE_URI}/${url}`, body, getDefaultOptions());
};
const remove = (url: string) => {
  return axios.delete(`${BASE_URI}/${url}`, getDefaultOptions());
};

export default { get, post, put, remove };
