'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const IcUser = (p) => (<svg viewBox="0 0 24 24" width="18" height="18" {...p}><path fill="currentColor" d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-4 0-8 2-8 5v3h16v-3c0-3-4-5-8-5z" /></svg>);
const IcAccount = (p) => (<svg viewBox="0 0 24 24" width="18" height="18" {...p}><path fill="currentColor" d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm-7 8a7 7 0 0 1 14 0v2H5v-2Z" /></svg>);
const IcSubs = (p) => (<svg viewBox="0 0 24 24" width="18" height="18" {...p}><path fill="currentColor" d="M4 4h16v14H4z" /><path fill="currentColor" d="M8 2h8v3H8zM7 10h10v2H7zM7 13h7v2H7z" /></svg>);
const IcLogout = (p) => (<svg viewBox="0 0 24 24" width="18" height="18" {...p}><path fill="currentColor" d="M16 17l5-5-5-5v3H9v4h7v3z" /><path fill="currentColor" d="M3 4h8v3H6v10h5v3H3z" /></svg>);

export default function Header({ title = 'Dashboard', onOpen, user = { name: 'abhi ghoghari' } }) {
    const [open, setOpen] = useState(false);
    const btnRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        function onDocClick(e) {
            if (!open) return;
            if (
                menuRef.current && !menuRef.current.contains(e.target) &&
                btnRef.current && !btnRef.current.contains(e.target)
            ) setOpen(false);
        }
        function onKey(e) { if (e.key === 'Escape') setOpen(false); }
        document.addEventListener('mousedown', onDocClick);
        document.addEventListener('keydown', onKey);
        return () => {
            document.removeEventListener('mousedown', onDocClick);
            document.removeEventListener('keydown', onKey);
        };
    }, [open]);

    return (
        <header className="sticky top-0 z-40 md:ml-64 h-20 bg-[#0c1120]/80 backdrop-blur-xl ring-1 ring-white/10">
            <div className="relative mx-auto max-w-7xl h-full flex items-center justify-between px-4">
                {/* mobile menu */}
                <button
                    className="md:hidden text-white/85 rounded-lg ring-1 ring-white/10 bg-white/10 px-3 py-1.5"
                    onClick={onOpen}
                    aria-label="Open menu"
                >
                    ☰
                </button>

                <div className="hidden md:flex items-center gap-3 text-white/70">
                    <span className="text-sm">Premium Panel</span>
                    <span className="h-1 w-1 rounded-full bg-white/25" />
                    <span className="text-sm">{title}</span>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        ref={btnRef}
                        onClick={() => setOpen((s) => !s)}
                        aria-haspopup="menu"
                        aria-expanded={open}
                        className="flex items-center gap-2 rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/15 text-left"
                    >
                        <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 text-white ring-1 ring-white/20">
                            <IcUser />
                        </span>
                        <div className="hidden sm:block">
                            <div className="text-xs font-bold text-white leading-tight truncate max-w-[160px]">{user.name}</div>
                        </div>
                    </button>

                    {open && (
                        <>
                            <button className="fixed inset-0 z-40 cursor-default" onClick={() => setOpen(false)} aria-hidden />
                            <div
                                ref={menuRef}
                                role="menu"
                                className="
                  z-50 absolute right-0 top-14 w-64
                  conic-border border border-transparent animate-border rounded-2xl p-[2px]
                "
                            >
                                <div className="rounded-xl bg-[#121735] ring-1 ring-white/10 shadow-[0_18px_60px_rgba(0,0,0,.55)] overflow-hidden">
                                    <div className="px-4 py-3 flex items-center gap-1 border-b border-white/10">
                                        <div className="text-white font-extrabold leading-snug">{user.name.split(' ')[0]}</div>
                                        <div className="text-white font-extrabold leading-snug">{user.name.split(' ').slice(1).join(' ')}</div>
                                    </div>

                                    <nav className="p-1">
                                        <MenuItem href="/premium/account" Icon={IcAccount} label="Account" />
                                        <MenuItem href="/premium/subscription" Icon={IcSubs} label="My Subscription" />
                                        <div className="my-1 h-px bg-white/10" />
                                        <MenuItem href="/logout" Icon={IcLogout} label="Logout" danger />
                                    </nav>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

function MenuItem({ href, Icon, label, danger = false }) {
    return (
        <Link
            href={href}
            role="menuitem"
            className={`
        flex items-center gap-3 rounded-lg px-3 py-2
        text-[15px] ${danger ? 'text-red-300' : 'text-white/90'}
        hover:bg-white/5 hover:text-white transition
      `}
        >
            <span className={`
        grid h-8 w-8 place-items-center rounded-md
        ${danger ? 'bg-red-500/10 text-red-300 ring-red-400/30' : 'bg-[#0f162e] text-cyan-300 ring-white/10'}
        ring-1
      `}>
                <Icon />
            </span>
            <span className="font-medium">{label}</span>
        </Link>
    );
}
