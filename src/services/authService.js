import axios from "axios";
import API_CONFIG from '../config/api';

// Create axios instance with better error handling
const API = axios.create({
  baseURL: `${API_CONFIG.getBaseURL()}/api/auth`, 
  withCredentials: true,
  timeout: 10000, // 10 second timeout
});

// Add request interceptor for logging
API.interceptors.request.use(
  (config) => {
    console.log('🚀 API Request:', {
      method: config.method?.toUpperCase(),
      url: config.url,
      baseURL: config.baseURL,
      fullURL: `${config.baseURL}${config.url}`,
      data: config.data
    });
    return config;
  },
  (error) => {
    console.error('❌ API Request Error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for logging
API.interceptors.response.use(
  (response) => {
    console.log('✅ API Response:', {
      status: response.status,
      data: response.data,
      url: response.config.url
    });
    return response;
  },
  (error) => {
    console.error('❌ API Response Error:', {
      status: error.response?.status,
      message: error.response?.data?.message || error.message,
      url: error.config?.url,
      baseURL: error.config?.baseURL
    });
    return Promise.reject(error);
  }
);

export const signup = (userData) => API.post("/signup", userData);

export const signin = (userData) => API.post("/signin", userData);

export const signout = () => API.post("/signout");

export const sendVerificationCode = (email) => API.patch("/sendVerificationCode", { email });

export const verifyOtp = (email, otp) =>
  API.post("/verify-otp", {
    email,
    otp,
  });

// Test function to check if backend is accessible
export const testBackendConnection = async () => {
  try {
    const baseURL = API_CONFIG.getBaseURL();
    console.log('🔍 Testing backend connection to:', baseURL);
    
    const response = await axios.get(`${baseURL}/`, { timeout: 5000 });
    console.log('✅ Backend is accessible:', response.data);
    return true;
  } catch (error) {
    console.error('❌ Backend connection failed:', error.message);
    return false;
  }
};
