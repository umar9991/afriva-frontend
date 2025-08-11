import React from 'react';
import { Link } from 'react-router-dom';
import StepItem from '../../../components/StepItems';
import Logo from '../../../components/Logo';
import ProfileImg from "../../../assets/profile.png";
import EmailImg from "../../../assets/email.png";
import PassImg from "../../../assets/pass.png";
import TickImg from "../../../assets/tick.png";
import YourDetail from '../forgetPages/YourDetail';
import CheckEmail from '../forgetPages/CheckEmail';
import CreatePassword from '../forgetPages/CreatePassword';
import ForgotPassword from '../forgetPages/ForgotPassword';
import { useNavigate } from 'react-router-dom';

export default function ForgotSideBar() {
  const navigate = useNavigate();

  return (
    <>
      <div className="hidden md:block pl-[44px] pt-[80px] bg-gray-50 max-w-[443px] h-screen">
        <div className="mb-[64px]">
          <Logo />
        </div>

        <Link to="/forgotMain/your-detail">
          <StepItem
            img={ProfileImg}
            title="Your details"
            description="Please provide your name and email."
          />
        </Link>

        <Link to="/forgotMain/check-email">
          <StepItem
            img={EmailImg}
            title="Check your email"
            description="Please check your email to get reset link."
          />
        </Link>

        <Link to="/forgotMain/choose-password">
          <StepItem
            img={PassImg}
            title="Choose a password."
            description="Choose a secure password."
          />
        </Link>

        <Link to="/forgotMain/success">
          <StepItem
            img={TickImg}
            title="Successfully"
            description="Go back to log in into your account."
          />
        </Link>
      </div>
    </>
  );
}
