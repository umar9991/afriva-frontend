import axios from "axios";
import API_CONFIG from '../config/api';

const cleanURL = (url) => {
  if (!url) return '';
  return url.replace(/\/+$/, '').trim();
};

const API = axios.create({
  baseURL: `${cleanURL(API_CONFIG.getBaseURL())}/api/auth`, 
  withCredentials: true,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

API.interceptors.request.use(
  (config) => {
    const cleanBaseURL = cleanURL(config.baseURL);
    const cleanURLPath = config.url?.replace(/^\/+/, '');
    const fullURL = `${cleanBaseURL}/${cleanURLPath}`;
    
    console.log('🚀 API Request:', {
      method: config.method?.toUpperCase(),
      url: config.url,
      baseURL: config.baseURL,
      cleanBaseURL,
      cleanURLPath,
      fullURL: fullURL,
      data: config.data
    });
    
    config.baseURL = cleanBaseURL;
    config.url = cleanURLPath;
    
    return config;
  },
  (error) => {
    console.error('❌ API Request Error:', error);
    return Promise.reject(error);
  }
);

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
      baseURL: error.config?.baseURL,
      timeout: error.code === 'ECONNABORTED' ? 'Request timed out' : 'No timeout'
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

export const testBackendConnection = async () => {
  try {
    const baseURL = API_CONFIG.getBaseURL();
    console.log('🔍 Testing backend connection to:', baseURL);
    
    const response = await axios.get(`${baseURL}/`, { 
      timeout: 15000,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('✅ Backend is accessible:', response.data);
    return true;
  } catch (error) {
    console.error('❌ Backend connection failed:', error.message);
    if (error.code === 'ECONNABORTED') {
      console.error('Request timed out - backend might be slow to respond');
    }
    return false;
  }
};
