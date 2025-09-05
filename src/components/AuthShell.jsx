'use client';
import Image from 'next/image';
import React from 'react';

export default function AuthShell({ imageSrc = '/images/left-panel.jpg', children }) {
  return (
    <section className="relative mx-auto px-4 sm:px-6 lg:px-16 pt-32 sm:pt-48 pb-10 sm:pb-24">
      {/* same soft blue sweep as Contact */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(108deg, rgba(59,130,246,.28) 0%, rgba(12,16,32,.15) 42%, rgba(5,7,15,0) 66%),
             radial-gradient(520px 520px at 102% 22%, rgba(59,130,246,.22) 0%, rgba(59,130,246,0) 60%),
             radial-gradient(440px 520px at 102% 68%, rgba(59,130,246,.14) 0%, rgba(59,130,246,0) 64%)`,
          filter: 'blur(18px)',
          maskImage: 'radial-gradient(120% 100% at 50% 40%, #000 55%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(120% 100% at 50% 40%, #000 55%, transparent 100%)',
        }}
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {/* LEFT: image */}
        <div className="order-2 lg:order-1 relative min-h-[560px] block rounded-xl overflow-hidden ring-1 ring-white/10">
          <Image src={imageSrc} alt="Auth cover" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/30 to-transparent" />
        </div>

        {/* RIGHT: glassy form shell (NO animate-border) */}
        <div className="order-1 lg:order-2 relative">
          <div className="rounded-2xl conic-border border border-transparent animate-border bg-white/5 p-3 sm:p-4 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,.35)]">
            <div className="rounded-xl bg-[#0b111f]/70 p-4 sm:p-6 backdrop-blur-xl ring-1 ring-white/10">
              {children}
            </div>
          </div>

          {/* subtle top glow */}
          <div className="pointer-events-none absolute -top-6 left-1/2 h-12 w-3/5 -translate-x-1/2 rounded-full bg-blue-500/20 blur-2xl" />
        </div>
      </div>

      {/* SAME input style as your Contact section */}
      <style jsx>{`
        .themed-input {
          width: 100%;
          border-radius: 0.8rem;
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.03));
          border: 1px solid rgba(255,255,255,0.08);
          padding: 0.9rem 1rem;
          color: #fff;
          outline: none;
          transition: box-shadow .25s ease, border-color .25s ease, background .25s ease;
          box-shadow:
            inset 0 0 0 1px rgba(255,255,255,0.02),
            inset 0 1px 0 rgba(255,255,255,0.06);
        }
        .themed-input::placeholder { color: rgba(255,255,255,.45); }
        .themed-input:focus {
          border-color: rgba(99,102,241,.55);
          box-shadow:
            0 0 0 7px rgba(59,130,246,.10),
            0 0 0 1px rgba(99,102,241,.55) inset,
            0 12px 32px rgba(59,130,246,.18);
          background: linear-gradient(180deg, rgba(59,130,246,.06), rgba(59,130,246,.03));
        }
      `}</style>
    </section>
  );
}
