'use client';
import React, { useEffect, useState } from 'react';
import Marquee from '@/components/ui/marquee';
import ShinyButton from '../ui/ShinyButton';
import avatar1 from '../../../public/image/avatar/avatar1.jpg';
import avatar2 from '../../../public/image/avatar/avatar2.jpg';
import avatar3 from '../../../public/image/avatar/avatar3.jpg';
import avatar4 from '../../../public/image/avatar/avatar4.jpg';
import avatar5 from '../../../public/image/avatar/avatar5.jpg';
import avatar6 from '../../../public/image/avatar/avatar6.jpg';
import avatar7 from '../../../public/image/avatar/avatar7.jpg';
import avatar8 from '../../../public/image/avatar/avatar8.jpg';
import avatar9 from '../../../public/image/avatar/avatar9.jpg';
import avatar10 from '../../../public/image/avatar/avatar10.jpg';
import avatar11 from '../../../public/image/avatar/avatar11.jpg';
import avatar12 from '../../../public/image/avatar/avatar12.jpg';
import avatar13 from '../../../public/image/avatar/avatar13.jpg';
import avatar14 from '../../../public/image/avatar/avatar14.jpg';
import avatar15 from '../../../public/image/avatar/avatar15.jpg';
import avatar16 from '../../../public/image/avatar/avatar16.jpg';
import avatar17 from '../../../public/image/avatar/avatar17.jpg';
import avatar18 from '../../../public/image/avatar/avatar18.jpg';
import avatar19 from '../../../public/image/avatar/avatar19.jpg';
import avatar20 from '../../../public/image/avatar/avatar20.jpg';
import avatar21 from '../../../public/image/avatar/avatar21.jpg';
import avatar22 from '../../../public/image/avatar/avatar22.jpg';
import avatar23 from '../../../public/image/avatar/avatar23.jpg';
import avatar24 from '../../../public/image/avatar/avatar24.jpg';
import avatar25 from '../../../public/image/avatar/avatar25.jpg';
import avatar26 from '../../../public/image/avatar/avatar26.jpg';
import avatar27 from '../../../public/image/avatar/avatar27.jpg';
import avatar28 from '../../../public/image/avatar/avatar28.jpg';
import avatar29 from '../../../public/image/avatar/avatar29.jpg';
import avatar30 from '../../../public/image/avatar/avatar30.jpg';
import avatar31 from '../../../public/image/avatar/avatar31.jpg';
import avatar32 from '../../../public/image/avatar/avatar32.jpg';
import avatar33 from '../../../public/image/avatar/avatar33.jpg';
import avatar34 from '../../../public/image/avatar/avatar34.jpg';
import avatar35 from '../../../public/image/avatar/avatar35.jpg';
import Image from 'next/image';

export default function Community() {
    const avatars = [
        avatar1, avatar2, avatar3, avatar4, avatar5, avatar6,
        avatar7, avatar8, avatar9, avatar10, avatar11, avatar12,
        avatar13, avatar14, avatar15, avatar16, avatar17, avatar18,
        avatar19, avatar20, avatar21, avatar22, avatar23, avatar24,
        avatar25, avatar26, avatar27, avatar28, avatar29, avatar30,
        avatar31, avatar32, avatar33, avatar34, avatar35
    ];

    const [rows, setRows] = useState(4);

    useEffect(() => {
        function updateRows() {
            const w = window.innerWidth;
            if (w >= 1536) setRows(7);     // 2xl
            else if (w >= 1280) setRows(5); // xl
            else if (w >= 1024) setRows(4); // lg
            else if (w >= 768) setRows(2); // md
            else if (w >= 520) setRows(5); // sm
            else setRows(3);
        }
        updateRows();
        window.addEventListener('resize', updateRows);
        return () => window.removeEventListener('resize', updateRows);
    }, []);

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
        <section className="relative w-full overflow-hidden mt-10 md:mt-20 mb-5 md:mb-10">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0d1224] via-[#0b1020] to-[#090e1a]" />

            <div className="w-full h-[45rem] md:h-96">
                <div className="flex flex-col md:flex-row gap-8 items-center justify-between w-full h-full pr-3">
                    {/* LEFT SIDE TEXT */}
                    <div className="max-w-4xl pt-12 pb-5 md:py-16 sm:ps-8 xl:ps-[12rem] 2xl:ps-[20rem] text-center md:text-left">
                        <div className="inline-flex items-center rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-200/90">
                            #1 DesignCrate Server in the World
                        </div>
                        <h2 className="mt-6 text-[40px] font-bold leading-tight text-white md:w-[75%]">
                            Be part of a <span className="text-gradient-blue">creative</span> community! 🌍
                        </h2>

                        <div className="pt-9">
                            <ShinyButton label="Join Designcrate" />
                        </div>
                    </div>

                    {/* RIGHT SIDE AVATARS */}
                    <div className="relative flex h-full flex-row items-center justify-center overflow-hidden">
                        {Array.from({ length: rows }).map((_, colIdx) => {
                            const colItems = Array.from({ length: rows }, (_, rowIdx) => {
                                const index = (rowIdx * rows + colIdx) % avatars.length;
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

                        {/* gradient fades */}
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
