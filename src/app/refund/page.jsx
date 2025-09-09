'use client';
import React from 'react';

export default function Refund() {
    const sections = [
        { id: 'intro', title: '1) Introduction' },

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
                                Refund Policy
                            </h1>
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
                        <ArticleCard id="intro" >
                            <p>
                               Thank you for purchasing our services at Designcrate. We strive to ensure your satisfaction with every purchase made on our website. We offer a full money-back guarantee, subject to the following terms and conditions:
                            </p>
                            <br />
                            <p>
                                <strong>1.</strong> All purchases made on this website are final. No refunds will be provided for any plans or services under any circumstances. Please review your order carefully before completing the purchase.
                            </p>
                            <br />
                            <p>
                                <strong>2.</strong> Refunds are not available for annual plans, and the same conditions mentioned above apply.
                            </p>
                            <br />
                            <p>
                                <strong>3.</strong> No refunds will be accepted for any reason (i.e. Purchased accidentally, mind changed, was unaware of shared account service etc).
                            </p>
                            <br />
                            <p>
                                <strong>4.</strong> Before requesting a refund, please provide a valid reason to assist us in improving our products and services.
                            </p>
                            <br />
                            <p>
                                <strong>5.</strong> Tool credits are limited as per the tool's system, beyond our control. All purchases are final and non-refundable.
                            </p>
                            <br />
                            <p>
                                <strong>6.</strong> AI-related features vary by plan. Ensure all queries are cleared with support before payment, as refunds will not be provided in these cases.
                            </p>
                            <br />
                            <p>
                                Should you have any further inquiries or wish to request a refund, please contact us at <strong>teamdesigncrate@gmail.com</strong> or raise a ticket on your profile dashboard.
                            </p>
                            <br />
                            <p>
                                Thank you for choosing Designcrate. We appreciate your understanding and cooperation.
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
