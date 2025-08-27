'use client';
import React from 'react';
import ShinyButton from '../ui/ShinyButton';

const HIGHLIGHTS = [
    '24/7',
    'PhonePe',
    'Stripe',
    'Account Manager',
    'customers',
    'trust',
    'Weekly',
    'Personalised',
];
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const H_REGEX = new RegExp(`(${HIGHLIGHTS.map(esc).join('|')})`, 'gi'); // split matcher
const H_EXACT = new RegExp(`^(${HIGHLIGHTS.map(esc).join('|')})$`, 'i');  // exact check

const HighlightedText = ({ text }) =>
    text.split(H_REGEX).map((part, idx) =>
        H_EXACT.test(part) ? (
            <strong key={idx} className="text-white font-semibold">
                {part}
            </strong>
        ) : (
            <React.Fragment key={idx}>{part}</React.Fragment>
        )
    );

export default function Compare() {
    const brand = 'Pixhub';

    const left = [
        'No hidden fees. No surprises',
        'Weekly tools Addition',
        'Personalised Account Manager',
        'Provides 24/7 live support',
        'Payment Partners – PhonePe and Stripe',
        '7,000+ customers trust Pixhub',
    ];

    const right = [
        'Hidden costs',
        'Outdated tools, no progress all year',
        'Delayed support for limited time',
        'No payment gateway, delays access',
        'No reviews, no credibility',
        'No proper account management',
    ];

    const Check = () => (
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-blue-300/60 text-blue-500 shadow-[0_0_0_3px_rgba(59,130,246,.08)]">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </span>
    );

    const Cross = () => (
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-red-300/60 text-red-500 shadow-[0_0_0_3px_rgba(239,68,68,.08)]">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </span>
    );

    return (
        <section className="relative px-6">
      
            <div className='mx-auto max-w-7xl'>
                <div className="text-center mb-10">
                    <h2
                        className={`text-6xl font-bold leading-tight tracking-tight`}
                    >
                        Choose <span className="text-7xl font-extrabold text-gradient-blue tracking-wide drop-shadow-[0_0_28px_rgba(79,134,255,.55)] leading-[1.5] pr-5">{brand}</span>
                        <span className="mx-2 align-middle inline-flex items-center justify-center px-3 py-1 text-base md:text-lg font-black rounded-full bg-gradient-to-b from-blue-500 to-indigo-600 text-white">
                            VS
                        </span>
                        <span className="ps-5 text-white/85">Other Softwares</span>
                    </h2>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative rounded-3xl border border-transparent conic-border animate-border">
                        <div className="rounded-3xl bg-gradient-to-b from-[#0b1224] to-[#070b16] p-8 shadow-[0_20px_60px_rgba(0,0,0,.45)]">
                            <div className="mb-6 flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,.8)]" />
                                <p className="text-xs font-semibold tracking-[.22em] text-blue-200/80">FEATURES INCLUDED :</p>
                            </div>

                            <ul className="space-y-5">
                                {left.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check />
                                        <span className="text-base leading-relaxed text-blue-50">
                                            <HighlightedText text={item} />
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 h-1 rounded-full bg-gradient-to-r from-transparent via-blue-500/25 to-transparent" />
                        </div>
                    </div>

                    <div className="relative rounded-3xl border border-slate-800/80 bg-gradient-to-b from-[#0b0f1b] to-[#070a12] p-[1px]">
                        <div className="rounded-3xl bg-[#090d18] p-8 shadow-[0_16px_40px_rgba(0,0,0,.4)]">
                            <div className="mb-6 flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-slate-500/60" />
                                <p className="text-xs font-semibold tracking-[.22em] text-slate-300/80">FEATURES INCLUDED :</p>
                            </div>

                            <ul className="space-y-5">
                                {right.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Cross />
                                        <span className="text-base leading-relaxed text-slate-300">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 h-1 rounded-full bg-gradient-to-r from-transparent via-slate-500/15 to-transparent" />
                        </div>
                    </div>

                    <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 md:flex">
                        <div className="relative">
                            <div className="absolute inset-0 rounded-full blur-[12px] bg-gradient-to-b from-blue-400 to-indigo-600 opacity-60" />
                            <div className="relative grid h-16 w-16 place-items-center rounded-full bg-gradient-to-b from-blue-500 to-indigo-600 text-white font-black text-xl shadow-[0_8px_30px_rgba(59,130,246,.45)] ring-2 ring-blue-300/40">
                                VS
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex justify-center">
                    <ShinyButton label="Get Instant Access" />
                </div>
            </div>
        </section>
    );
}
