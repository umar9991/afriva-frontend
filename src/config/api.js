export const API_CONFIG = {
  PRODUCTION_URL: 'https://afriva-backend.vercel.app',
  LOCAL_URL: 'http://localhost:8000',
  
  getBaseURL: () => {
    // Check if we're in production (Vercel)
    if (window.location.hostname.includes('vercel.app')) {
      console.log('Using production API:', API_CONFIG.PRODUCTION_URL);
      return API_CONFIG.PRODUCTION_URL;
    }
    
    // Check for environment variable
    if (import.meta.env.VITE_API_BASE_URL) {
      console.log('Using env API:', import.meta.env.VITE_API_BASE_URL);
      return import.meta.env.VITE_API_BASE_URL;
    }
    
    // Default to local
    console.log('Using local API:', API_CONFIG.LOCAL_URL);
    return API_CONFIG.LOCAL_URL;
  }
};

export default API_CONFIG;
