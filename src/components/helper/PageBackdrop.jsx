'use client';
import React from 'react';

/** Full-page black + blue aurora background (non-interactive) */
export default function PageBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {/* base black */}
      <div className="absolute inset-0 bg-[#000000]" />

      {/* diagonal sweep + right glows (your gradient) */}
      <div
        className="absolute inset-0"
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

      {/* optional bottom vignette for depth */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
}
