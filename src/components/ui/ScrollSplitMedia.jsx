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
      <div ref={leftRef} className="absolute lg:left-5 xl:left-42 2xl:left-60 top-0 transition-transform duration-200 ease-out">
        <Image src={leftImage} alt="Left picture" width={300} height={300} className="rounded-3xl neon-frame" />
      </div>

      <div ref={rightRef} className="absolute lg:right-5 xl:right-32 2xl:right-40 top-5 transition-transform duration-200 ease-out">
        <Image src={rightImage} alt="Right picture" width={280} height={400} className="rounded-3xl neon-frame" />
      </div>

      <div className="absolute lg:left-5 xl:left-14 -bottom-10">
        <video
          ref={videoRef}
          className="transition-transform duration-300 ease-out w-3/4 max-w-3xl rounded-3xl neon-frame"
          src={bottomVideoUrl}
          autoPlay loop muted playsInline
        />
      </div>
    </div>
  );
}
