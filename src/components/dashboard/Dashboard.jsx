'use client';
import React from 'react';
import Hero from './Hero';
import Brand from './Brand';
import Support from './Support';
import Compare from './Compare';
import Community from './AvatarBubble';
import Pricing from './Pricing';
import Faqs from './Faqs';
import PageBackdrop from '../helper/PageBackdrop';

export default function Dashboard() {
  return (
    <div className="relative">
      <PageBackdrop />   {/* global gradient for the whole landing page */}
      <MobilePricingCTA />
      <Hero />
      <Brand />
      <Pricing />
      <Compare />
      <Support />
      <Community />
      <Faqs />
    </div>
  );
}

function MobilePricingCTA() {
  const [hidden, setHidden] = React.useState(false);

  React.useEffect(() => {
    const el = document.getElementById('pricing');
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Once we've reached pricing, hide permanently this session
          setHidden(true);
          io.disconnect();
        }
      },
      { threshold: 0.06 } // hide when ~6% of pricing is visible
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (hidden) return null;

  return (
    <a
      href="#pricing"
      aria-label="View pricing plans"
      className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-[60]
                 rounded-full px-5 py-3 text-sm font-bold text-white
                 bg-gradient-to-r from-indigo-600 to-blue-600
                 ring-1 ring-indigo-400/30 shadow-[0_10px_30px_rgba(59,130,246,.35)]
                 hover:brightness-110 transition"
    >
      View Plans • ₹199/mo
    </a>
  );
}
