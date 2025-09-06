'use client';
import React from 'react';

export default function Terms() {
    const sections = [
        { id: 'overview', title: '1) Overview' },
        { id: 'ip', title: '2) Intellectual Property' },
        { id: 'acceptable-use', title: '3) Acceptable Use' },
        { id: 'accounts', title: '4) Accounts & Termination' },
        { id: 'pricing', title: '5) Pricing, Billing & Refunds' },
        { id: 'liability', title: '6) Disclaimers & Liability' },
        { id: 'changes', title: '7) Changes to These Terms' },
        { id: 'law', title: '8) Governing Law & Venue' },
        { id: 'contact', title: '9) Contact' },
    ];

    return (
        <section className="relative isolate min-h-screen w-full overflow-hidden bg-[#0a0f1a] pt-40 pb-14">
            {/* background spotlights */}
            <div className="pointer-events-none absolute -left-40 top-10 h-72 w-72 rounded-full bg-blue-500/25 blur-3xl" />
            <div className="pointer-events-none absolute -right-40 bottom-16 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                {/* HERO */}
                <div className="relative mb-10 overflow-hidden rounded-3xl conic-border border border-transparent animate-border p-[2px]">
                    <div className="relative rounded-[22px] bg-[#0b111f]/70 px-6 py-10 sm:px-10 sm:py-14 backdrop-blur-xl">
                        <div className="absolute -top-10 -right-10 h-44 w-44 rounded-full bg-blue-400/20 blur-3xl" />
                        <div className="absolute -bottom-10 left-10 h-36 w-36 rounded-full bg-cyan-400/20 blur-3xl" />

                        <div className="flex flex-col items-center text-center">
                            <h1 className="text-gradient-blue font-extrabold tracking-wide drop-shadow-[0_0_28px_rgba(79,134,255,.55)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                                Terms & Conditions
                            </h1>
                            <p className="mt-5 max-w-3xl text-sm sm:text-base leading-relaxed text-white/80">
                                These Terms & Conditions govern your use of Design Crate. By accessing or using our services,
                                you agree to be bound by these Terms. Please read them carefully.
                            </p>

                            {/* Mobile quick chips */}
                            <div className="mt-6 flex w-full flex-wrap items-center justify-center gap-2 sm:hidden">
                                {sections.map((s) => (
                                    <a
                                        key={s.id}
                                        href={`#${s.id}`}
                                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70 ring-1 ring-white/10"
                                    >
                                        {s.title.replace(/\)\s?/, ') ')}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* BODY GRID */}
                <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
                    {/* Sticky TOC (desktop) */}
                    <aside className="sticky top-24 hidden self-start lg:block">
                        <nav className="rounded-2xl conic-border border border-transparent animate-border p-[2px]">
                            <div className="rounded-[16px] bg-[#0b111f]/70 p-4 backdrop-blur-xl">
                                <p className="my-3 text-xs font-semibold uppercase tracking-[.18em] text-white/60">On this page</p>
                                <ul className="space-y-1.5">
                                    {sections.map((s) => (
                                        <li key={s.id}>
                                            <a
                                                href={`#${s.id}`}
                                                className="group flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-white/75 ring-1 ring-transparent transition hover:bg-white/5 hover:text-white"
                                            >
                                                <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400/70 group-hover:shadow-[0_0_8px_rgba(34,211,238,.6)]" />
                                                {s.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </nav>
                    </aside>

                    {/* Content */}
                    <main className="space-y-6">
                        <ArticleCard id="overview" title="1) Overview">
                            <p>
                                Welcome to Design Crate. These Terms create a binding agreement between you and Design Crate,
                                covering your use of our website, apps, and services. If you do not agree,
                                please do not use the Service.
                            </p>
                            <List
                                items={[
                                    'You must be able to form a binding contract.',
                                    'You agree to comply with these Terms and all applicable laws.',
                                    'We may update the Service or these Terms at any time as described below.',
                                ]}
                            />
                        </ArticleCard>

                        <ArticleCard id="ip" title="2) Intellectual Property">
                            <p>
                                All content on Design Crate - including but not limited to text, graphics, logos, icons, images, software, and
                                design is protected by intellectual property laws. Except where expressly permitted, you may not copy,
                                reproduce, distribute, modify, or create derivative works from any part of the Service without prior
                                written permission from the rights holder.
                            </p>
                        </ArticleCard>

                        <ArticleCard id="acceptable-use" title="3) Acceptable Use">
                            <p>To keep Design Crate safe and reliable, you agree you will not:</p>
                            <List
                                items={[
                                    'Use the Service for unlawful, harmful, or fraudulent activity.',
                                    'Interfere with or disrupt the integrity or performance of the Service.',
                                    'Attempt to gain unauthorized access to any accounts, systems, or networks.',
                                    'Reverse engineer, decompile, or disassemble any portion of the Service.',
                                ]}
                            />
                        </ArticleCard>

                        <ArticleCard id="accounts" title="4) Accounts & Termination">
                            <p>
                                You’re responsible for the accuracy of your account information and for safeguarding your credentials.
                                We may suspend or terminate access (with or without notice) for conduct that violates these Terms, harms
                                other users, or risks the integrity of the Service.
                            </p>
                        </ArticleCard>

                        <ArticleCard id="pricing" title="5) Pricing, Billing & Refunds">
                            <p>
                                Some parts of Design Crate are offered via paid plans or subscriptions. Prices, features, and limits are
                                described at the time of purchase and may change from time to time. Billing cycles and renewal terms are
                                disclosed during checkout. Unless required by law, fees are non-refundable once a cycle has begun.
                            </p>
                        </ArticleCard>

                        <ArticleCard id="liability" title="6) Disclaimers & Liability">
                            <p>
                                The Service is provided on an “as-is” and “as-available” basis without warranties of any kind, express
                                or implied. To the maximum extent permitted by law, Design Crate is not liable for any indirect, incidental,
                                special, consequential, or punitive damages, or any loss of profits, data, or good will arising from or
                                related to your use of the Service.
                            </p>
                        </ArticleCard>

                        <ArticleCard id="changes" title="7) Changes to These Terms">
                            <p>
                                We may revise these Terms to reflect changes in our Service or business. When we make changes, we’ll
                                update the “Last updated” date above. Your continued use of the Service after changes become effective
                                means you accept the revised Terms.
                            </p>
                        </ArticleCard>

                        <ArticleCard id="law" title="8) Governing Law & Venue">
                            <p>
                                These Terms are governed by applicable laws without regard to conflict of law rules. Any disputes will
                                be subject to the exclusive jurisdiction and venue of competent courts as permitted by law.
                            </p>
                        </ArticleCard>

                        <ArticleCard id="contact" title="9) Contact">
                            <p>
                                Have questions? We’re here to help. Reach us at{' '}
                                <a href="mailto:support@designcrate.com" className="text-cyan-300 underline hover:text-cyan-200">
                                    support@designcrate.com
                                </a>.
                            </p>
                        </ArticleCard>

                        {/* Back to top */}
                        <div className="pt-4">
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 conic-border border border-transparent animate-border hover:bg-white/10"
                            >
                                <ArrowUp className="h-4 w-4" />
                                Back to top
                            </a>
                        </div>
                    </main>
                </div>
            </div>

            {/* Scoped styles */}
            <style jsx>{`
        .conic-panel {
          position: relative;
          border-radius: 24px;
          background:
            radial-gradient(120% 140% at 0% 0%, rgba(96,165,250,.12), rgba(96,165,250,0) 60%),
            radial-gradient(120% 140% at 100% 100%, rgba(34,211,238,.10), rgba(34,211,238,0) 60%);
        }
        .conic-panel::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          padding: 2px;
          background: conic-gradient(from 180deg at 50% 50%,
            rgba(59,130,246,.7), rgba(34,211,238,.7), rgba(59,130,246,.7));
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
          opacity: .9;
        }
        /* highlight targeted section */
        :target .card {
          box-shadow: 0 0 0 2px rgba(59,130,246,.6), 0 0 0 8px rgba(59,130,246,.12);
        }
      `}</style>
        </section>
    );
}

/* ---------- Pieces ---------- */

function ArticleCard({ id, title, children }) {
    return (
        <section id={id} className="scroll-mt-28">
            <div className="card relative overflow-hidden rounded-2xl ring-1 ring-white/10 conic-panel p-[2px]">
                <div className="relative rounded-[18px] bg-[#0b111f]/70 p-6 sm:p-7 backdrop-blur-xl">
                    <div className="pointer-events-none absolute -top-10 right-0 h-24 w-24 rounded-full bg-blue-400/15 blur-2xl" />
                    <h3 className="mb-3 text-lg sm:text-xl font-bold text-white">{title}</h3>
                    <div className="space-y-3 text-white/85 leading-relaxed">{children}</div>
                </div>
            </div>
        </section>
    );
}

function List({ items = [] }) {
    return (
        <ul className="mt-3 space-y-2">
            {items.map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/10 ring-1 ring-cyan-400/30">
                        <CheckIcon className="h-3.5 w-3.5 text-cyan-300" />
                    </span>
                    <span>{t}</span>
                </li>
            ))}
        </ul>
    );
}

/* ---------- Inline Icons (no extra deps) ---------- */
function ShieldIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" />
            <path d="M9.5 12.5l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
function CheckIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
function ArrowUp({ className = '' }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 19V5" strokeLinecap="round" />
            <path d="M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
