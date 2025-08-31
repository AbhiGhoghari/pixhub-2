'use client';
import React from 'react';
import Link from 'next/link';
import AuthShell from '@/components/AuthShell';

export default function SignInPage() {
  return (
    <AuthShell page="signin" imageSrc="/images/left-panel.jpg">
      <p className="mb-4 text-center text-xs text-white/50">or use your email account</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const data = Object.fromEntries(new FormData(e.currentTarget));
          console.log('SIGN IN =>', data);
          alert('Signed in (demo).');
        }}
        className="space-y-4"
      >
        <label className="block">
          <div className="mb-2 text-xs font-semibold tracking-wide text-white/60">Email</div>
          <input name="email" type="email" placeholder="name@example.com" required className="themed-input" autoComplete="email" />
        </label>

        <label className="block">
          <div className="mb-2 text-xs font-semibold tracking-wide text-white/60">Password</div>
          <input name="password" type="password" placeholder="••••••••" required className="themed-input" autoComplete="current-password" />
        </label>

        <div className="mb-1 flex items-center justify-between text-xs">
          <label className="inline-flex cursor-pointer items-center gap-2 text-white/70">
            <input type="checkbox" name="remember" className="h-4 w-4 rounded bg-white/10 accent-cyan-400" />
            Remember me
          </label>
          <a href="#" className="text-cyan-300 hover:underline">Forgot password?</a>
        </div>

        <button type="submit" className="w-full rounded-xl bg-cyan-400 py-3 font-semibold text-[#0b1020] shadow-[0_10px_30px_rgba(34,211,238,.25)] ring-1 ring-cyan-200/50 hover:brightness-105 active:translate-y-[1px]">
          SIGN IN
        </button>
      </form>

      <p className="mt-4 text-center text-xs text-white/60">
        Don&apos;t have an account?{' '}
        <Link href="/signup" className="text-cyan-300 hover:underline">Create one</Link>
      </p>
    </AuthShell>
  );
}
