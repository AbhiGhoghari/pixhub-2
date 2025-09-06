'use client';
import React, { useState } from 'react';
import Sidebar, { defaultNav } from './Sidebar';
import Header from './Header';

/**
 * PremiumLayout
 * - Renders the blue/black background
 * - Desktop sidebar + sticky header
 * - Mobile drawer
 * - Wraps page content via `children`
 *
 * Optional props:
 * - nav: override default navigation (array of {label, href, icon?})
 * - title: header breadcrumb/title (string)
 */
export default function PremiumLayout({ children, nav = defaultNav, title = 'Dashboard' }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative min-h-screen bg-[#0a0f1a]">
            <div className="pointer-events-none absolute -left-44 top-16 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-44 bottom-16 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

            <aside className="hidden md:block fixed left-0 top-0 h-full w-64">
                <Sidebar nav={nav} variant="desktop" />
            </aside>

            <Header title={title} onOpen={() => setOpen(true)} />

            {open && (
                <Sidebar nav={nav} variant="mobile" onClose={() => setOpen(false)} />
            )}

            <main className="md:ml-64">
                <div className="mx-auto max-w-7xl p-4 md:p-6">
                    {children}
                </div>
            </main>

            <style jsx>{`
        .conic-border {
          position: relative;
          border-radius: 16px;
          background:
            radial-gradient(120% 140% at 0% 0%, rgba(96,165,250,.12), rgba(96,165,250,0) 60%),
            radial-gradient(120% 140% at 100% 100%, rgba(34,211,238,.10), rgba(34,211,238,0) 60%);
        }
        .conic-border::before{
          content:'';
          position:absolute; inset:-1px; padding:2px; border-radius:inherit;
          background: conic-gradient(from 180deg at 50% 50%,
            rgba(59,130,246,.7), rgba(34,211,238,.7), rgba(59,130,246,.7));
          -webkit-mask:linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite:xor; mask-composite:exclude;
        }
        .animate-border::before{ animation: spin 7s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
        </div>
    );
}
