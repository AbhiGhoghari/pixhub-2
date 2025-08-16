'use client';
import Image from 'next/image'
import React from 'react'

const cardsData = [
    {
        title: 'Instant Access',
        hoverTitle: 'Seamless & Instant Accessibility',
        desc: "Empowering your creative journey with instant access to premium resources, ensuring you never miss a beat in your projects.",
        img: '/simplechartt.webp',
        hoverImg: '/chartt.webp',
        gradient: { from: '#242424', to: '#020202', fromHover: '#182135', toHover: '#080808' },
    },
    {
        title: "Customer Support",
        hoverTitle: 'Responsive Assistance at Your Fingertips',
        desc: "Our dedicated support team is here to assist you with any questions or issues, ensuring a smooth experience with our premium resources.",
        img: '/fullverificationtwo_fpi9eo.webp',
        hoverImg: '/verification_iwnfmj.webp',
        gradient: { from: '#050a0a', to: '#051818', fromHover: '#05070a', toHover: '#0b1a3b' },
    },
    {
        title: 'Pocket Friendly',
        hoverTitle: "Say Goodbye to Expensive Subscriptions",
        desc: "Say hello to affordable creativity with our pocket-friendly plans, designed to give you access to premium resources without breaking the bank.",
        img: '/chat_zinhdw.webp',
        hoverImg: '/hide_chat_egk7h4.webp',
        gradient: { from: '#171c35', to: '#000000', fromHover: '#2b131e', toHover: '#141414' },
    },
];

export default function Support() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div>
                <div className="glow-behind"></div>
                <h1 className='text-center text-7xl font-extrabold text-gradient-blue tracking-wide drop-shadow-[0_0_28px_rgba(79,134,255,.55)] leading-[1.5]'>Put the light</h1>
                <h1 className='pt-5 text-blue-100/90 text-5xl font-bold tracking-wide'>on the POWER features of all time</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-32 py-20">
                {cardsData.map((c, i) => (
                    <div
                        key={c.id ?? i}
                        className="group w-full mx-auto conic-border rounded-2xl border border-transparent animate-border transition-transform duration-500 hover:-translate-y-1"
                    >
                        <div
                            className="relative overflow-hidden rounded-2xl px-6 py-8 md:px-10 md:py-12 bg-[linear-gradient(to_top,var(--from),var(--to))] group-hover:bg-[linear-gradient(to_top,var(--from-hover),var(--to-hover))] transition-colors duration-500 ease-in-out before:absolute before:inset-0 before:bg-[url('/noise.gif')] before:opacity-5 before:pointer-events-none after:absolute after:inset-0 after:opacity-10 after:pointer-events-none"
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

                                <div className="relative mt-5 group-hover:-translate-y-2 transition-transform duration-500 ease-in-out">
                                    <Image
                                        className="group-hover:opacity-0 transition-opacity duration-500 object-cover h-full m-0 p-0"
                                        src={c.img}
                                        width={350}
                                        height={240}
                                        alt={c.title}
                                    />
                                    <Image
                                        className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity object-cover duration-300 h-full m-0 p-0"
                                        src={c.hoverImg}
                                        width={350}
                                        height={240}
                                        alt={`${c.title} hover`}
                                        aria-hidden="true"
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
