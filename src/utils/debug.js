// Debug utility for troubleshooting API issues
export const debugAPI = () => {
  console.log('🔍 API Debug Information:');
  console.log('Current hostname:', window.location.hostname);
  console.log('Is Vercel:', window.location.hostname.includes('vercel.app'));
  console.log('Environment:', import.meta.env.MODE);
  console.log('VITE_API_BASE_URL:', import.meta.env.VITE_API_BASE_URL);
  console.log('All env vars:', import.meta.env);
  
  // Helper function to clean URLs
  const cleanURL = (url) => {
    if (!url) return '';
    return url.replace(/\/+$/, '').trim();
  };
  
  // Test backend endpoints
  const testEndpoints = async () => {
    const baseURL = import.meta.env.VITE_API_BASE_URL || 'https://afriva-backend.vercel.app';
    const cleanBaseURL = cleanURL(baseURL); // Remove all trailing slashes
    
    try {
      console.log('Testing backend at:', cleanBaseURL);
      console.log('Original URL:', baseURL);
      
      // Test root endpoint
      const rootResponse = await fetch(`${cleanBaseURL}/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Origin': window.location.origin
        }
      });
      console.log('Root endpoint status:', rootResponse.status);
      console.log('Root endpoint headers:', Object.fromEntries(rootResponse.headers.entries()));
      
      if (rootResponse.ok) {
        const data = await rootResponse.json();
        console.log('Root endpoint data:', data);
      } else {
        console.error('Root endpoint failed:', rootResponse.statusText);
      }
      
      // Test health endpoint
      const healthResponse = await fetch(`${cleanBaseURL}/health`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Origin': window.location.origin
        }
      });
      console.log('Health endpoint status:', healthResponse.status);
      console.log('Health endpoint headers:', Object.fromEntries(healthResponse.headers.entries()));
      
      if (healthResponse.ok) {
        const healthData = await healthResponse.json();
        console.log('Health endpoint data:', healthData);
      } else {
        console.error('Health endpoint failed:', healthResponse.statusText);
      }
      
    } catch (error) {
      console.error('Backend test failed:', error.message);
      console.error('Error details:', error);
    }
  };
  
  testEndpoints();
};

// Test OTP verification specifically
export const testOTPVerification = async (email) => {
  const baseURL = import.meta.env.VITE_API_BASE_URL || 'https://afriva-backend.vercel.app';
  const cleanURL = baseURL.replace(/\/+$/, ''); // Remove all trailing slashes
  
  console.log('🧪 Testing OTP verification for email:', email);
  
  try {
    const response = await fetch(`${cleanURL}/api/auth/verify-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': window.location.origin
      },
      body: JSON.stringify({
        email: email,
        otp: '1234' // Test OTP
      })
    });
    
    console.log('OTP verification test status:', response.status);
    console.log('OTP verification test headers:', Object.fromEntries(response.headers.entries()));
    
    if (response.ok) {
      const data = await response.json();
      console.log('OTP verification test response:', data);
    } else {
      const errorData = await response.json();
      console.log('OTP verification test error:', errorData);
    }
    
  } catch (error) {
    console.error('OTP verification test failed:', error);
  }
};

// Export for use in components
export default debugAPI;
