import Router, { useRouter } from 'next/router';
import httpService from './http';
import { ApiPaths } from '@/enums/api-paths';
import { RouteSegments } from '@/enums/route-segments';

const get = async () => {
  return await httpService.get(ApiPaths.AUTH_URI);
};

function login(body: Object) {
  return httpService.post(ApiPaths.LOGIN_URI, body);
}

function logout() {
  httpService.get(ApiPaths.LOGOUT_URI);
  localStorage.removeItem('API_TOKEN');
  return Router.push(RouteSegments.LOGIN);
}

function profile() {
  return httpService.get(ApiPaths.PROFILE_URI);
}
const getToken = () => {
  return localStorage.getItem('API_TOKEN');
};
const removeToken = () => {
  localStorage.removeItem('API_TOKEN');
};

export default { get, login, logout, profile, getToken, removeToken };
