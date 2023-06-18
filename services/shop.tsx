import { DATA_PRODUCTS } from '@/constants/constants';
import httpService from './http';
import { Shop } from '@/models/shop';
import { ApiPaths } from '@/enums/api-paths';

function get() {
  // return httpService.get(URL);
  return DATA_PRODUCTS;
}
function getById(id: string): Shop {
  return DATA_PRODUCTS.filter((item: any) => item.id.toString() === id)[0];
}
function post(body: Object) {
  return httpService.post(ApiPaths.SHOP, body);
}
function put(id: string, body: Object) {
  return httpService.put(ApiPaths.SHOP_DETAIL.replace('{id}', id), body);
}
function remove(id: string) {
  return httpService.remove(ApiPaths.SHOP_DETAIL.replace('{id}', id));
}
export default { get, getById, post, put, remove };
