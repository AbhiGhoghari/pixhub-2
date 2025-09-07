'use client';
import React from 'react';

export default function AuthShell({
  // keep imageSrc for backward-compat; it’s ignored now
  imageSrc,
  children,
}) {
  return (
    <section className="relative h-full w-full px-4 sm:px-6 pt-40">
      {/* soft blue ambient background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(480px 380px at 15% 10%, rgba(59,130,246,.18), rgba(59,130,246,0) 60%),
            radial-gradient(520px 420px at 85% 90%, rgba(34,211,238,.16), rgba(34,211,238,0) 60%)
          `,
          filter: 'blur(18px)',
        }}
      />

      <div className="mx-auto w-full max-w-md">
        {/* card shell — conic border, no animation */}
        <div className="rounded-2xl conic-border border border-transparent animate-border p-[2px] shadow-[0_18px_60px_rgba(0,0,0,.45)]">
          <div className="rounded-[14px] bg-[#0b111f]/80 backdrop-blur-xl ring-1 ring-white/10 p-6 sm:p-7">
            {children}
          </div>
        </div>

        {/* subtle top glow */}
        <div className="pointer-events-none mx-auto mt-4 h-10 w-2/3 rounded-full bg-blue-500/20 blur-2xl" />
      </div>

      {/* consistent input style (same as contact) */}
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
