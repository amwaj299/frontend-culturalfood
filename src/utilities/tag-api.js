import sendRequest from "./sendRequest";
const baseURL = "/tags/";

export async function getAllTags() {
  return sendRequest(baseURL);
}

export async function createTag(tagData) {
  return sendRequest(baseURL, "POST", tagData);
}

export async function updateTag(tagId, tagData) {
  return sendRequest(`${baseURL}${tagId}/`, "PUT", tagData);
}

export async function deleteTag(tagId) {
  return sendRequest(`${baseURL}${tagId}/`, "DELETE");
}


