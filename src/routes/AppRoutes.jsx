// src/routes/AppRoutes.jsx
import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import LoginScreen from "../auth/login/LoginScreen"
import SignUp from "../auth/SignUp/SignUp"
import EmailVerify from "../auth/EmailVerify/EmailVerify"
import SetUpProfile from "../auth/SetUpProfile/SetUpProfile"
import SetUpAvatar from "../auth/SetUpProfile/SetUpAvatar"
import SuccessfullyScreen from "../auth/SuccessFull/SuccessfullyScreen"
import ForgotMain from "../auth/forgotPassword/ForgotMain"
import YourDetail from "../auth/forgotPassword/forgetPages/YourDetail"
import CheckEmail from "../auth/forgotPassword/forgetPages/CheckEmail"
import CreatePassword from "../auth/forgotPassword/forgetPages/CreatePassword"
import ForgotPassword from "../auth/forgotPassword/forgetPages/ForgotPassword"
import ForgotSideBar from "../auth/forgotPassword/ForgotSideBar/ForgotSideBar"
import Navbar from "../Home/pages/Navbar"
import MainHomeLayout from "../Home/MainHomeLayout"
import NewArrivals from "../Home/pages/NewArrivals"
function AppRoutes() {
  return (
   <Routes>
  <Route path="/" element={<LoginScreen />} />
  <Route path="/login" element={<LoginScreen />} />
  <Route path="/register" element={<SignUp />} />
  <Route path="/email-verify" element={<EmailVerify />} /> 
  <Route path="/setup-profile" element={<SetUpProfile />} />
  <Route path="/setup-avatar" element={<SetUpAvatar />} />
  <Route path="/success" element={<ForgotPassword />} />

  <Route path="/forgotMain" element={<ForgotMain />}>
    <Route index element={<Navigate to="your-detail" replace />} />
    <Route path="your-detail" element={<YourDetail />} />
    <Route path="check-email" element={<CheckEmail />} />
    <Route path="choose-password" element={<CreatePassword />} />
    <Route path="success" element={<ForgotPassword />} />
  </Route>

  <Route path="/your-detail" element={<YourDetail />} />
  <Route path="/check-email" element={<CheckEmail />} />
  <Route path="/choose-password" element={<CreatePassword />} />
  <Route path="/success" element={<ForgotPassword />} />

    <Route path="/main-home" element={<MainHomeLayout />} />
     <Route path="/newArrival" element={<NewArrivals />} />

</Routes>
  )
}

export default AppRoutes
