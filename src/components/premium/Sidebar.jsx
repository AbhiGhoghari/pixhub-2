'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import logo from '../../../public/image/logo/full-logo.png';
import Image from 'next/image';
import Link from 'next/link';

const i = (d) => (p) => <svg viewBox="0 0 24 24" width="18" height="18" {...p}><path fill="currentColor" d={d} /></svg>;
const IcDash = i('M4 4h7v7H4zM13 4h7v4h-7zM13 10h7v10h-7zM4 13h7v7H4z');
const IcLib = i('M3 4h18v2H3zM3 9h12v2H3zM3 14h18v2H3zM3 19h12v2H3z');
const IcHelp = i('M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm.1 15.5a1.35 1.35 0 1 1 0-2.7 1.35 1.35 0 0 1 0 2.7zM11 7.9a3.1 3.1 0 0 1 5 2.4c0 1.4-.8 2.2-1.8 2.8-.7.4-1.1.7-1.1 1.4v.4h-2v-.5c0-1.5.8-2.2 1.7-2.8.7-.4 1.2-.8 1.2-1.6 0-.8-.7-1.5-1.9-1.5-1 0-1.7.5-2.1 1.4L8.4 9a4.23 4.23 0 0 1 2.6-1.1z');
const IcFix = i('M21.7 7.3l-5-5-2.4 2.4 5 5 2.4-2.4zM2 20.5V22h1.5l9.8-9.8-3.6-3.6L2 20.5z');
const IcDown = i('M5 20h14v-2H5zm0-4h14v-2H5zm7-12L5.33 12h13.34L12 4z');
const IcPlay = i('M8 5v14l11-7z');
const IcAcct = i('M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-4 0-8 2-8 5v3h16v-3c0-3-4-5-8-5z');
const IcOut = i('M10 17l1.41-1.41L9.83 14H21v-2H9.83l1.58-1.59L10 9l-4 4 4 4zM3 5h8v2H5v10h6v2H3z');

export const defaultNav = [
    { label: 'Dashboard', href: '/premium', icon: <IcDash /> },
    { label: 'Tools Library', href: '/premium/tools', icon: <IcLib /> },
    { label: 'Support', href: '/premium/support', icon: <IcHelp /> },
    { label: 'Fix a Tool', href: '/premium/fix', icon: <IcFix /> },
    { label: 'Download Extension', href: '/premium/download', icon: <IcDown /> },
    { label: 'Watch Tutorials', href: '/premium/tutorials', icon: <IcPlay /> },
    { label: 'Account', href: '/premium/account', icon: <IcAcct /> },
    { label: 'Logout', href: '/logout', icon: <IcOut />, danger: true },
];

export default function Sidebar({ nav = defaultNav, variant = 'desktop', onClose }) {
    const pathname = usePathname();

    const content = (
        <>
            <div className="h-20 px-5 flex items-center gap-2 border-b border-white/10">
                <Link href="/" className="flex items-center gap-2" aria-label="Designcrate home">
                    <Image
                        src={logo}
                        alt="Designcrate logo"
                        width={100}
                        height={100}
                        className="w-full h-11"
                        priority
                    />
                </Link>
            </div>

            <nav className="mt-5 px-3 space-y-1">
                {nav.map((m) => {
                    const active = pathname === m.href;
                    return (
                        <a
                            key={m.href}
                            href={m.href}
                            className={`group flex items-center gap-3 rounded-xl px-3 py-2 text-[15px] ring-1 ring-transparent transition
                ${m.danger ? 'text-red-300/85 hover:text-red-200' : 'text-white/80 hover:text-white'}
                ${active ? 'bg-white/7 ring-white/10' : 'hover:bg-white/5 hover:ring-white/10'}
              `}
                            onClick={onClose}
                        >
                            <span className={`grid h-8 w-8 place-items-center rounded-lg bg-[#0e1630] ring-1 ring-white/10
                ${m.danger ? 'text-red-300' : 'text-blue-300'}`}>
                                {m.icon}
                            </span>
                            <span>{m.label}</span>
                        </a>
                    );
                })}
            </nav>

            {/* promo card */}
            {/* <div className="mt-auto p-3">
                <div className="rounded-2xl conic-border border border-transparent animate-border p-[2px]">
                    <div className="rounded-xl bg-[#0b111f]/70 p-4 ring-1 ring-white/10">
                        <div className="text-sm font-semibold text-white">Explore Pixhub</div>
                        <p className="mt-1 text-xs text-white/70">Curated tools for creators.</p>
                        <a href="#" className="mt-3 inline-block rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/15 hover:bg-white/15">Open</a>
                    </div>
                </div>
            </div> */}
        </>
    );

    if (variant === 'mobile') {
        return (
            <div className="md:hidden fixed inset-0 z-50">
                <div className="absolute inset-0 bg-black/60" onClick={onClose} />
                <div className="absolute left-0 top-0 h-full w-[78%] max-w-[320px] bg-[#0c1120] ring-1 ring-white/10 flex flex-col">
                    {content}
                </div>
            </div>
        );
    }

    // desktop
    return (
        <div className="flex h-full w-full flex-col bg-[#0c1120]/90 backdrop-blur-xl ring-1 ring-white/10">
            {content}
        </div>
    );
}
