'use client';
import React from 'react';
import Link from 'next/link';
import AuthShell from '@/components/AuthShell';

export default function SignInPage() {
  return (
    <AuthShell>
      <div className="h-full flex flex-col justify-center">
        <h2 className="mb-2 text-4xl font-extrabold tracking-tight text-white">Sign in</h2>
        <p className="mb-4 text-base text-white/70">Use your email and password to continue.</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(e.currentTarget));
            console.log('SIGN IN =>', data);
            alert('Signed in (demo).');
          }}
          className="py-5 space-y-4"
        >
          <Field label="Email">
            <input
              required
              type="email"
              name="email"
              placeholder="name@example.com"
              className="themed-input"
              autoComplete="email"
            />
          </Field>

          <Field label="Password">
            <input
              required
              type="password"
              name="password"
              placeholder="••••••••"
              className="themed-input"
              autoComplete="current-password"
            />
          </Field>

          <button
            type="submit"
            className="mt-5 w-full rounded-xl bg-white py-3.5 text-sm font-semibold text-[#0b1020] shadow-[0_10px_30px_rgba(255,255,255,.08)] ring-1 ring-white/40 hover:brightness-[1.03] active:translate-y-[1px] transition"
          >
            SIGN IN
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-white/60">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-white underline">Create one</Link>
        </p>
      </div>

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
    </AuthShell>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <div className="mb-2 text-xs font-semibold tracking-wide text-white/60">{label}</div>
      {children}
    </label>
  );
}
