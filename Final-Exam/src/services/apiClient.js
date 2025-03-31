import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL||"http://localhost:3000";

const ApiLink = axios.create({
  baseURL: BASE_URL,
});

export default ApiLink;
