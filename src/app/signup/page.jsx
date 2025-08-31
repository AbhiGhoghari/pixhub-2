'use client';
import React from 'react';
import Link from 'next/link';
import AuthShell from '@/components/AuthShell';

export default function SignUpPage() {
  return (
    <AuthShell page="signup" imageSrc="/images/left-panel.jpg">
      <p className="mb-4 text-center text-xs text-white/50">or sign up with your email</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const data = Object.fromEntries(new FormData(e.currentTarget));
          console.log('SIGN UP =>', data);
          alert('Account created (demo).');
        }}
        className="space-y-4"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <div className="mb-2 text-xs font-semibold tracking-wide text-white/60">First name</div>
            <input name="firstName" placeholder="Jane" required className="themed-input" autoComplete="given-name" />
          </label>
          <label className="block">
            <div className="mb-2 text-xs font-semibold tracking-wide text-white/60">Last name</div>
            <input name="lastName" placeholder="Doe" required className="themed-input" autoComplete="family-name" />
          </label>
        </div>

        <label className="block">
          <div className="mb-2 text-xs font-semibold tracking-wide text-white/60">Email</div>
          <input name="email" type="email" placeholder="name@example.com" required className="themed-input" autoComplete="email" />
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <div className="mb-2 text-xs font-semibold tracking-wide text-white/60">Password</div>
            <input name="password" type="password" placeholder="Create a password" required className="themed-input" autoComplete="new-password" />
          </label>
          <label className="block">
            <div className="mb-2 text-xs font-semibold tracking-wide text-white/60">Confirm password</div>
            <input name="confirm" type="password" placeholder="Repeat password" required className="themed-input" autoComplete="new-password" />
          </label>
        </div>

        <label className="mt-1 inline-flex cursor-pointer items-start gap-2 text-xs text-white/70">
          <input type="checkbox" required className="mt-0.5 h-4 w-4 rounded bg-white/10 accent-cyan-400" />
          I agree to the <a className="ml-1 text-cyan-300 hover:underline" href="#">Terms of Service</a> and <a className="ml-1 text-cyan-300 hover:underline" href="#">Privacy Policy</a>.
        </label>

        <button type="submit" className="w-full rounded-xl bg-white py-3 font-semibold text-[#0b1020] shadow-[0_10px_30px_rgba(255,255,255,.15)] ring-1 ring-white/50 hover:brightness-105 active:translate-y-[1px]">
          CREATE ACCOUNT
        </button>
      </form>

      <p className="mt-4 text-center text-xs text-white/60">
        Already have an account?{' '}
        <Link href="/signin" className="text-cyan-300 hover:underline">Sign in</Link>
      </p>
    </AuthShell>
  );
}
