'use client';
import Image from 'next/image'
import React from 'react'
import easy from '../../public/image/png/easy.png';
import toggle from '../../public/image/png/toggle.png';
import fast from '../../public/image/png/fast.png';
import download from '../../public/image/png/3d.png';
import forward from '../../public/image/png/forward.png';
import asset from '../../public/image/png/asset.png';

const cardsData = [
    {
        title: 'Access Assets from Freepik, Envato & Flaticon',
        hoverTitle: 'All Your Favorite Marketplaces in One Place',
        desc:
            'Pay just 249 and instantly unlock downloads from Freepik, Envato, and Flaticon-graphics, templates, and assets for personal or professional projects.',
        img: asset,
        gradient: { from: '#0b1120', to: '#050a0f', fromHover: '#0b1f3a', toHover: '#07122a' },
    },
    {
        title: 'No Hidden Fees One Payment',
        hoverTitle: 'Clear, Simple Pricing',
        desc:
            'Pay once and download what you need-no extra charges, no surprises, just full access to everything.',
        img: toggle,
        gradient: { from: '#050a0a', to: '#051818', fromHover: '#0b132b', toHover: '#0b1a3b' },
    },
    {
        title: 'Fast and Easy Downloads',
        hoverTitle: 'Grab Assets in Seconds',
        desc:
            'Skip the hassle of multiple sign-ups. Search, pick, and download in just a few clicks-smooth and quick.',
        img: forward,
        gradient: { from: '#0a0f1e', to: '#000000', fromHover: '#0d1937', toHover: '#0a1024' },
    },
    {
        title: 'Easy-to-use Platform',
        hoverTitle: 'Designed to Feel Effortless',
        desc:
            'A clean, friendly interface that makes finding and downloading assets simple-everything in one place.',
        img: easy,
        gradient: { from: '#0e132a', to: '#06080f', fromHover: '#162146', toHover: '#0b1026' },
    },
    {
        title: 'Fast, Secure, and Reliable',
        hoverTitle: 'Protected & Optimised for Speed',
        desc: 'Quick, secure delivery powered by modern infrastructure to keep your workflow uninterrupted.',
        img: fast,
        gradient: { from: '#0b1224', to: '#05080f', fromHover: '#10244f', toHover: '#0a1127' },
    },
    {
        title: 'Access to Millions of Resources',
        hoverTitle: 'Endless Creative Possibilities',
        desc: 'Illustrations, templates, fonts, UI kits and more-millions of high-quality assets without restrictions.',
        img: download,
        gradient: { from: '#0a0f1c', to: '#06080f', fromHover: '#122a58', toHover: '#0a1024' },
    },
];

export default function Service() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 xl:gap-10 py-12 sm:py-16 lg:py-20 px-5 sm:px-8 xl:px-10 2xl:px-32">
                {cardsData.map((c, i) => (
                    <div
                        key={c.id ?? i}
                        className="group w-full h-full mx-auto conic-border rounded-2xl border border-transparent animate-border transition-transform duration-500 hover:-translate-y-1"
                    >
                        <div
                            className="relative h-full overflow-hidden rounded-2xl px-6 py-8 md:px-10 md:py-12 bg-[linear-gradient(to_top,var(--from),var(--to))] group-hover:bg-[linear-gradient(to_top,var(--from-hover),var(--to-hover))] transition-colors duration-500 ease-in-out before:absolute before:inset-0 before:bg-[url('/noise.gif')] before:opacity-5 before:pointer-events-none after:absolute after:inset-0 after:opacity-10 after:pointer-events-none"
                            style={
                                {
                                    ['--from']: c.gradient.from,
                                    ['--to']: c.gradient.to,
                                    ['--from-hover']: c.gradient.fromHover,
                                    ['--to-hover']: c.gradient.toHover,
                                }
                            }
                        >
                            <div className="relative z-10">
                                <span className="text-lg group-hover:hidden inline-block font-semibold pt-2 text-slate-200 mb-1">
                                    {c.title}
                                </span>
                                <span className="text-lg group-hover:inline-block hidden font-semibold pt-2 text-slate-200 mb-1">
                                    {c.hoverTitle}
                                </span>

                                <p className="text-sm text-slate-500">{c.desc}</p>

                                <div className="relative mt-5 flex justify-center items-center group-hover:-translate-y-2 transition-transform duration-500 ease-in-out">
                                    <Image
                                        className="transition-opacity duration-500 object-cover h-full m-0 p-0"
                                        src={c.img}
                                        width={200}
                                        height={200}
                                        alt={c.title}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
