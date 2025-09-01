// Debug utility for troubleshooting API issues
export const debugAPI = () => {
  console.log('🔍 API Debug Information:');
  console.log('Current hostname:', window.location.hostname);
  console.log('Is Vercel:', window.location.hostname.includes('vercel.app'));
  console.log('Environment:', import.meta.env.MODE);
  console.log('VITE_API_BASE_URL:', import.meta.env.VITE_API_BASE_URL);
  
  // Test backend endpoints
  const testEndpoints = async () => {
    const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
    
    try {
      console.log('Testing backend at:', baseURL);
      
      // Test root endpoint
      const rootResponse = await fetch(`${baseURL}/`);
      console.log('Root endpoint status:', rootResponse.status);
      
      if (rootResponse.ok) {
        const data = await rootResponse.json();
        console.log('Root endpoint data:', data);
      }
      
      // Test health endpoint
      const healthResponse = await fetch(`${baseURL}/health`);
      console.log('Health endpoint status:', healthResponse.status);
      
      if (healthResponse.ok) {
        const healthData = await healthResponse.json();
        console.log('Health endpoint data:', healthData);
      }
      
    } catch (error) {
      console.error('Backend test failed:', error.message);
    }
  };
  
  testEndpoints();
};

// Export for use in components
export default debugAPI;
