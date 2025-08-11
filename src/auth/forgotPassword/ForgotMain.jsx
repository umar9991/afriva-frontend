import React from 'react';
import { Outlet } from 'react-router-dom';
import ForgotSideBar from './ForgotSideBar/ForgotSideBar';

export default function ForgotMain() {
  return (
    <div className="flex min-h-screen">
      <div className="hidden md:block md:w-[443px] bg-gray-50">
        <ForgotSideBar />
      </div>

      <div className="flex-1 justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
}
