export const API_CONFIG = {
  PRODUCTION_URL: 'https://afriva-backend.vercel.app',
  LOCAL_URL: 'http://localhost:8000',
  
  getBaseURL: () => {
    if (window.location.hostname.includes('vercel.app')) {
      const url = API_CONFIG.PRODUCTION_URL.replace(/\/+$/, ''); 
      console.log('Using production API:', url);
      return url;
    }
    
    if (import.meta.env.VITE_API_BASE_URL) {
      // Remove ALL trailing slashes and clean the URL
      const envUrl = import.meta.env.VITE_API_BASE_URL.replace(/\/+$/, '').trim(); 
      console.log('Using env API:', envUrl);
      console.log('Original env API:', import.meta.env.VITE_API_BASE_URL);
      return envUrl;
    }
    
    const url = API_CONFIG.LOCAL_URL.replace(/\/+$/, ''); 
    console.log('Using local API:', url);
    return url;
  }
};

export default API_CONFIG;
