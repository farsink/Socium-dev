"use client";

import Image from "next/image";
import React, { useRef } from "react";

interface LogoMarqueeProps {
  logos: string[];
  speed: number; // Speed in seconds for one full loop
}

const LogoMarquee: React.FC<LogoMarqueeProps> = ({ logos, speed }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  return (
    <div className='relative overflow-hidden w-full logo-mover block sm:hidden' style={{ height: "80px" }}>
      <div
        className='flex w-max animate-marquee'
        ref={marqueeRef}
        style={{
          height: "80px",
          animationDuration: `${speed}s`,
        }}
      >
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            width={100}
            height={100}
            alt={`Logo ${index + 1}`}
            className='mx-4 last:mr-0 h-12 object-contain grayscale'
          />
        ))}
        {logos.map((logo, index) => (
          <Image
            key={`clone-${index}`}
            src={logo}
            width={100}
            height={100}
            alt={`Logo ${index + 1}`}
            className='mx-4 last:mr-0 h-12 object-contain grayscale'
          />
        ))}
      </div>
      <div className='absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background'></div>
      <div className='absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background'></div>
    </div>
  );
};

export default LogoMarquee;
