import axios from "axios";

const API = axios.create({
  baseURL: "https://flask-backend-656829456717.asia-south1.run.app/auth",
  headers: {
    "Content-type": "application/json",
  },
});

API.interceptors.request.use((req) => {
    let token = null;
  console.log("api.js is triggered");
  if (!req.url.includes("/signin")) {
    const token = localStorage.getItem("token");
    console.log("passed (!req.url.includes('/signin'))");
  }

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  console.log("POST successfull passed API.interceptors.request.use(req)");
  return req;
});

export default API;
