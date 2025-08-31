'use client';
import React from 'react';

export default function Pricing() {
    const features = [
        'Freepik',
        'Envato',
        'Flaticon',
        'Instant Access',
        'Affiliate-program',
        'Multiple User',
        '24/7 Support',
    ];

    const plans = [
        {
            key: 'basic',
            title: '1 Month',
            subtitle: 'Great for individual person',
            price: '₹249',
            cta: 'Buy Now',
            ribbon: null,
        },
        {
            key: 'premium',
            title: '3 Months',
            subtitle: 'Great for individual person',
            price: '₹649',
            cta: 'Buy Now',
            ribbon: 'Best Offer',
        },
        {
            key: 'enterprise',
            title: '6 Months',
            subtitle: 'Great for individual person',
            price: '₹1249',
            cta: 'Buy Now',
            ribbon: null,
        },
    ];

    const Check = () => (
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    return (
        <section className="relative w-full pt-8 pb-12 lg:pb-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-8 sm:mb-10">
                    <div className="text-xs sm:text-sm font-semibold tracking-[.25em] text-indigo-300/70">PRICING</div>
                    <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                        Pricing plans for everyone
                    </h2>

                    {/* Toggle (visual only) */}
                    <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/5 p-1 ring-1 ring-white/10">
                        <button className="px-4 py-1.5 rounded-full text-sm font-semibold text-white/80 hover:text-white">Monthly</button>
                        <button className="px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-sm font-semibold shadow-[0_6px_20px_rgba(79,70,229,.35)] ring-1 ring-indigo-400/30">
                            Yearly
                            <span className="ml-1 rounded-md bg-emerald-500/20 px-1.5 py-0.5 text-emerald-300 text-[10px] font-bold">-10%</span>
                        </button>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {plans.map((p, i) => {
                        const isLast = i === plans.length - 1;
                        return (
                            <div key={p.key} className={`relative ${isLast ? 'sm:col-span-2 sm:justify-self-center sm:w-sm lg:w-full lg:col-span-1' : ''}`}>
                                {p.ribbon && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                                        <div className="rounded-md bg-amber-400 px-3 py-1 text-[11px] font-bold text-black shadow-[0_6px_20px_rgba(251,191,36,.35)] ring-1 ring-amber-300/60">
                                            {p.ribbon}
                                        </div>
                                    </div>
                                )}

                                <div className="relative cut-corner rounded-2xl border-2 border-transparent conic-border animate-border">
                                    <div
                                        className={`relative rounded-2xl cut-corner p-7 h-full ring-1 ring-white/5 shadow-[0_16px_40px_rgba(0,0,0,.35)] ${p.ribbon ? 'bg-[#0e1530]' : 'bg-[#0c1024]'}`}
                                    >
                                        <div className="space-y-1">
                                            <div className={`${p.ribbon ? 'text-emerald-300' : 'text-indigo-300'} font-semibold text-[15px]`}>
                                                {p.title}
                                            </div>
                                            <div className="text-[13px] text-white/70">{p.subtitle}</div>
                                            <div className="mt-3 text-5xl md:text-6xl font-extrabold text-white">
                                                {p.price}
                                                <span className="ml-1 text-[12px] font-medium text-white/60">/ Plan</span>
                                            </div>
                                        </div>

                                        <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                                        <div>
                                            <div className="text-[15px] font-semibold text-white/85 mb-3">Features</div>
                                            <ul className="space-y-3.5">
                                                {features.map((f) => (
                                                    <li key={f} className="flex items-center gap-3 text-[14.5px] text-white/85">
                                                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/10 ring-1 ring-indigo-400/30">
                                                            <svg viewBox="0 0 24 24" className="h-4 w-4 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2">
                                                                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </span>
                                                        <span>{f}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mt-7">
                                            <button
                                                className={`w-full rounded-xl py-3.5 text-sm font-semibold ring-1 ring-white/10 transition
                ${p.ribbon
                                                        ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-[0_10px_30px_rgba(124,58,237,.35)]'
                                                        : 'bg-white/5 text-white hover:bg-white/10'}`}
                                            >
                                                {p.cta}
                                            </button>
                                            <div className="pt-5 text-center text-sm text-white/55">Limited Offer</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* notch + conic border helpers (only add once globally; inline here for completeness) */}
            <style jsx global>{`
        .cut-corner {
          --cc: 22px;
          clip-path: polygon(0 0, calc(100% - var(--cc)) 0, 100% var(--cc), 100% 100%, 0 100%);
        }
      `}</style>
        </section>
    );
}
