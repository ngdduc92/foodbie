import { Order } from '@/share/model/order';
import httpService from './http';

const BASE_URI = '/order';
const ORDER_DETAIL = BASE_URI + '/{id}';

const orders: Order[] = [];

function get(): Promise<Order> {
  return httpService.get<Order>(BASE_URI);
}

function getById(id: string): Promise<Order> {
  return httpService.get<Order>(ORDER_DETAIL.replace('{id}', id));
}

function post(body: Order): Promise<Order> {
  return httpService.post<Order>(BASE_URI, body);
}

function put(id: string, body: Order): Promise<Order> {
  return httpService.put<Order>(ORDER_DETAIL.replace('{id}', id), body);
}
function remove(id: string) {
  return httpService.remove(ORDER_DETAIL.replace('{id}', id));
}

export default { get, getById, post, put, remove };
