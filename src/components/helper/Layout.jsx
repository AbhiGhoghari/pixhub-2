'use client';

import LegalLinksStrip from '@/components/helper/LegalLinksStrip';
import { NavbarMenu } from '@/components/helper/NavbarMenu';
import { Footer } from '@/components/helper/Footer';
import { usePathname } from 'next/navigation';

export default function Layout({ children }) {
    const pathname = usePathname();
    const isPremiumPath = pathname?.startsWith('/premium');

    return (
        <>
            {!isPremiumPath && <NavbarMenu />}
            {children}
            {!isPremiumPath && <Footer />}
            {!isPremiumPath && <LegalLinksStrip />}
        </>
    );
}
