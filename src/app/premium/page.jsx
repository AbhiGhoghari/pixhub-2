'use client';
import React from 'react';
import Link from 'next/link';
import {
    FiGrid,
    FiList,
    FiUser,
    FiDownload,
    FiLifeBuoy,
    FiBell,
    FiHelpCircle,
    FiTool,
} from 'react-icons/fi';
import PremiumLayout from '@/components/premium/PremiumLayout';

export default function PremiumDashboard({ name = 'Abhi Ghoghari' }) {
    const cards = [
        { href: '/premium/tools', label: 'Tools Library', Icon: FiGrid },
        { href: '/premium/subscription', label: 'My Subscription', Icon: FiList },
        { href: '/premium/account', label: 'Account', Icon: FiUser },
        { href: '/premium/download', label: 'Download Extension', Icon: FiDownload },
        { href: '/premium/support', label: 'Support', Icon: FiLifeBuoy },
        { href: '/premium/announcements', label: 'Announcements', Icon: FiBell },
        { href: '/premium/faqs', label: 'FAQs', Icon: FiHelpCircle },
        { href: '/premium/fix', label: 'Fix a Tool', Icon: FiTool },
    ];

    return (
        <PremiumLayout title="Dashboard">
            <section>
                <div className="relative rounded-3xl bg-[#151a2a]/85 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,.45)] p-4 sm:p-6 lg:p-8">

                    <div className="pointer-events-none absolute -top-10 left-8 h-24 w-24 rounded-full bg-blue-500/20 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-10 right-10 h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl" />

                    <h1 className="mb-6 sm:mb-8 text-center text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                        Hey, {name}! <span className="align-[-2px]">👋</span>
                    </h1>

                    <div className="mx-auto max-w-6xl grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {cards.map(({ href, label, Icon }) => (
                            <Link key={href} href={href} className="group block">
                                <div className="conic-border border border-transparent animate-border rounded-2xl p-[2px] h-full">

                                    <div className="tile relative overflow-hidden rounded-[16px] bg-gradient-to-br from-white/[.04] to-white/[.02] ring-1 ring-white/10 shadow-[0_12px_40px_rgba(0,0,0,.35)] px-6 py-7 sm:px-7 sm:py-8 transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:-translate-x-0.5 h-full">

                                        <span className="tile-shine pointer-events-none absolute inset-0 rounded-[16px]" />

                                        <div className="flex flex-col items-center gap-3">
                                            <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#0f162e] ring-1 ring-white/10 text-cyan-300 shadow-[0_10px_30px_rgba(34,211,238,.15)]">
                                                <Icon size={22} />
                                            </span>

                                            <p className="text-white text-base sm:text-lg font-semibold text-center">
                                                {label}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <style jsx>{`
        .tile-shine::after{
          content:'';
          position:absolute; inset:-40%;
          transform: translateX(-120%) rotate(12deg);
          background: linear-gradient(115deg,
            rgba(255,255,255,0) 30%,
            rgba(255,255,255,.12) 50%,
            rgba(255,255,255,0) 70%);
          transition: transform .9s cubic-bezier(.2,.8,.2,1);
        }
        .tile:hover .tile-shine::after{ transform: translateX(110%) rotate(12deg); }
      `}</style>
            </section>
        </PremiumLayout>
    );
}
