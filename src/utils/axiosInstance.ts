import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BLOG_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
