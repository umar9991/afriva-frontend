import React, { useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import { ToastProvider } from "./utils/ToastContainer"
import { testBackendConnection } from "./services/authService"
import debugAPI from "./utils/debug"

function App() {
  useEffect(() => {
    // Test backend connection on app start
    testBackendConnection();
    
    // Run debug utility
    debugAPI();
  }, []);

  return (
    <ToastProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ToastProvider>
  )
}

export default App
