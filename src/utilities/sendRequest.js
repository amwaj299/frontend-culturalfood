export default async function sendRequest(url, method = "GET", payload) {
  const options = { method };

  const token = localStorage.getItem("accessToken");

  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }

  if (token) {
    options.headers = options.headers || {};
    options.headers.Authorization = `Bearer ${token}`;
  }

  try {
    const res = await fetch(`http://localhost:8000${url}`, options);
    if (res.ok) {
      return res.json();
    } else {
      console.log("Request failed with status:", res.status);
    }
  } catch (err) {
    console.log("Error in sendRequest:", err);
    return err;
  }
}
