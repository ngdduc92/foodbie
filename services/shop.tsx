import { HttpClient } from './http-client';

export class ShopService {
  url = '/shop';
  httpClient: HttpClient;
  data = [
    {
      id: 1,
      name: '123',
    },
  ];
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
  get() {
    // return this.httpClient.get(this.url);
    return this.data;
  }
  getById(id: string) {
    // return this.httpClient.get(this.url + '/' + id);
    return this.data.filter((item: any) => item.id === id);
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
