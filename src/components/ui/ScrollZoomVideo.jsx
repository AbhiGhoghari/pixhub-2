'use client';
import React, { useEffect, useRef } from 'react';

export default function ScrollZoomVideo({ videoUrl }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scale = Math.min(1 + scrollY / 1000, 1.25); 
      if (videoRef.current) videoRef.current.style.transform = `scale(${scale})`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full flex justify-center items-center mt-16 lg:mt-20 z-40">
      <video
        ref={videoRef}
        className="transition-transform duration-300 ease-out w-3/4 max-w-3xl rounded-3xl neon-frame"
        src={videoUrl}
        autoPlay loop muted playsInline
      />
    </div>
  );
}
