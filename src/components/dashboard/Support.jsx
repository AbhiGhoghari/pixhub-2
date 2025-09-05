'use client';
import Image from 'next/image'
import React from 'react'
import share from '../../../public/image/png/share.png';
import done from '../../../public/image/png/done.png';
import support from '../../../public/image/png/support.png';
import thumsup from '../../../public/image/png/thumsup.png';
import money from '../../../public/image/png/money.png';
import sun from '../../../public/image/png/sun.png';

const cardsData = [
  { 
    title: 'Instant Access', 
    hoverTitle: 'Seamless & Instant Accessibility',
    desc: "Unlock 50+ premium platforms instantly with one subscription. No waiting, no hassle - just pure creativity at your fingertips.",
    img: share, 
    hoverImg: done, 
    gradient: { from: '#242424', to: '#020202', fromHover: '#182135', toHover: '#080808' } 
  },
  { 
    title: "Customer Support", 
    hoverTitle: 'Responsive Assistance at Your Fingertips',
    desc: "Never feel stuck. Our responsive support team is here 24/7 to guide creators, students, and businesses with quick, reliable help.",
    img: support, 
    hoverImg: thumsup, 
    gradient: { from: '#050a0a', to: '#051818', fromHover: '#05070a', toHover: '#0b1a3b' } 
  },
  { 
    title: 'Pocket Friendly', 
    hoverTitle: "Say Goodbye to Expensive Subscriptions",
    desc: "Enjoy unlimited creativity for just ₹349/month. One subscription replaces dozens of costly tools — save big while creating more.",
    img: money, 
    hoverImg: sun, 
    gradient: { from: '#171c35', to: '#000000', fromHover: '#2b131e', toHover: '#141414' } 
  },
];

export default function Support() {
  return (
    <div id="service" className='flex flex-col justify-center items-center'>
      <div className='text-center'>
        <div className="glow-behind"></div>
        <h1 className='text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-gradient-blue tracking-wide drop-shadow-[0_0_28px_rgba(79,134,255,.55)] leading-[1.5]'>
          Powerful Features
        </h1>
        <h1 className='pt-3 lg:pt-5 text-blue-100/90 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wide'>
          Trusted by creators, students & businesses worldwide
        </h1>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 xl:gap-10 py-12 sm:py-16 lg:py-20 px-5 sm:px-8 xl:px-10 2xl:px-32">
        {cardsData.map((c, i) => {
          const isLast = i === cardsData.length - 1;
          return (
            <div
              key={i}
              className={`group w-full h-full mx-auto conic-border rounded-2xl border border-transparent animate-border transition-transform duration-500 hover:-translate-y-1
                ${isLast ? 'md:col-span-2 md:justify-self-center md:max-w-xl xl:col-span-1' : ''}`}
            >
              <div
                className="relative h-full overflow-hidden rounded-2xl px-6 py-8 md:px-10 md:py-12 bg-[linear-gradient(to_top,var(--from),var(--to))] group-hover:bg-[linear-gradient(to_top,var(--from-hover),var(--to-hover))] transition-colors duration-500 ease-in-out before:absolute before:inset-0 before:bg-[url('/noise.gif')] before:opacity-5 before:pointer-events-none after:absolute after:inset-0 after:opacity-10 after:pointer-events-none"
                style={{
                  ['--from']: c.gradient.from,
                  ['--to']: c.gradient.to,
                  ['--from-hover']: c.gradient.fromHover,
                  ['--to-hover']: c.gradient.toHover,
                }}
              >
                <div className="relative z-10">
                  <span className="text-lg group-hover:hidden inline-block font-semibold pt-2 text-slate-200 mb-1">
                    {c.title}
                  </span>
                  <span className="text-lg group-hover:inline-block hidden font-semibold pt-2 text-slate-200 mb-1">
                    {c.hoverTitle}
                  </span>

                  <p className="text-sm text-slate-500">{c.desc}</p>

                  <div className="relative mt-5 flex justify-center group-hover:-translate-y-2 transition-transform duration-500 ease-in-out">
                    <Image
                      className="group-hover:opacity-0 transition-opacity duration-500 object-cover h-full m-0 p-0"
                      src={c.img}
                      width={250}
                      height={250}
                      alt={c.title}
                    />
                    <Image
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity object-cover duration-300 h-full m-0 p-0"
                      src={c.hoverImg}
                      width={250}
                      height={250}
                      alt={`${c.title} hover`}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}
