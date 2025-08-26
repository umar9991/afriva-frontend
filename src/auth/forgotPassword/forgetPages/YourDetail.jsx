import Logo from '../../../components/Logo'
import CustomTextField from '../../../components/CustomTextField'
import CustomLabel from '../../../components/CustomLabel'
import CustomHeading from '../../../components/CustomHeading'
import SubHeading from '../../../components/SubHeading'
import PasswordField from '../../../components/PasswordField'
import CustomButton from '../../../components/CustomButton'
import AuthRedirectText from '../../../components/AuthRedirectText'
import BackButton from '../../../components/BackButton'
import Circle1 from '../../../assets/circle.png'
import Bg from '../../../assets/BG.png'
import EmailImg from '../../../assets/email.png'
import React, { useState } from "react";
import { sendVerificationCode } from '../../../services/authService'
import { useNavigate } from "react-router-dom";


export default function YourDetail() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log("Debug=======>")
    console.log(email)
    try {
      const res = await sendVerificationCode(email);
      alert(res.data.message);
      navigate("/forgotMain/check-email");
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Login failed");
    }
  };
  return (
    <>
      <section
        className="h-screen flex items-center justify-center bg-no-repeat bg-center bg-contain max-w-[769px] max-h-[768px]"
        style={{
          backgroundImage: `url(${Bg})`,
          display: 'flex',
          textAlign: 'start',
        }}
      >
        <div>
          <div className="p-[20px] flex justify-center mb-[24px] mt-[30px]">
            <img className="h-[24px] w-[24px]" src={EmailImg} alt="" />
          </div>

          <div className="text-center">
            <CustomHeading text="Forgot password?" />
          </div>

          <SubHeading text="No worries, we’ll send you reset instructions." />

          <CustomLabel text="Email" />
          <CustomTextField placeholder="Enter your email"value={email}
              onChange={(e) => setEmail(e.target.value)} />

          <CustomButton label="Reset password" to="/forgotMain/check-email" onClick={handleLogin} />

          <BackButton />

          <div className="flex justify-center items-center text-center">
            <img
              className="max-h-[10px] max-w-[88px] mt-[80px]"
              src={Circle1}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  )
}
