'use client';
import React from 'react';

export default function ContactSection() {
  return (
    <div
      className="relative mx-auto px-16 pt-50 pb-16"
    >
      {/* right-side soft blue sweep (scoped to this section only) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            `linear-gradient(108deg, rgba(59,130,246,.28) 0%, rgba(12,16,32,.15) 42%, rgba(5,7,15,0) 66%),
             radial-gradient(520px 520px at 102% 22%, rgba(59,130,246,.22) 0%, rgba(59,130,246,0) 60%),
             radial-gradient(440px 520px at 102% 68%, rgba(59,130,246,.14) 0%, rgba(59,130,246,0) 64%)`,
          filter: 'blur(18px)',
          maskImage:
            'radial-gradient(120% 100% at 50% 40%, #000 55%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(120% 100% at 50% 40%, #000 55%, transparent 100%)',
        }}
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {/* LEFT: intro + quick contact cards */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80 ring-1 ring-white/10">
            <span className="inline-block h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,.9)]" />
            Contact
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_0_24px_rgba(59,130,246,.25)]">
            Get in touch
          </h2>

          <p className="max-w-xl text-sm leading-relaxed text-white/70">
            Have questions or need help? Reach out and we’ll get back fast.
            We keep things simple, secure, and crystal clear.
          </p>

          <div className="space-y-4">
            <ContactCard
              icon={<MailIcon />}
              title="Email us"
              subtitle="support@pixhub.in"
            />
            <ContactCard
              icon={<PhoneIcon />}
              title="Call us"
              subtitle="+91 90000 00000"
            />
            <ContactCard
              icon={<PinIcon />}
              title="Our location"
              subtitle="Mumbai, MH, India"
            />
          </div>
        </div>

        {/* RIGHT: glassy form */}
        <div className="relative">
          <div className="rounded-2xl conic-border border border-transparent animate-border transition-transform duration-800 bg-white/5 p-3 sm:p-4 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,.35)]">
            <div className="rounded-xl bg-[#0b111f]/70 p-4 sm:p-6 backdrop-blur-xl ring-1 ring-white/10">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = Object.fromEntries(new FormData(e.currentTarget));
                  console.log('Contact form:', data);
                  alert('Thanks! We’ll get back to you shortly.');
                }}
                className="space-y-4"
              >
                <Field label="Name">
                  <input
                    required
                    name="name"
                    placeholder="Your full name"
                    className="themed-input"
                  />
                </Field>

                <Field label="Email">
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    className="themed-input"
                  />
                </Field>

                <Field label="Message">
                  <textarea
                    required
                    rows={6}
                    name="message"
                    placeholder="Tell us a little about your project or question…"
                    className="themed-input resize-none"
                  />
                </Field>

                {/* submit bar like the reference (light slab + dark text) */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-white py-3.5 text-sm font-semibold text-[#0b1020] shadow-[0_10px_30px_rgba(255,255,255,.08)] ring-1 ring-white/40 hover:brightness-[1.03] active:translate-y-[1px] transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* subtle top glow */}
          <div className="pointer-events-none absolute -top-6 left-1/2 h-12 w-3/5 -translate-x-1/2 rounded-full bg-blue-500/20 blur-2xl" />
        </div>
      </div>

      {/* Local styles for inputs + cards */}
      <style jsx>{`
        .themed-input {
          width: 100%;
          border-radius: 0.8rem;
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.03));
          border: 1px solid rgba(255,255,255,0.08);
          padding: 0.9rem 1rem;
          color: #fff;
          outline: none;
          transition: box-shadow .25s ease, border-color .25s ease, background .25s ease;
          box-shadow:
            inset 0 0 0 1px rgba(255,255,255,0.02),
            inset 0 1px 0 rgba(255,255,255,0.06);
        }
        .themed-input::placeholder { color: rgba(255,255,255,.45); }
        .themed-input:focus {
          border-color: rgba(99,102,241,.55);
          box-shadow:
            0 0 0 7px rgba(59,130,246,.10),
            0 0 0 1px rgba(99,102,241,.55) inset,
            0 12px 32px rgba(59,130,246,.18);
          background: linear-gradient(180deg, rgba(59,130,246,.06), rgba(59,130,246,.03));
        }
      `}</style>
    </div>
  );
}

/* ---------- tiny pieces ---------- */

function Field({ label, children }) {
  return (
    <label className="block">
      <div className="mb-2 text-xs font-semibold tracking-wide text-white/60">{label}</div>
      {children}
    </label>
  );
}

function ContactCard({ icon, title, subtitle }) {
  return (
    <div className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3 ring-1 ring-white/10 transition hover:bg-white/[.07]">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#0e1630] ring-1 ring-white/10 text-blue-300">
          {icon}
        </div>
        <div>
          <div className="text-sm font-semibold text-white">{title}</div>
          <div className="text-xs text-white/60">{subtitle}</div>
        </div>
      </div>

      <div className="grid place-items-center">
        <span className="inline-grid h-9 w-9 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 text-white/80 transition group-hover:bg-white/10">
          <ArrowIcon />
        </span>
      </div>
    </div>
  );
}

/* simple inline icons (no extra deps) */
const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
    <path d="M4 6h16v12H4z" />
    <path d="M22 6l-10 7L2 6" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
    <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 6.18 2 2 0 0 1 5 4h4.09a1 1 0 0 1 1 .75l1 3.5a1 1 0 0 1-.27 1L9.91 11a16 16 0 0 0 6.18 6.18l1.75-1.86a1 1 0 0 1 1-.27l3.5 1a1 1 0 0 1 .66.94Z" />
  </svg>
);

const PinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
    <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
