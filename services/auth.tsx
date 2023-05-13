import { HttpClient } from './http-client';

export class AuthService {
  url = '/auth';
  httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  get() {
    return this.httpClient.get(this.url);
  }
  login(body: Object) {
    return this.httpClient.post(this.url + '/login', body);
  }
  logout() {
    return this.httpClient.logout();
  }
}
