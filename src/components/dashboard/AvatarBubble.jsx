'use client';
import React from 'react';
import Marquee from '@/components/ui/marquee';
import ShinyButton from '../ui/ShinyButton';
import Image from 'next/image';

export default function PixhubCommunity() {
    const avatars = [
        "https://randomuser.me/api/portraits/men/1.jpg",
        "https://randomuser.me/api/portraits/women/1.jpg",
        "https://randomuser.me/api/portraits/men/2.jpg",
        "https://randomuser.me/api/portraits/women/2.jpg",
        "https://randomuser.me/api/portraits/men/3.jpg",
        "https://randomuser.me/api/portraits/women/3.jpg",
        "https://randomuser.me/api/portraits/men/4.jpg",
        "https://randomuser.me/api/portraits/women/4.jpg",
        "https://randomuser.me/api/portraits/men/5.jpg",
        "https://randomuser.me/api/portraits/women/5.jpg",
        "https://randomuser.me/api/portraits/men/6.jpg",
        "https://randomuser.me/api/portraits/women/6.jpg",
        "https://randomuser.me/api/portraits/men/7.jpg",
        "https://randomuser.me/api/portraits/women/7.jpg",
        "https://randomuser.me/api/portraits/men/8.jpg",
        "https://randomuser.me/api/portraits/women/8.jpg",
        "https://randomuser.me/api/portraits/men/9.jpg",
        "https://randomuser.me/api/portraits/women/9.jpg",
        "https://randomuser.me/api/portraits/men/10.jpg",
        "https://randomuser.me/api/portraits/women/10.jpg",
        "https://randomuser.me/api/portraits/men/11.jpg",
        "https://randomuser.me/api/portraits/women/11.jpg",
        "https://randomuser.me/api/portraits/men/12.jpg",
        "https://randomuser.me/api/portraits/women/12.jpg",
        "https://randomuser.me/api/portraits/men/13.jpg",
        "https://randomuser.me/api/portraits/women/13.jpg",
        "https://randomuser.me/api/portraits/men/14.jpg",
        "https://randomuser.me/api/portraits/women/14.jpg",
        "https://randomuser.me/api/portraits/men/15.jpg",
        "https://randomuser.me/api/portraits/women/15.jpg",
        "https://randomuser.me/api/portraits/women/16.jpg",
        "https://randomuser.me/api/portraits/women/17.jpg",
        "https://randomuser.me/api/portraits/women/18.jpg",
        "https://randomuser.me/api/portraits/women/19.jpg",
        "https://randomuser.me/api/portraits/women/20.jpg",
    ];

    const AvatarBubble = ({ src }) => (
        <Image
            src={src}
            alt=""
            loading="lazy"
            width={200}
            height={200}
            className="m-3 h-20 w-20 rounded-full object-cover ring-1 ring-white/10 shadow-md
                 hover:scale-105 transition-transform duration-300"
        />
    );

    return (
        <section className="relative w-full overflow-hidden my-20">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0d1224] via-[#0b1020] to-[#090e1a]" />

            <div className="w-full h-96">
                <div className="flex gap-8 items-center justify-between w-full h-full">
                    <div className="max-w-4xl py-16 ps-[20rem]">
                        <div className="inline-flex items-center rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-200/90">
                            #1 Pixhub Server in the World
                        </div>
                        <h2 className="mt-6 text-[40px] font-bold leading-tight text-white">
                            Be part of a <span className="text-gradient-blue">creative</span> community! 🌍
                        </h2>

                        <div className="pt-9">
                            <ShinyButton label="Join Pixhub" />
                        </div>
                    </div>

                    <div className="relative flex h-full flex-row items-center justify-center overflow-hidden">
                        {Array.from({ length: 7 }).map((_, colIdx) => {
                            const colItems = Array.from({ length: 7 }, (_, rowIdx) => {
                                const index = (rowIdx * 7 + colIdx) % avatars.length;
                                return avatars[index];
                            });

                            return (
                                <Marquee
                                    key={colIdx}
                                    vertical
                                    pauseOnHover
                                    reverse={colIdx % 2 === 1}
                                    className="[--duration:10s] [--gap:0rem]"
                                >
                                    {colItems.map((src, i) => (
                                        <AvatarBubble key={`${colIdx}-${i}`} src={src} />
                                    ))}
                                </Marquee>
                            );
                        })}

                        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#0d1224] to-transparent" />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#090e1a] to-transparent" />
                    </div>

                </div>
            </div>

            <style>{`
        .text-gradient-blue{
          background: linear-gradient(90deg,#60a5fa,#3b82f6,#6366f1);
          -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;
        }
      `}</style>
        </section>
    );
}
