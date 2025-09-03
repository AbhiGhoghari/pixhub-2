'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function ScrollSplitMedia({ leftImage, rightImage, bottomVideoUrl }) {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxMove = 150;
      const moveDistance = Math.min(scrollY / 4, maxMove);

      if (leftRef.current) leftRef.current.style.transform = `translateX(-${moveDistance}px)`;
      if (rightRef.current) rightRef.current.style.transform = `translateX(${moveDistance}px)`;
      if (videoRef.current) videoRef.current.style.transform = `scale(1)`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div ref={leftRef} className="absolute lg:left-5 xl:left-42 2xl:left-78 top-0 transition-transform duration-200 ease-out">
        <Image src={leftImage} alt="Left picture" width={350} height={320} className="rounded-3xl neon-frame" />
      </div>

      <div ref={rightRef} className="absolute lg:right-5 xl:right-32 2xl:right-58 top-5 transition-transform duration-200 ease-out">
        <Image src={rightImage} alt="Right picture" width={320} height={500} className="rounded-3xl neon-frame" />
      </div>

      <div className="absolute lg:left-5 xl:left-32 -bottom-38">
        <video
          ref={videoRef}
          className="transition-transform duration-300 ease-out w-4/5 max-w-xl rounded-3xl neon-frame"
          src={bottomVideoUrl}
          autoPlay loop muted playsInline
        />
      </div>
    </div>
  );
}
