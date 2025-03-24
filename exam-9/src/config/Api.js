import axios from "axios";

const ApiLink = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default ApiLink;