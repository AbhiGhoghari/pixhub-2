import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/helper/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/layout.tsx
export const metadata = {
  title: "DesignCrate – 50+ Premium Platforms, One Subscription",
  description:
    "Access 50+ premium tools with one membership. Trusted by creators, students & businesses worldwide. No hidden fees, cancel anytime.",
  keywords: [
    "DesignCrate",
    "digital tools subscription",
    "premium tools",
    "creativity tools",
    "one membership",
  ],
  openGraph: {
    title: "DesignCrate – Unlimited Creativity",
    description:
      "One membership gives you access to 50+ premium platforms for creators, students & businesses.",
    url: "https://designcrate.co",
    siteName: "DesignCrate",
    images: [
      {
        url: "https://designcrate.co/og-image.jpg", // create this OG image
        width: 1200,
        height: 630,
        alt: "DesignCrate Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DesignCrate – 50+ Premium Platforms, One Subscription",
    description:
      "Access 50+ premium tools with one membership. No hidden fees, cancel anytime.",
    images: ["https://designcrate.co/og-image.jpg"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
