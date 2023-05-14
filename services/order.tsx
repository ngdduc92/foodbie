import httpService from './http';

const BASE_URI = '/order';
const ORDER_DETAIL = BASE_URI + '/{id}';

function get() {
  return httpService.get(BASE_URI);
}
function getById(id: string) {
  return httpService.get(ORDER_DETAIL.replace('{id}', id));
}
function post(body: Object) {
  return httpService.post(BASE_URI, body);
}
function put(id: string, body: Object) {
  return httpService.put(ORDER_DETAIL.replace('{id}', id), body);
}
function remove(id: string) {
  return httpService.remove(ORDER_DETAIL.replace('{id}', id));
}
export default { get, getById, post, put, remove };
