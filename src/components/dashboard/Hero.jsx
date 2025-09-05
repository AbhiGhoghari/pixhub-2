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
    <section className="relative pt-32 md:pt-36 pb-16 sm:pb-20 md:pb-24">
      <div className="relative flex flex-col justify-center items-center z-10 max-w-8xl mx-auto px-4 sm:px-6">
        <div className="text-center relative">
          <div className="glow-behind"></div>
          <h1 className="text-gradient-blue font-extrabold tracking-wide drop-shadow-[0_0_28px_rgba(79,134,255,.55)]
                         text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight">
            50+ Premium Platforms, <br />One Subscription.
          </h1>


          <p className="pt-4 sm:pt-6 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1
               text-blue-100/90 drop-shadow-[0_0_12px_rgba(79,134,255,.4)]
               text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-center">
            <span>Unlimited creativity for just</span>
            <span className="inline-flex items-center gap-1 align-middle">
              <FaIndianRupeeSign className="h-[1em] w-[1em]" />
              349/month
            </span>
            <span>&mdash; no hidden fees, cancel anytime.</span>
          </p>


          <div className="pt-6 sm:pt-8 md:pt-9">
            <ShinyButton label="Get Instant Access" />
          </div>

          {/* ✅ Micro-trust badge */}
          <p className="pt-9 text-blue-200/80 text-sm sm:text-base drop-shadow-[0_0_8px_rgba(79,134,255,.3)]">
            ✅Trusted by creators, students & businesses worldwide.
          </p>
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
