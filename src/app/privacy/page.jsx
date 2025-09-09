'use client';
import React from 'react';

export default function Privacy() {
    const sections = [
        { id: 'intro', title: '1) Introduction' },
        { id: 'collect', title: '2) Information We Collect' },
        { id: 'use', title: '3) How We Use Your Information' },
        { id: 'share', title: '4) Sharing Your Information' },
        { id: 'security', title: '5) Data Security' },
        { id: 'rights', title: '6) Your Rights' },
        { id: 'changes', title: '7) Changes to This Policy' },
        { id: 'cookies', title: '8) Cookies and Tracking Technologies' },
        { id: 'business', title: '9) Business Name' },
        { id: 'contact', title: '10) Contact Us' },
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
                                Privacy Policy
                            </h1>

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
                        <ArticleCard id="intro" title="1) Introduction">
                            <p>
                                Welcome to Design Crate. Your privacy is critically important to us. This Privacy Policy explains what personal information we collect, how we use it, and your choices regarding your data.
                            </p>
                        </ArticleCard>

                        <ArticleCard id="collect" title="2) Information We Collect">
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Personal Information: Name, email address, and payment details for subscriptions.</li>
                                <li>Usage Data: Information about your visits to our site, such as pages viewed, IP address, and browser type.</li>
                            </ul>
                        </ArticleCard>

                        <ArticleCard id="use" title="3) How We Use Your Information">
                            <p>We use your data to:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Provide and improve our services.</li>
                                <li>Process payments and manage subscriptions.</li>
                                <li>Communicate updates, offers, and service notifications.</li>
                            </ul>
                        </ArticleCard>

                        <ArticleCard id="share" title="4) Sharing Your Information">
                            <p>
                                We do not sell or rent your data. We may share information with trusted third-party services for payment processing, analytics, or when required by law.
                            </p>
                        </ArticleCard>

                        <ArticleCard id="security" title="5) Data Security">
                            <p>
                                We use industry-standard security measures to protect your information. However, no method of transmission over the internet is entirely secure.
                            </p>
                        </ArticleCard>

                        <ArticleCard id="rights" title="6) Your Rights">
                            <p>
                                You have the right to access, correct, or delete your personal data. Contact us at support@designcrate.in to exercise these rights.
                            </p>
                        </ArticleCard>

                        <ArticleCard id="changes" title="7) Changes to This Policy">
                            <p>
                                We may update this Privacy Policy. Please check this page periodically for changes.
                            </p>
                        </ArticleCard>

                        <ArticleCard id="cookies" title="8) Cookies and Tracking Technologies">
                            <p>We respect your privacy and are committed to providing a user-friendly experience. Our website/application does not use cookies to track, store, or manage user data.</p>
                        </ArticleCard>
                        <ArticleCard id="business" title="9) Business Name">
                            <p>This website is managed by harjibhai S maniya</p>
                        </ArticleCard>
                        <ArticleCard id="contact" title="10) Contact Us">
                            <p>
                                If you have questions or concerns about this Privacy Policy, contact us at Handled By support@designcrate.in.
                            </p>
                            <p>Thank you for trusting Design Crate. Your privacy matters to us.</p>
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

            {/* Scoped styles (same look as your Terms file) */}
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
        .text-gradient-blue{
          background:linear-gradient(90deg,#60a5fa,#3b82f6,#6366f1);
          -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent
        }
      `}</style>
        </section>
    );
}

/* ---------- Pieces (reused pattern from your Terms) ---------- */
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

function ArrowUp({ className = '' }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 19V5" strokeLinecap="round" />
            <path d="M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
