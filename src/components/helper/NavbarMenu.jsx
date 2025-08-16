"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const MenuItem = ({ label, href }) => {
  return (
    <div className="relative">
      <Link href={href}>
        <motion.p
          transition={{ duration: 0.3 }}
          className="cursor-pointer hover:opacity-[0.9] text-white"
        >
          {label}
        </motion.p>
      </Link>
    </div>
  );
};

const Menu = ({ children }) => {
  return (
    <nav className="nav-glass flex justify-center space-x-4 px-8 py-6 mt-4">
      {children}
    </nav>
  );
};

export function NavbarMenu() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const menuItems = [
    { label: "Product", href: "/product" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/about" },
    { label: "FAQs", href: "/faqs" },
  ];

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu>
        {menuItems.map((item, index) => (
          <MenuItem key={index} label={item.label} href={item.href} />
        ))}
      </Menu>
    </div>
  );
}
