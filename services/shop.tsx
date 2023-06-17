import { DATA_PRODUCTS } from '@/constants/constants';
import httpService from './http';
import { Shop } from '@/models/shop';

const BASE_URI = '/shop';
const SHOP_DETAIL = BASE_URI + '/{id}';

function get() {
  // return httpService.get(URL);
  return DATA_PRODUCTS;
}
function getById(id: string): Shop {
  return DATA_PRODUCTS.filter((item: any) => item.id.toString() === id)[0];
}
function post(body: Object) {
  return httpService.post(BASE_URI, body);
}
function put(id: string, body: Object) {
  return httpService.put(SHOP_DETAIL.replace('{id}', id), body);
}
function remove(id: string) {
  return httpService.remove(SHOP_DETAIL.replace('{id}', id));
}
export default { get, getById, post, put, remove };
