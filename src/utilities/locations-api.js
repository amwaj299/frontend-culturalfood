import sendRequest from "./sendRequest";
const baseURL = "/locations";

export async function getAllLocations() {
  return sendRequest(`${baseURL}/`);
}

export async function getDishesByLocation(locationId) {
  return sendRequest(`${baseURL}/${locationId}/dishes/`);
}
