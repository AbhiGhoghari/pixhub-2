'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';

export const BlueInput = React.forwardRef(
  (
    {
      id,
      label,
      placeholder = 'Type here…',
      helperText,
      error,
      icon: Icon,          // optional left icon component
      right,               // optional right element (e.g., button)
      className,
      inputClassName,
      ...props
    },
    ref
  ) => {
    return (
      <label htmlFor={id} className={cn('block space-y-2', className)}>
        {label && (
          <span className="text-xs font-semibold tracking-[.18em] text-blue-200/80">
            {label}
          </span>
        )}

        {/* Animated shiny shell */}
        <div
          className={cn(
            'relative rounded-xl border-2 border-transparent conic-border animate-border p-[2px]'
          )}
        >
          {/* Inner container */}
          <div className="relative flex items-center rounded-xl bg-[#0b1120] ring-1 ring-white/5">
            {Icon && (
              <Icon className="pointer-events-none absolute left-3 h-5 w-5 text-blue-300/90" />
            )}

            <input
              id={id}
              ref={ref}
              placeholder={placeholder}
              className={cn(
                'w-full bg-transparent text-blue-50 placeholder-blue-200/45',
                'caret-blue-300 outline-none rounded-xl',
                'px-3 py-3',
                Icon ? 'pl-10' : 'pl-3',
                right ? 'pr-12' : 'pr-3',
                inputClassName
              )}
              {...props}
            />

            {right && (
              <div className="absolute right-2 flex items-center">{right}</div>
            )}
          </div>
        </div>

        {/* helper / error */}
        {error ? (
          <p className="text-[12px] text-rose-400">{error}</p>
        ) : helperText ? (
          <p className="text-[12px] text-blue-200/70">{helperText}</p>
        ) : null}
      </label>
    );
  }
);
BlueInput.displayName = 'BlueInput';
