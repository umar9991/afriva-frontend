import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api/auth", 
  withCredentials: true, 
});

export const signup = (userData) => API.post("/signup", userData);

export const signin = (userData) => API.post("/signin", userData);

export const signout = () => API.post("/signout");


export const sendVerificationCode = (email) => API.patch("/sendVerificationCode", { email });
export const verifyOtp = (email, otp) =>
  API.post("/verify-otp", {
    email,
    otp,
  });

