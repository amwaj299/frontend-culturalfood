export default async function sendRequest(url, method = "GET", payload) {
  const options = { method };

 
  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
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
