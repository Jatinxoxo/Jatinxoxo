// utils/fetchStatus.js
export async function fetchStatus() {
  const userId = "1102123627438153738"; // Your Discord ID
  const res = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
  const json = await res.json();
  return json.data;
}
