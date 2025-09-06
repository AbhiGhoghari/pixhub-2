'use client';
import Link from 'next/link';
import React from 'react';

export default function LegalLinksStrip() {
    const links = [
        { href: '/contact', label: 'Contact' },
        { href: '/privacy', label: 'Privacy Policy' },
        { href: '/terms', label: 'Terms & Conditions' },
        { href: '/dmca', label: 'DMCA' },
    ];

    return (
        <section className="relative w-full bg-[#070b14]">
            <div className="relative flex justify-between items-center w-full px-6 py-3">
                {/* Links with separators */}
                <nav
                    aria-label="Legal"
                    className="flex flex-wrap items-center justify-center gap-0 divide-x divide-white/15"
                >
                    {links.map((l) => (
                        <span key={l.href} className="px-3 first:pl-0 last:pr-0">
                            <Link
                                href={l.href}
                                className="text-blue-200/80 font-medium text-sm hover:text-white transition-colors"
                            >
                                {l.label}
                            </Link>
                        </span>
                    ))}
                </nav>

                <p className="mt-5 text-center text-xs text-white/55">
                    © {new Date().getFullYear()} Design Crate. All rights reserved.
                </p>
            </div>
        </section>
    );
}
