'use client';
import Link from 'next/link';
import React from 'react';

export default function LegalLinksStrip() {
    const links = [
        { href: '/contact', label: 'Contact' },
        { href: '/privacy', label: 'Privacy Policy' },
        { href: '/terms', label: 'Terms & Conditions' },
        { href: '/dmca', label: 'DMCA' },
        { href: '/refund', label: 'Refund Policy' },
    ];
    const year = new Date().getFullYear();

    return (
        <section className="relative w-full bg-[#070b14]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex flex-col items-center gap-3 py-5 sm:flex-row sm:justify-between">
                    {/* Links with responsive separators */}
                    <nav
                        aria-label="Legal"
                        className="
              flex w-full flex-col items-center
              divide-y divide-white/15
              sm:w-auto sm:flex-row sm:divide-y-0 sm:divide-x
            "
                    >
                        {links.map((l) => (
                            <span
                                key={l.href}
                                className="
                  w-full py-2 text-center
                  sm:w-auto sm:py-0 sm:px-3 sm:first:pl-0 sm:last:pr-0
                "
                            >
                                <Link
                                    href={l.href}
                                    className="text-blue-200/80 font-medium text-sm hover:text-white transition-colors"
                                >
                                    {l.label}
                                </Link>
                            </span>
                        ))}
                    </nav>

                    {/* Copyright */}
                    <p className="text-center text-[11px] sm:text-xs text-white/55 sm:text-right">
                        © {year} Design Crate. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    );
}
