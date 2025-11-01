import sendRequest from "./sendRequest";
const baseURL = "/dishes/";

export async function index() {
  return sendRequest(baseURL);
}

export function show(dishId) {
  return sendRequest(`${baseURL}${dishId}/`);
}

export async function create(formData) {
  return sendRequest(baseURL, "POST", formData);
}

export async function update(formData, dishId) {
  return sendRequest(`${baseURL}${dishId}/`, "PUT", formData);
}

export async function deleteDish(dishId) {
  return sendRequest(`${baseURL}${dishId}/`, "DELETE");
}

export async function addPhoto(dishId, updatedDish) {
  return sendRequest(`/dishes/${dishId}/`, "PUT", updatedDish);
}

export function dishesByLocation(locationId) {
  return sendRequest(`/locations/${locationId}/dishes/`);
}

