'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';
import secure from '../../../public/image/image/secure.jpeg';

export default function PurchaseModal({ open, onClose, plan }) {
    const jwt = 'ahdsfbdjf...';
    const isLoggedIn = Boolean(jwt);

    useEffect(() => {
        if (!open) return;
        const prev = document.documentElement.style.overflow;
        document.documentElement.style.overflow = 'hidden';
        return () => { document.documentElement.style.overflow = prev; };
    }, [open]);

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-[120] grid place-items-center"
            aria-modal="true"
            role="dialog"
        >
            {/* dim backdrop */}
            <button
                aria-label="Close"
                onClick={onClose}
                className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
            />

            {/* shell */}
            <div className="relative w-[92vw] max-w-md origin-center scale-100 animate-[pop_.22s_ease]">
                <div className="rounded-2xl conic-border border border-transparent animate-border p-[2px] shadow-[0_20px_80px_rgba(0,0,0,.55)]">
                    <div className="rounded-[16px] bg-[#0b111f]/90 ring-1 ring-white/10 backdrop-blur-xl">
                        {/* header */}
                        <div className="relative flex items-center justify-between px-5 py-4">
                            <div className="flex items-center gap-3">
                                <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.9)]" />
                                <div className="text-white font-bold">
                                    {isLoggedIn ? 'Renew / Upgrade' : 'Sign Up'}
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="grid h-8 w-8 place-items-center rounded-full bg-white/5 text-white/80 ring-1 ring-white/10 hover:bg-white/10 cursor-pointer"
                            >
                                ×
                            </button>
                        </div>

                        {/* plan pill */}
                        <div className="px-5">
                            <div className="inline-flex items-center gap-2 rounded-full bg-white/[.06] px-3 py-1 text-xs text-white/80 ring-1 ring-white/10">
                                <span className="font-semibold">{plan?.title ?? 'Selected Plan'}</span>
                                <span className="h-1 w-1 rounded-full bg-white/30" />
                                <span className="font-bold text-cyan-300">₹{plan?.price ?? '—'}</span>
                                <span className="text-white/50">per month</span>
                            </div>
                        </div>

                        {/* form */}
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const data = Object.fromEntries(new FormData(e.currentTarget));
                                console.log('CHECKOUT DATA =>', data, { plan });
                                alert('Proceeding to payment (demo).');
                            }}
                            className="px-5 pb-4 pt-3 space-y-4"
                        >
                            {!isLoggedIn && (
                                <>
                                    <Field label="Username">
                                        <input name="username" required placeholder="Create a username" className="themed-input" />
                                    </Field>

                                    <Field label="Email">
                                        <input name="email" type="email" required placeholder="you@domain.com" className="themed-input" />
                                    </Field>

                                    <Field label="Password">
                                        <div className="relative">
                                            <input name="password" type="password" required placeholder="Create a strong password" className="themed-input pr-10" />
                                            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/40">•••</span>
                                        </div>
                                    </Field>
                                </>
                            )}

                            {isLoggedIn && (
                                <Field label="Confirm Email">
                                    <input name="email" type="email" required placeholder="you@domain.com" className="themed-input" />
                                </Field>
                            )}

                            {/* bottom bar */}
                            <div className="mt-2 flex items-center justify-between gap-3 rounded-xl bg-white/[.04] px-4 py-3 ring-1 ring-white/10">
                                <div className="text-white">
                                    <div className="text-xs text-white/60">You pay now</div>
                                    <div className="text-2xl font-extrabold tracking-tight">₹{plan?.billedNow}</div>
                                </div>

                                <button
                                    type="submit"
                                    className="rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-5 py-3 text-sm font-bold text-white ring-1 ring-indigo-400/30 shadow-[0_10px_30px_rgba(59,130,246,.35)] hover:brightness-110 active:translate-y-[1px] transition"
                                >
                                    Proceed to Pay
                                </button>
                            </div>

                            {/* trust row */}
                            <div className="space-y-3 pt-2">
                                <div className="flex items-center gap-2 text-[11px] text-white/60">
                                    <LockIcon className="h-4 w-4 text-cyan-300" />
                                    256-bit SSL • UPI / Cards • Instant Activation
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image
                                        src={secure}
                                        alt='secure'
                                        height={100}
                                        width={200}
                                    />
                                </div>
                                <div className="text-[10px] text-white/45">
                                    Payments are securely processed. By continuing you agree to our Terms & Privacy.
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* soft base glow */}
                <div className="pointer-events-none mx-auto mt-3 h-10 w-2/3 rounded-full bg-blue-500/20 blur-2xl" />
            </div>

            <style jsx>{`
        @keyframes pop { from { transform: scale(.96); opacity: 0 } to { transform: scale(1); opacity: 1 } }

        .themed-input {
          width: 100%;
          border-radius: 12px;
          background: linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,.03));
          border: 1px solid rgba(255,255,255,.08);
          padding: .9rem 1rem;
          color: #fff;
          outline: none;
          transition: box-shadow .25s ease, border-color .25s ease, background .25s ease;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,.02), inset 0 1px 0 rgba(255,255,255,.06);
        }
        .themed-input::placeholder { color: rgba(255,255,255,.45); }
        .themed-input:focus {
          border-color: rgba(99,102,241,.55);
          box-shadow: 0 0 0 7px rgba(59,130,246,.10), 0 0 0 1px rgba(99,102,241,.55) inset, 0 12px 32px rgba(59,130,246,.18);
          background: linear-gradient(180deg, rgba(59,130,246,.06), rgba(59,130,246,.03));
        }
      `}</style>
        </div>
    );
}

/* ===== small bits ===== */
function Field({ label, children }) {
    return (
        <label className="block">
            <div className="mb-2 text-xs font-semibold tracking-wide text-white/60">{label}</div>
            {children}
        </label>
    );
}
function Badge({ children }) {
    return (
        <span className="inline-flex items-center rounded-md bg-white/8 px-2 py-1 text-[11px] font-semibold text-white/80 ring-1 ring-white/10">
            {children}
        </span>
    );
}
function LockIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="4" y="10" width="16" height="10" rx="2" className="stroke-current" />
            <path d="M8 10V8a4 4 0 1 1 8 0v2" className="stroke-current" />
        </svg>
    );
}
