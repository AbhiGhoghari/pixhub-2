'use client';
import React from 'react';

export default function DMCA() {
  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden bg-[#0a0f1a] pt-40 pb-14">
      {/* soft blue spotlights */}
      <div className="pointer-events-none absolute -left-40 top-10 h-72 w-72 rounded-full bg-blue-500/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-16 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* HERO */}
        <div className="relative mb-10 overflow-hidden rounded-3xl conic-border border border-transparent animate-border p-[2px]">
          <div className="relative rounded-[22px] bg-[#0b111f]/70 px-6 py-10 sm:px-10 sm:py-14 backdrop-blur-xl">
            <div className="absolute -top-10 -right-10 h-44 w-44 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="absolute -bottom-10 left-10 h-36 w-36 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="text-center">
              <h1 className="text-gradient-blue font-extrabold tracking-wide drop-shadow-[0_0_28px_rgba(79,134,255,.55)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                DMCA Policy
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-white/75">
                Please review our policy below. We respond promptly to valid takedown requests.
              </p>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <main>
          <section className="scroll-mt-28">
            <div className="card relative overflow-hidden rounded-2xl ring-1 ring-white/10 conic-panel p-[2px]">
              <div className="relative rounded-[18px] bg-[#0b111f]/70 p-6 sm:p-7 backdrop-blur-xl">
                <div className="pointer-events-none absolute -top-10 right-0 h-24 w-24 rounded-full bg-blue-400/15 blur-2xl" />
                <div className="space-y-4 text-white/85 leading-relaxed">
                  {/* exact text preserved */}
                  <p>DMCA Policy</p>
                  <p>
                    We do not share details of your accounts. Several methods are available for sharing access. This process is well known to the account owner. In addition to the server and maintenance of the website, we do not charge for anything else. ‍ We do not sell or take money for access. There are only server costs involved. Please contact us if we have shared anything belonging to your property. ‍ We will take action as soon as possible. You can file your complaint on our maintained email address <a href="mailto:support@designcrate.in" className="underline decoration-white/40 hover:decoration-white">support@designcrate.in</a>. Design Crate will delete the tool or the information belonging to your property.
                  </p>
                  <p>Thank you for trusting Design Crate. Your privacy matters to us.</p>
                </div>
              </div>
            </div>
        </section>
      </main>
    </div>

    {/* styles */}
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
      .text-gradient-blue{
        background:linear-gradient(90deg,#60a5fa,#3b82f6,#6366f1);
        -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent
      }
    `}</style>
  </section>
  );
}
