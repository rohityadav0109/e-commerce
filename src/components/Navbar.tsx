"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/CartContext";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { totalItems, setIsOpen } = useCart() as any;
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Shop All", href: "/products" },
    { label: "Men", href: "/products?category=Men's Clothing" },
    { label: "Women", href: "/products?category=Women's Clothing" },
    { label: "Ethnic", href: "/products?category=Ethnic Wear" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top announcement bar */}
      <div className="w-full bg-[#f97316] text-white text-center text-[11px] font-bold tracking-[0.15em] py-2 uppercase">
        🔥 Free Shipping on Orders Above ₹999 — Limited Time Only
      </div>

      {/* Main Navbar — dark, elevated, distinct from the page */}
      <nav className="w-full bg-[#141414] border-b border-[#2e2e2e] sticky top-0 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between gap-6">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-8 h-8 bg-[#f97316] rounded flex items-center justify-center text-white font-black text-sm">
              RK
            </div>
            <span className="text-white font-black text-lg tracking-wider">
              TECH
              <span className="text-[#f97316]">.</span>
            </span>
          </Link>

          {/* Center Nav Links — Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[12px] font-semibold tracking-[0.12em] uppercase transition-colors relative group
                  ${pathname === link.href ? "text-[#f97316]" : "text-[#9ca3af] hover:text-white"}`}
              >
                {link.label}
                <span className={`absolute -bottom-0.5 left-0 h-[2px] bg-[#f97316] transition-all duration-300 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button className="text-[#9ca3af] hover:text-[#f97316] transition-colors p-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </button>

            {/* Account */}
            <Link href="/login" className="text-[#9ca3af] hover:text-[#f97316] transition-colors p-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </Link>

            {/* Admin */}
            <Link href="/admin" className="hidden md:block text-[#9ca3af] hover:text-[#f97316] transition-colors p-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>
            </Link>

            {/* Cart */}
            <button
              onClick={() => typeof setIsOpen === 'function' && setIsOpen(true)}
              className="relative flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white text-[11px] font-bold tracking-[0.1em] px-4 py-2 rounded transition-all shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <span className="hidden sm:inline uppercase">Bag</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-[#f97316] text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full leading-none">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-[#9ca3af] hover:text-white transition-colors"
            >
              {menuOpen
                ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
                : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              }
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#1a1a1a] border-t border-[#2e2e2e] px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[13px] font-semibold tracking-widest uppercase text-[#9ca3af] hover:text-[#f97316] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
