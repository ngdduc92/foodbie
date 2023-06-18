import { Order } from '@/models/order';
import httpService from './http';
import { ApiPaths } from '@/enums/api-paths';

const orders: Order[] = [];

function get(): Promise<Order> {
  return httpService.get<Order>(ApiPaths.ORDER);
}

function getById(id: string): Promise<Order> {
  return httpService.get<Order>(ApiPaths.ORDER_DETAIL.replace('{id}', id));
}

function post(body: Order): Promise<Order> {
  return httpService.post<Order>(ApiPaths.ORDER, body);
}

function put(id: string, body: Order): Promise<Order> {
  return httpService.put<Order>(ApiPaths.ORDER_DETAIL.replace('{id}', id), body);
}
function remove(id: string) {
  return httpService.remove(ApiPaths.ORDER_DETAIL.replace('{id}', id));
}

export default { get, getById, post, put, remove };
