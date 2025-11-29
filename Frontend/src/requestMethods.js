import axios from "axios";

// Backend runs on port 8500 by default in this project (see Backend/server.js)
const BASE_URL = "https://backend-service-9cj9.onrender.com";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
});
