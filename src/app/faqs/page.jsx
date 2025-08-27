'use client';
import Faqs from '@/components/dashboard/Faqs';
import React from 'react';

export default function page() {
  return (
    <div className='pt-32'>
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
      <Faqs />
    </div>
  )
}
