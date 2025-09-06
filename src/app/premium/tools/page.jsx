'use client';
import React from 'react';
import PremiumLayout from '@/components/premium/PremiumLayout';

export default function ToolsPage() {
  return (
    <PremiumLayout title="Tools Library">
      <div className="rounded-2xl conic-border border border-transparent animate-border p-[2px]">
        <div className="rounded-[18px] bg-[#0b111f]/75 p-6 ring-1 ring-white/10">
          <h2 className="text-white font-bold text-lg">Your Tools</h2>
          <p className="mt-2 text-white/70 text-sm">List or grid of all premium tools goes here…</p>
        </div>
      </div>
    </PremiumLayout>
  );
}
