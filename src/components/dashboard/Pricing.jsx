'use client';
import React from 'react';
import { FaIndianRupeeSign } from "react-icons/fa6";
import robot from '../../../public/image/png/robot2.webp';
import Image from 'next/image';

export default function Pricing() {
    const plans = [
        {
            key: 'monthly',
            title: 'Monthly Plan',
            price: '349',
            per: '',
            billedNow: '349',
            billedOriginal: null,
            saveText: null,
            badge: null,
            selected: true,
        },
        {
            key: 'quarterly',
            title: '3 Month Plan',
            price: '299',
            per: '/month',
            billedNow: '899',
            billedOriginal: '1197',
            saveText: 'Save 25%',
            badge: null,
        },
        {
            key: 'semi',
            title: '6 Month Plan',
            price: '249',
            per: '/month',
            billedNow: '1499',
            billedOriginal: '2694',
            saveText: 'Save 45%',
            // blue theme instead of pink
            badge: { label: 'Most Popular', color: 'bg-blue-500 text-black' },
        },
        {
            key: 'yearly',
            title: 'Yearly Plan',
            price: '199',
            per: '/month',
            billedNow: '2399',
            billedOriginal: '5388',
            saveText: 'Save 55%',
            badge: { label: 'Super Saving', color: 'bg-emerald-500 text-black' },
        },
    ];

    const perks = [
        '50+ Premium Tools Access',
        '24/7 Dedicated Support',
        'Free Future Updates',
        'Instant Activation',
        'Cancel Anytime',
    ];

    const Check = () => (
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-cyan-300" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    return (
        <section id="pricing" className="relative w-full pb-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="relative mx-auto flex items-center justify-center">
                    <div className="robot-wrap">
                        {/* purple glow that matches robot width */}
                        <span className="halo" aria-hidden />

                        {/* tiny animated stars */}
                        <span className="stars stars--a" aria-hidden />
                        <span className="stars stars--b" aria-hidden />

                        {/* robot (slow float) */}
                        <Image
                            src={robot}
                            width={100}
                            height={100}
                            alt="robot"
                            className="robot-float"
                        />
                    </div>
                </div>
                <h2 className="pt-5 text-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                    Choose Your Plan
                </h2>

                {/* Cards */}
                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {plans.map((p, i) => (
                        <div key={p.key} className={`h-full relative ${i === 3 ? 'lg:col-start-2' : ''}`}>
                            {/* badge */}
                            {p.badge && (
                                <div className="absolute right-4 top-4 z-20">
                                    <div className={`rounded-full px-3 py-1 text-[11px] font-bold ring-1 ring-white/10 shadow-[0_6px_20px_rgba(59,130,246,.35)] ${p.badge.color} badge-pop`}>
                                        {p.badge.label}
                                    </div>
                                </div>
                            )}

                            {/* Shell */}
                            <div className={`relative h-full rounded-2xl neon-card p-[2px] conic-border border border-transparent animate-border transition-transform duration-500 hover:-translate-y-0.5 ${p.selected ? 'ring-2 ring-emerald-500/70 shadow-[0_0_0_3px_rgba(16,185,129,.15)]' : 'ring-1 ring-white/10'}`}>
                                <div className="rounded-[16px] bg-[#121627] p-6 md:p-7 shadow-[0_14px_40px_rgba(0,0,0,.45)] relative overflow-hidden h-full">
                                    {/* soft top-right accent glow */}
                                    <span className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full bg-cyan-400/20 blur-2xl" />
                                    {/* sweeping shine on hover */}
                                    <span className="plan-shine pointer-events-none absolute inset-0 rounded-[16px]" />

                                    {/* Title */}
                                    <div className="text-white font-semibold text-xl leading-tight">{p.title}</div>

                                    {/* Price */}
                                    <div className="mt-2 flex items-center">
                                        <span className="flex items-center text-[34px] md:text-[40px] font-extrabold leading-none text-[#9b5cff]">
                                            <FaIndianRupeeSign />{p.price}
                                        </span>
                                        {p.per && (
                                            <span className="ml-1 align-[0.15em] text-[#9b5cff] text-2xl font-extrabold">{p.per}</span>
                                        )}
                                    </div>

                                    {/* Billed line */}
                                    <div className="mt-2 flex items-center text-sm md:text-base text-white/75">
                                        Billed&nbsp;
                                        {p.billedOriginal ? (
                                            <>
                                                <span className="flex items-center mr-1 line-through opacity-60"><FaIndianRupeeSign />{p.billedOriginal}</span>
                                                <span className="flex items-center"><FaIndianRupeeSign />{p.billedNow}</span>
                                            </>
                                        ) : (
                                            <span className="flex items-center"><FaIndianRupeeSign />{p.billedNow}</span>
                                        )}
                                    </div>

                                    {/* Save line */}
                                    {p.saveText && (
                                        <div className="mt-2 text-[14.5px] md:text-[15px] font-semibold text-emerald-400">{p.saveText}</div>
                                    )}

                                    {/* Divider */}
                                    <div className="my-5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                                    {/* ▶ bullets inside each card */}
                                    <ul className="space-y-3">
                                        {perks.map((f) => (
                                            <li key={`${p.key}-${f}`} className="flex items-center gap-3 text-white/85">
                                                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/10 ring-1 ring-cyan-400/30">
                                                    <Check />
                                                </span>
                                                <span className="text-[14.5px] md:text-[15px]">{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* blue spotlights */}
            <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

            {/* local styles for shine + badge pulse */}
            <style jsx>{`
        .plan-shine::after {
          content: '';
          position: absolute;
          inset: -40%;
          transform: translateX(-120%) rotate(12deg);
          background: linear-gradient(115deg, rgba(255,255,255,0) 30%, rgba(255,255,255,.16) 50%, rgba(255,255,255,0) 70%);
          transition: transform .9s cubic-bezier(.2,.8,.2,1);
        }
        .neon-card:hover .plan-shine::after { transform: translateX(110%) rotate(12deg); }

        @keyframes pulseGlow { 0%,100%{ box-shadow: 0 0 0 0 rgba(59,130,246,.0);} 50%{ box-shadow: 0 0 0 6px rgba(59,130,246,.18);} }
        .badge-pop { animation: pulseGlow 2.4s ease-in-out infinite; }
      `}</style>
        </section>
    );
}
