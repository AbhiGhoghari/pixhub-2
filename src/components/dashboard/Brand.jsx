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
        <div className="relative w-full overflow-hidden pt-10 text-center">
            <p className="text-blue-100/90 text-2xl leading-relaxed">
                Unlock premium graphics from <span className="font-semibold">Freepik</span>, <span className="font-semibold">Flaticon</span> & <span className="font-semibold">Envato</span> - all for just{" "}
                <span className="inline-flex items-center gap-1 text-3d-blue font-extrabold">
                    <FaIndianRupeeSign className="-mt-1" />249
                </span>
                <span className="opacity-80">/month</span>. One membership. Infinite creations.
            </p>

            <Marquee pauseOnHover className="py-24 [--duration:22s] [--gap:2.5rem]">
                {logos.map((l, i) => (
                    <Image
                        key={i}
                        src={l.src}
                        alt={l.alt}
                        className="mx-10 h-10 w-auto shrink-0 transition duration-300 hover:opacity-100 hover:grayscale-0"
                        sizes="(max-width: 768px) 80px, 120px"
                        loading="lazy"
                    />
                ))}
            </Marquee>

            {/* edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/80 to-transparent dark:from-black/90" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/80 to-transparent dark:from-black/90" />
        </div>
    );
}
