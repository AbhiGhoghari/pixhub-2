'use client';
import React from 'react';

export default function ShinyButton({ label = 'Click Me' }) {
  return (
    <button className="btn-neon">
      {label}
    </button>
  );
}