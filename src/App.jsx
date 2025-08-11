import React from "react"
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import ToastContainer from "./utils/ToastContainer"

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
