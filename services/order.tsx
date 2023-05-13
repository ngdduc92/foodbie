import { HttpClient } from './http-client';

export class OrderService {
  url = '/order';
  httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  get() {
    return this.httpClient.get(this.url);
  }
  getById(id: string) {
    return this.httpClient.get(this.url + '/' + id);
  }
  post(body: Object) {
    return this.httpClient.post(this.url, body);
  }
  put(id: string, body: Object) {
    return this.httpClient.put(this.url + '/' + id, body);
  }
  delete(id: string) {
    return this.httpClient.delete(this.url + '/' + id);
  }
}
