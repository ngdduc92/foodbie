import Router, { useRouter } from 'next/router';
import httpService from './http';

const BASE_URI = '/auth';
const PROFILE_URI = BASE_URI + '/profile';
const LOGIN_URI = BASE_URI + '/login';
const LOGOUT_URI = BASE_URI + '/logout';
const LOGIN_PATH = '/login';

function get() {
  return httpService.get(BASE_URI);
}
function login(body: Object) {
  return httpService.post(LOGIN_URI, body);
}
function logout() {
  httpService.get(LOGOUT_URI);
  localStorage.removeItem('API_TOKEN');
  return Router.push(LOGIN_PATH);
}
function profile() {
  return httpService.get(PROFILE_URI);
}

export default { get, login, logout, profile };
