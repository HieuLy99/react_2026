import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/";

const https = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default https;
