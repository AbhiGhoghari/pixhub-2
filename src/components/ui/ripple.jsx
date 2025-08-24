'use client';
import React from 'react';
import { cn } from '@/lib/utils';

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
  className,
  // optional: tweak speed per-instance via CSS var
  duration = '2.6s', // matches your theme var default-ish
  ...props
}) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]',
        className
      )}
      style={{ '--duration': duration }}
      {...props}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70;
        const opacity = Math.max(0, mainCircleOpacity - i * 0.03);

        return (
          <div
            key={i}
            className="absolute rounded-full border animate-ripple
                       shadow-[0_0_88px_rgba(147,197,253,.18)]"
            style={{
              // lighter blue theme
              background:
                'radial-gradient(circle at center, rgba(147,197,253,0.18) 0%, rgba(147,197,253,0.08) 55%, rgba(147,197,253,0) 75%)',
              borderColor: 'rgba(147,197,253,0.85)', // ~blue-300
              borderWidth: '1px',

              // geometry & motion
              width: `${size}px`,
              height: `${size}px`,
              opacity,
              // drive stagger via the CSS variable the theme anim reads
              '--i': i,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) scale(1)',
            }}
          />
        );
      })}
    </div>
  );
});

Ripple.displayName = 'Newsletter';
