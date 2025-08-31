'use client';
import Image from 'next/image';
import Marquee from '../ui/marquee';

import freepik from '../../../public/image/logo/freepik.svg';
import envanto from '../../../public/image/logo/envanto.svg';
import flaticon from '../../../public/image/logo/flaticon.svg';
import { FaIndianRupeeSign } from 'react-icons/fa6';

const logos = [
  { src: freepik, alt: 'Freepik' },
  { src: envanto, alt: 'Envanto' },
  { src: flaticon, alt: 'Flaticon' },
];

export default function Brand() {
  return (
    <div className="relative w-full overflow-hidden pt-8 sm:pt-10 text-center px-4">
      {/* Text */}
      <p className="text-blue-100/90 leading-relaxed 
                     text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto">
        Unlock premium graphics from{" "}
        <span className="font-semibold">Freepik</span>,{" "}
        <span className="font-semibold">Flaticon</span> &{" "}
        <span className="font-semibold">Envato</span> – all for just{" "}
        <span className="inline-flex items-center gap-1 text-3d-blue font-extrabold 
                          text-lg sm:text-xl md:text-2xl lg:text-3xl">
          <FaIndianRupeeSign className="-mt-1" />249
        </span>
        <span className="opacity-80 text-sm sm:text-base">/month</span>. One membership. Infinite creations.
      </p>

      {/* Logos Marquee */}
      <Marquee
        pauseOnHover
        className="py-12 sm:py-16 md:py-20 lg:py-24 [--duration:22s] [--gap:2.5rem]"
      >
        {logos.map((l, i) => (
          <Image
            key={i}
            src={l.src}
            alt={l.alt}
            className="mx-6 sm:mx-10 h-6 sm:h-8 md:h-10 w-auto shrink-0 
                       transition duration-300 hover:opacity-100 hover:grayscale-0"
            sizes="(max-width: 640px) 60px, (max-width: 1024px) 90px, 120px"
            loading="lazy"
          />
        ))}
      </Marquee>

      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 md:w-32 bg-gradient-to-r from-black/80 to-transparent dark:from-black/90" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 md:w-32 bg-gradient-to-l from-black/80 to-transparent dark:from-black/90" />
    </div>
  );
}
