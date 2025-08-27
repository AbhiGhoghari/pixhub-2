'use client';
import React from 'react';
import Hero from './Hero';
import Brand from './Brand';
import Support from './Support';
import Compare from './Compare';
import PixhubCommunity from './AvatarBubble';
import Pricing from './Pricing';
import Faqs from './Faqs';

export default function Dashboard() {
    return (
        <div>
            {/* <div
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
            /> */}
            <Hero />
            <Brand />
            <Support />
            <Compare />
            <PixhubCommunity />
            <Pricing />
            <Faqs />
        </div>
    );
}
