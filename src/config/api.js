export const API_CONFIG = {
  PRODUCTION_URL: 'https://afriva-backend.vercel.app/',
  LOCAL_URL: 'http://localhost:8000',
  getBaseURL: () => {
    if (window.location.hostname.includes('vercel.app')) {
      return API_CONFIG.PRODUCTION_URL;
    }
    if (import.meta.env.VITE_API_BASE_URL) {
      return import.meta.env.VITE_API_BASE_URL;
    }
    return API_CONFIG.LOCAL_URL;
  }
};

export default API_CONFIG;
