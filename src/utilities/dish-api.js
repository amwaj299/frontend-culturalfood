import sendRequest from "./sendRequest";
const baseURL = "/dishes/";

export async function index() {
  return sendRequest(baseURL);
}
