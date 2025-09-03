'use client';
import React from 'react';
import { FaIndianRupeeSign } from "react-icons/fa6";

export default function Pricing() {
    const plans = [
        {
            key: 'monthly',
            title: 'Monthly Plan',
            price: '399',
            per: '',                // no /month for monthly
            billedNow: '399',
            billedOriginal: null,
            saveText: null,
            badge: null,
            selected: true,         // green outline like your screenshot
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
            badge: { label: 'Most Popular', color: 'bg-pink-500 text-black' },
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
        'Cancel Anytime', // the 5th attractive line you asked for
    ];

    const Check = () => (
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    return (
        <section className="relative w-full pt-10 pb-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                    Choose Your Plan
                </h2>

                {/* Cards */}
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {plans.map((p, i) => (
                        <div key={p.key} className={`relative ${i === 3 ? 'lg:col-start-2' : ''}`}>
                            {/* badge */}
                            {p.badge && (
                                <div className="absolute right-4 top-4 z-20">
                                    <div className={`rounded-full px-3 py-1 text-[11px] font-bold ${p.badge.color}`}>
                                        {p.badge.label}
                                    </div>
                                </div>
                            )}

                            {/* Shell */}
                            <div className={`relative rounded-2xl neon-card p-[2px] conic-border border border-transparent animate-border transition-transform duration-500 ${p.selected ? 'ring-2 ring-emerald-500/70 shadow-[0_0_0_3px_rgba(16,185,129,.15)]' : 'ring-1 ring-white/10'}`}>
                                <div className={`rounded-[16px] bg-[#121627] p-6 md:p-7 shadow-[0_14px_40px_rgba(0,0,0,.45)]`}>
                                    {/* Title */}
                                    <div className="text-white font-semibold text-xl leading-tight">
                                        {p.title}
                                    </div>

                                    {/* Price (exact style like screenshot: purple, /month on same line) */}
                                    <div className="mt-2 flex items-center">
                                        <span className="flex items-center text-[34px] md:text-[40px] font-extrabold leading-none text-[#9b5cff]">
                                            <FaIndianRupeeSign />{p.price}
                                        </span>
                                        {p.per && (
                                            <span className="ml-1 align-[0.15em] text-[#9b5cff] text-2xl font-extrabold">
                                                {p.per}
                                            </span>
                                        )}
                                    </div>

                                    {/* Billed line */}
                                    <div className="mt-2 flex items-center text-lg text-white/75">
                                        Billed &nbsp;
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
                                        <div className="mt-2 text-lg font-semibold text-emerald-400">{p.saveText}</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Perks (responsive) */}
                <div className="pt-10 mx-auto max-w-6xl">
                    <div
                        className="
      grid gap-y-4 gap-x-8
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-4
      xl:grid-cols-5
    "
                        role="list"
                    >
                        {perks.map((line) => (
                            <div key={line} role="listitem" className="flex items-center gap-3 text-white/90">
                                <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-400/30">
                                    <Check />
                                </span>
                                <span className="text-sm sm:text-base md:text-lg">{line}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* blue spotlights */}
            <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        </section>
    );
}
