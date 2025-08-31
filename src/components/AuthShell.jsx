'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

/**
 * Shared split layout: left photo, right glass card.
 * Prop `page` = 'signin' | 'signup' (for active tab styling)
 */
export default function AuthShell({ imageSrc = '/images/left-panel.jpg', page = 'signin', children }) {
  return (
    <section className="relative min-h-screen w-full bg-[#0a0f1a] px-4 py-8 sm:px-8">
      {/* outer aqua frame */}
      <div className="mx-auto max-w-6xl rounded-[28px] border border-cyan-500/30 bg-gradient-to-b from-cyan-500/10 via-cyan-500/5 to-transparent p-[10px] shadow-[0_0_0_1px_rgba(34,211,238,.15),0_20px_60px_rgba(0,0,0,.55)]">
        {/* inner surface */}
        <div className="relative grid overflow-hidden rounded-2xl bg-[#0d111c] ring-1 ring-white/5 lg:grid-cols-2">
          {/* LEFT : image + overlay */}
          <div className="relative hidden min-h-[560px] lg:block">
            <Image src={imageSrc} alt="Brand cover" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-between p-8">
              <div className="inline-flex items-center gap-2">
                <span className="text-white text-2xl font-extrabold tracking-tight">Template</span>
                <span className="ml-1 h-4 w-1 rounded bg-cyan-400/90 shadow-[0_0_16px_rgba(34,211,238,.9)]" />
              </div>

              <div>
                <h1 className="mb-3 text-4xl font-extrabold leading-tight text-white drop-shadow-[0_8px_40px_rgba(0,0,0,.6)]">
                  Keep it special
                </h1>
                <p className="max-w-md text-white/80">
                  Capture your personal memories in a unique way, anywhere.
                </p>
              </div>

              <div className="flex items-center gap-4 text-white/80">
                <Social icon={<TwitterIcon />} />
                <Social icon={<FacebookIcon />} />
                <Social icon={<InstagramIcon />} />
              </div>
            </div>
          </div>

          {/* RIGHT : card + children form */}
          <div className="relative isolate grid place-items-center px-6 py-10 sm:px-10">
            {/* background glows */}
            <div className="pointer-events-none absolute -top-12 right-0 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 left-8 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="w-full max-w-md">
              {/* mobile logo */}
              <div className="mb-8 flex items-center justify-center gap-2 lg:hidden">
                <span className="text-white text-2xl font-extrabold tracking-tight">Template</span>
                <span className="ml-1 h-4 w-1 rounded bg-cyan-400/90 shadow-[0_0_12px_rgba(34,211,238,.9)]" />
              </div>

              {/* glass neon card */}
              <div className="neon-card rounded-2xl p-[2px]">
                <div className="rounded-[14px] bg-[#0b111f]/70 p-6 backdrop-blur-xl ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,.55)]">
                  {/* route tabs */}
                  <div className="mb-6 grid grid-cols-2 rounded-xl bg-white/[.06] p-1 ring-1 ring-white/10">
                    <Link
                      href="/signin"
                      className={
                        'tab-link ' +
                        (page === 'signin'
                          ? 'bg-white text-[#0b1020]'
                          : 'text-white/70 hover:text-white')
                      }
                    >
                      Sign in
                    </Link>
                    <Link
                      href="/signup"
                      className={
                        'tab-link ' +
                        (page === 'signup'
                          ? 'bg-white text-[#0b1020]'
                          : 'text-white/70 hover:text-white')
                      }
                    >
                      Create account
                    </Link>
                  </div>

                  {/* socials row (optional) */}
                  <div className="mb-5 flex items-center justify-center gap-3">
                    <CircleButton ariaLabel="Continue with Facebook"><FbIcon /></CircleButton>
                    <CircleButton ariaLabel="Continue with Google"><GIcon /></CircleButton>
                    <CircleButton ariaLabel="Continue with LinkedIn"><InIcon /></CircleButton>
                  </div>

                  {children}
                </div>
              </div>

              <p className="mt-6 text-center text-xs text-white/50">
                By continuing you agree to our{' '}
                <a href="#" className="text-cyan-300 hover:underline">Terms</a> &nbsp;and&nbsp;
                <a href="#" className="text-cyan-300 hover:underline">Privacy</a>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* local styles */}
      <style jsx>{`
        .neon-card {
          position: relative;
          background: radial-gradient(120% 140% at 0% 0%, rgba(34,211,238,.25), rgba(34,211,238,0) 60%),
                      radial-gradient(120% 140% at 100% 100%, rgba(59,130,246,.22), rgba(59,130,246,0) 60%);
        }
        .neon-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 16px;
          padding: 2px;
          background: conic-gradient(from 180deg at 50% 50%,
                      rgba(34,211,238,.8), rgba(59,130,246,.75), rgba(34,211,238,.8));
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
          animation: spin 6s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .themed-input {
          width: 100%;
          border-radius: 12px;
          background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.08);
          padding: 0.85rem 0.95rem;
          color: #fff;
          outline: none;
          transition: box-shadow .25s ease, border-color .25s ease, background .25s ease;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.02), inset 0 1px 0 rgba(255,255,255,0.06);
        }
        .themed-input::placeholder { color: rgba(255,255,255,.5); }
        .themed-input:focus {
          border-color: rgba(34,211,238,.6);
          box-shadow: 0 0 0 7px rgba(34,211,238,.10), 0 0 0 1px rgba(34,211,238,.6) inset, 0 12px 28px rgba(59,130,246,.22);
          background: linear-gradient(180deg, rgba(59,130,246,.06), rgba(59,130,246,.03));
        }
        .tab-link {
          display: grid; place-items: center;
          height: 40px; border-radius: 10px;
          font-weight: 700; font-size: .9rem;
          transition: all .2s ease;
        }
      `}</style>
    </section>
  );
}

/* ---------- small bits ---------- */
function Social({ icon }) {
  return (
    <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white/90 ring-1 ring-white/20 backdrop-blur-sm">
      {icon}
    </span>
  );
}
function CircleButton({ children, ariaLabel }) {
  return (
    <button aria-label={ariaLabel} type="button" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white backdrop-blur-sm ring-1 ring-white/15 transition hover:bg-white/20">
      {children}
    </button>
  );
}

/* ---------- inline SVG icons ---------- */
const FbIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-90"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-2.9h2.5V9.5c0-2 1.2-3.1 3-3.1.9 0 1.8.16 1.8.16v2h-1c-1 0-1.3.63-1.3 1.3v1.9H17l-.4 2.9h-2.1v7A10 10 0 0 0 22 12z"/></svg>
);
const GIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-90"><path d="M21.35 11.1h-8.9v2.9h5.2a4.5 4.5 0 1 1-2-4.9l2.1-2a7.5 7.5 0 1 0 2.1 8.7 8 8 0 0 0 .5-4.7z"/></svg>
);
const InIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-90"><path d="M20.45 3H3.55A.55.55 0 0 0 3 3.55v16.9c0 .3.25.55.55.55h16.9c.3 0 .55-.25.55-.55V3.55c0-.3-.25-.55-.55-.55zM8.34 18H5.67V9.7h2.67V18zm-1.34-9.37a1.54 1.54 0 1 1 0-3.08 1.54 1.54 0 0 1 0 3.08zM18 18h-2.67v-4.48c0-1.07-.02-2.44-1.49-2.44-1.49 0-1.72 1.16-1.72 2.36V18H9.46V9.7h2.56v1.13h.04c.36-.68 1.25-1.4 2.58-1.4 2.76 0 3.27 1.82 3.27 4.2V18z"/></svg>
);
const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.6 7.5c.01.2.01.4.01.6 0 6-4.57 12.9-12.92 12.9A12.86 12.86 0 0 1 0 19.3c.34.04.69.06 1.05.06a9.1 9.1 0 0 0 5.64-1.94 4.55 4.55 0 0 1-4.25-3.16c.27.05.55.08.84.08.4 0 .8-.05 1.17-.16A4.53 4.53 0 0 1 .9 9.7v-.06c.67.37 1.43.58 2.24.61A4.53 4.53 0 0 1 1.55 5.2 12.87 12.87 0 0 0 10.9 9.8c-.2-.87.07-1.79.7-2.44a4.5 4.5 0 0 1 7.72 3.09c.6-.05 1.18-.23 1.7-.46-.2.62-.63 1.15-1.2 1.48.53-.06 1.04-.2 1.51-.4-.35.53-.8 1-1.31 1.37z"/></svg>
);
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-2.9h2.5V9.5c0-2 1.2-3.1 3-3.1.9 0 1.8.16 1.8.16v2h-1c-1 0-1.3.63-1.3 1.3v1.9H17l-.4 2.9h-2.1v7A10 10 0 0 0 22 12z"/></svg>
);
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2A3.5 3.5 0 1 0 12 17a3.5 3.5 0 0 0 0-7zm5.8-.9a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2z"/></svg>
);
