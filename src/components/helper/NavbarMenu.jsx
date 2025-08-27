"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const MenuItem = ({ label, href }) => {
  return (
    <Link href={href} aria-label={label}>
      <motion.p
        whileHover={{ y: -1 }}
        transition={{ duration: 0.2 }}
        className="cursor-pointer text-white/90 hover:text-white"
      >
        {label}
      </motion.p>
    </Link>
  );
};

const Menu = ({ children }) => {
  return (
    <nav className="nav-glass mt-4 flex w-full items-center justify-between gap-4 px-5 py-5 md:px-8">
      {children}
    </nav>
  );
};

export function NavbarMenu() {
  return (
    <div className="relative flex w-full items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
    { label: "Service", href: "/service" },
    { label: "FAQs", href: "/faqs" },
  ];

  return (
    <div
      className={cn(
        "absolute inset-x-0 top-10 z-50 mx-auto max-w-2xl",
        className
      )}
    >
      <Menu>
        {/* Left: links */}
        <div className="flex items-center gap-6">
          {menuItems.map((item) => (
            <MenuItem key={item.href} label={item.label} href={item.href} />
          ))}
        </div>

        {/* Right: auth buttons */}
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="rounded-full px-4 py-2 text-sm font-semibold text-white/90 ring-1 ring-white/15 bg-white/5 hover:bg-white/10 hover:text-white transition"
            aria-label="Log in"
          >
            Log in
          </Link>

          <Link
            href="/signup"
            className="rounded-full px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-blue-600 ring-1 ring-indigo-400/30 shadow-[0_6px_20px_rgba(59,130,246,.35)] hover:brightness-110 transition"
            aria-label="Sign up"
          >
            Sign up
          </Link>
        </div>
      </Menu>
    </div>
  );
}
