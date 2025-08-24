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
