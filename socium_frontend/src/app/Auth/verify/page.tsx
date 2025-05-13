"use client";
import React from "react";
import VerifyForm from "./VerifyForm";

const verify: React.FC = () => {
  return (
    <div className='relative min-h-screen flex items-center justify-center bg-black overflow-hidden'>
      <video
        className='absolute top-0 left-0 w-full h-full object-cover z-0'
        src='/signupbg.mp4'
        autoPlay
        loop
        muted
        playsInline
        preload='auto'
        poster='/videos/bg-poster.jpg'
      />
      <div className='relative z-10'>
        {/* Your content here */}
        <VerifyForm />
        <h1 className='text-gray-400 mt-3.5'>© 2025 Socium</h1>
      </div>
    </div>
  );
};

export default verify;
