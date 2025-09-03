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
  'Transparent',
  'Global',
  'Unlimited',
  'Support',
];
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const H_REGEX = new RegExp(`(${HIGHLIGHTS.map(esc).join('|')})`, 'gi');
const H_EXACT = new RegExp(`^(${HIGHLIGHTS.map(esc).join('|')})$`, 'i');

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
  const brand = 'DesignCrate';

  const left = [
    'Transparent pricing — No hidden fees, no surprises',
    'Weekly addition of premium tools for designers, students & businesses',
    'Dedicated Account Manager for personalised support',
    'Provides 24/7 live chat & email support',
    'Trusted Payment Partners – PhonePe, Stripe & UPI',
    '10,000+ global customers trust DesignCrate',
  ];

  const right = [
    'Hidden fees & confusing billing',
    'Stale tools with no fresh updates',
    'Limited support, long response times',
    'Unreliable payment gateways & delays',
    'No community, no credibility',
    'No account management or customer care',
  ];

  const Check = () => (
    <span
      className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-blue-300/60 text-blue-500 shadow-[0_0_0_3px_rgba(59,130,246,.08)]"
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );

  const Cross = () => (
    <span
      className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-red-300/60 text-red-500 shadow-[0_0_0_3px_rgba(239,68,68,.08)]"
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );

  const MobileVS = () => (
    <div className="md:hidden my-6 flex items-center gap-3" aria-hidden="true">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <span className="rounded-full px-3 py-1 text-xs font-black bg-gradient-to-b from-blue-500 to-indigo-600 text-white shadow-[0_8px_24px_rgba(59,130,246,.35)]">
        VS
      </span>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </div>
  );

  const Badge = ({ children, tone = 'blue' }) => (
    <span
      className={
        tone === 'blue'
          ? 'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold bg-gradient-to-b from-blue-500 to-indigo-600 text-white shadow-[0_8px_24px_rgba(59,130,246,.35)] ring-1 ring-blue-400/30'
          : 'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold bg-slate-700/40 text-slate-200 ring-1 ring-slate-500/30'
      }
    >
      {children}
    </span>
  );

  return (
    <section className="relative px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center pb-8 sm:pb-14">
          <h2 className="text-balance font-bold tracking-tight leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Choose{' '}
            <span className="inline-block align-baseline font-extrabold text-gradient-blue drop-shadow-[0_0_28px_rgba(79,134,255,.55)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl pr-2 pb-2">
              {brand}
            </span>
            <span className="mx-1 inline-flex items-center justify-center rounded-full bg-gradient-to-b from-blue-500 to-indigo-600 text-white px-2.5 py-0.5 font-black shadow-[0_8px_24px_rgba(59,130,246,.35)] text-sm sm:text-base md:text-lg align-middle">
              VS
            </span>
            <span className="pl-1 text-white/85">Other Softwares</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* DesignCrate card */}
          <div
            role="region"
            aria-label="DesignCrate features"
            className="relative rounded-3xl border border-transparent conic-border animate-border h-full"
          >
            <div className="rounded-3xl bg-gradient-to-b from-[#0b1224] to-[#070b16] p-6 sm:p-8 lg:p-10 h-full shadow-[0_20px_60px_rgba(0,0,0,.45)]">
              <div className="mb-4 flex items-center justify-between">
                <Badge tone="blue">DesignCrate</Badge>
              </div>

              <div className="mb-5 sm:mb-6 mt-6 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,.8)]" />
                <p className="text-[10px] sm:text-xs font-semibold tracking-[.22em] text-blue-200/80">FEATURES INCLUDED :</p>
              </div>

              <ul className="pt-3 space-y-4 sm:space-y-5">
                {left.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check />
                    <span className="text-sm sm:text-base leading-relaxed text-blue-50">
                      <HighlightedText text={item} />
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 sm:mt-8 h-1 rounded-full bg-gradient-to-r from-transparent via-blue-500/25 to-transparent" />
            </div>
          </div>

          {/* mobile-only VS separator */}
          <MobileVS />

          {/* Others card */}
          <div
            role="region"
            aria-label="Other softwares features"
            className="relative rounded-3xl border border-slate-800/80 bg-gradient-to-b from-[#0b0f1b] to-[#070a12] p-[1px] h-full"
          >
            <div className="rounded-3xl bg-[#090d18] p-6 sm:p-8 lg:p-10 h-full shadow-[0_16px_40px_rgba(0,0,0,.4)]">
              <div className="mb-4 flex items-center justify-between">
                <Badge tone="slate">Others</Badge>
              </div>

              <div className="mb-5 sm:mb-6 mt-6 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-slate-500/60" />
                <p className="text-[10px] sm:text-xs font-semibold tracking-[.22em] text-slate-300/80">FEATURES INCLUDED :</p>
              </div>

              <ul className="pt-3 space-y-4 sm:space-y-5">
                {right.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Cross />
                    <span className="text-sm sm:text-base leading-relaxed text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 sm:mt-8 h-1 rounded-full bg-gradient-to-r from-transparent via-slate-500/15 to-transparent" />
            </div>
          </div>

          {/* floating VS bubble for md+ */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 md:flex"
            aria-hidden="true"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-[12px] bg-gradient-to-b from-blue-400 to-indigo-600 opacity-60" />
              <div className="relative grid h-14 w-14 md:h-16 md:w-16 place-items-center rounded-full bg-gradient-to-b from-blue-500 to-indigo-600 text-white font-black text-lg md:text-xl shadow-[0_8px_30px_rgba(59,130,246,.45)] ring-2 ring-blue-300/40">
                VS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
