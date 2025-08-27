'use client';
import React from 'react';
import { FaIndianRupeeSign } from "react-icons/fa6";
import ScrollZoomVideo from '../ui/ScrollZoomVideo';
import picture1 from '../../../public/image/image/hero.jpg';
import picture2 from '../../../public/image/image/hero-2.jpg';
import ScrollSplitMedia from '../ui/ScrollSplitMedia';
import ShinyButton from '../ui/ShinyButton';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-44 pb-24">
      {/* Centered content */}
      <div className="relative flex flex-col justify-center items-center z-10">
        <div className="text-center relative">
          <div className="glow-behind"></div>
          <h1 className="text-gradient-blue text-7xl font-extrabold tracking-wide drop-shadow-[0_0_28px_rgba(79,134,255,.55)]">
            The best premium resources,
          </h1>

          <p className="pt-6 text-blue-100/90 text-xl font-normal flex items-center justify-center drop-shadow-[0_0_12px_rgba(79,134,255,.4)]">
            Unlimited Benefits, now for just&nbsp;<FaIndianRupeeSign className="inline -mt-1" />249!
          </p>

          <div className="pt-9">
            <ShinyButton label="Get Instant Access" />
          </div>
        </div>

        <div className="relative w-full flex justify-center items-center">
          <ScrollZoomVideo videoUrl="/video/main.mp4" />
          <ScrollSplitMedia
            leftImage={picture1}
            rightImage={picture2}
            bottomVideoUrl="/video/video1.mp4"
          />
        </div>
      </div>
    </section>
  );
}
