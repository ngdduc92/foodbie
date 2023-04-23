import { REFRESH_TOKEN } from '@/share/constants';
import axios from 'axios';
import Router from 'next/router';
const BASE_URL = '127.0.0.1:5000';

export class HttpClient {
  static isRefresh: boolean;
  constructor() { }

  static contains(target: string, pattern: any[]) {
    let value = 0;
    pattern.forEach((word) => {
      value = value + (target.includes(word) ? 1 : 0);
    });
    return value !== 0;
  }

  static getDefaultOptions() {
    const token = typeof localStorage !== 'undefined' ? localStorage.getItem('API_TOKEN') : null;
    return {
      baseURL: BASE_URL,
      timeout: 60000,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
  }

  static get(url: string) {
    return axios.get(url, this.getDefaultOptions()).catch((errors) => {
      this.refreshTokenAndRetry(errors, url, () => this.get(url));
      return errors;
    });
  }
  static post(url: string, body: Object) {
    return axios.post(url, body, this.getDefaultOptions()).catch((errors) => {
      this.refreshTokenAndRetry(errors, url, () => this.post(url, body));
      return errors;
    });
  }
  static refreshTokenAndRetry(errors: any, url: string, apiCall: Function) {
    if (errors.response.status == 401 && !this.contains(url, ['logout', 'refresh'])) {
      this.get(REFRESH_TOKEN)
        .then((res) => {
          if (res.data) {
            localStorage.setItem('API_TOKEN', res.data);
            apiCall();
          } else {
            this.logout();
          }
        })
        .catch((errors) => {
          if (errors.status == 401) {
            this.logout();
          }
          return errors;
        });
    }
  }
  static logout() {
    this.get('/auth/logout');
    localStorage.removeItem('API_TOKEN');
    return Router.push('/login');
  }
}
