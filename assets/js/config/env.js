import axios from "axios";

export const baseUrl = "https://127.0.0.1:8000/api";

export const baseApi = axios.create({
  baseURL: baseUrl,
});
