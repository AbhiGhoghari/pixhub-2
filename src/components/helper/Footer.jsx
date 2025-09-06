'use client';
import React from 'react';
import { Ripple } from '../ui/ripple';
import { BlueInput } from '../ui/input';
import { IoIosMail } from "react-icons/io";
import logo from '../../../public/image/logo/full-logo.png';
import Image from "next/image";
import Link from 'next/link';

export function Footer() {
    return (
        <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-gradient-to-b from-[#0b1224] via-[#0a1020] to-[#090e1a]">
            {/* <Link href="/" className="flex items-center gap-2" aria-label="Designcrate home">
                <Image
                    src={logo}
                    alt="Designcrate logo"
                    width={100}
                    height={100}
                    className="w-full h-15 opacity-90"
                    priority
                />
            </Link> */}
            <div className="pt-14">
                <BlueInput
                    id="email"
                    label="EMAIL"
                    placeholder="you@domain.com"
                    // value={value}
                    // onChange={(e) => setValue(e.target.value)}
                    icon={IoIosMail}
                    helperText="We only send interesting and relevant emails."
                />
            </div>
            <Ripple duration="3.2s" numCircles={8} mainCircleSize={210} />
        </div>
    );
}