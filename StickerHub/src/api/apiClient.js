import axios from "axios";

const apiClent = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
});

console.log("BASE URL:", import.meta.env.VITE_API_BASE_URL);

export default apiClent;
