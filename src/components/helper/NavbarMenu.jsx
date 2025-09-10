"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FiMenu, FiX } from "react-icons/fi";
import logo from '../../../public/image/logo/full-logo.png';
import Image from "next/image";

const MenuItem = ({ label, href, onClick }) => {
  return (
    <Link href={href} aria-label={label} onClick={onClick}>
      <motion.p
        whileHover={{ y: -1 }}
        transition={{ duration: 0.2 }}
        className="cursor-pointer text-white/90 hover:text-white text-lg md:text-base"
      >
        {label}
      </motion.p>
    </Link>
  );
};

const Menu = ({ children, className }) => {
  return (
    <nav
      className={cn(
        "nav-glass rounded-full flex w-full items-center justify-between gap-4 px-5 py-4 mt-4 md:px-8",
        className
      )}
    >
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
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Service", href: "/#service" },
    { label: "FAQs", href: "/#faqs" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div
      className={cn(
        "absolute inset-x-0 top-10 z-50 mx-auto max-w-4xl px-4",
        className
      )}
    >
      <Menu>
        <Link href="/" className="flex items-center gap-2" aria-label="Designcrate home">
          <Image
            src={logo}
            alt="Designcrate logo"
            width={100}
            height={100}
            className="w-full h-11"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <MenuItem key={item.href} label={item.label} href={item.href} />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex gap-2">
            {/* <Link
              href="/signin"
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
            </Link> */}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white/90 hover:text-white text-2xl focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </Menu>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="nav-glass rounded-4xl mt-2 flex flex-col items-center gap-5 px-6 py-6 md:hidden animate-fade-in">
          {menuItems.map((item) => (
            <MenuItem
              key={item.href}
              label={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
            />
          ))}
          <div className="flex flex-col gap-3 w-full">
            {/* <Link
              href="/login"
              className="rounded-full w-full text-center px-4 py-2 text-sm font-semibold text-white/90 ring-1 ring-white/15 bg-white/5 hover:bg-white/10 hover:text-white transition"
              onClick={() => setOpen(false)}
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="rounded-full w-full text-center px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-blue-600 ring-1 ring-indigo-400/30 shadow-[0_6px_20px_rgba(59,130,246,.35)] hover:brightness-110 transition"
              onClick={() => setOpen(false)}
            >
              Sign up
            </Link> */}
          </div>
        </div>
      )}
    </div>
  );
}
