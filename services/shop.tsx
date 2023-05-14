import httpService from './http';

const BASE_URI = '/shop';
const SHOP_DETAIL = BASE_URI + '/{id}';
const data = [
  {
    id: 1,
    name: '123',
  },
];

function get() {
  // return httpService.get(URL);
  return data;
}
function getById(id: string) {
  // return httpService.get(URL + '/' + id);
  return data.filter((item: any) => item.id === id);
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
