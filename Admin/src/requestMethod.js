import axios from "axios";
const BASE_URL="https://backend-service-9cj9.onrender.com";

const publicRequest = axios.create({
    baseURL: BASE_URL,
  });
  export { publicRequest };
