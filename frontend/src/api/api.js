import axios from "axios";

const API = axios.create({
  baseURL: "https://flask-backend-656829456717.asia-south1.run.app/auth",
  // baseURL: "http://127.0.0.1:5000/auth",
  headers: {
    "Content-type": "application/json",
  },
});

API.interceptors.request.use(
  (req) => {
    console.log("api.js interceptor triggered for:", req.url);
    try {
      // Avoid adding Authorization header for signin/signup endpoints.
      // You previously only checked '/signin' — consider checking both.
      if (!req.url.includes("/signin") && !req.url.includes("/signup")) {
        const token = localStorage.getItem("token");
        console.log("Token from localStorage:", token);
        if (token) {
          // Ensure header exists
          req.headers = req.headers || {};
          // set standard Authorization header
          req.headers.Authorization = `Bearer ${token}`;
        }
      } else {
        console.log("Skipping attaching token for auth route:", req.url);
      }
    } catch (err) {
      console.error("Error in request interceptor:", err);
    }
    console.log("Request ready to be sent (interceptor done).");
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default API;
