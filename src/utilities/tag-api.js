import sendRequest from "./sendRequest";
const baseURL = "/tags/";

export async function getAllTags() {
  return sendRequest(baseURL);
}

export async function createTag(tagData) {
  return sendRequest(baseURL, "POST", tagData);
}


