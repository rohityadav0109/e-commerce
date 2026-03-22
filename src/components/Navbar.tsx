"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 bg-[rgba(5,5,5,0.8)] backdrop-blur-md border-b border-[rgba(255,255,255,0.1)]" : "py-6 bg-transparent"}`}>
      <div className="container px-6 mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#d946ef] flex items-center justify-center p-0.5">
            <span className="w-full h-full bg-[#050505] rounded-full flex items-center justify-center text-xs">A</span>
          </span>
          ASTRA
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--muted)]">
          <Link href="/products" className="hover:text-[var(--foreground)] transition-colors">Products</Link>
          <Link href="/categories" className="hover:text-[var(--foreground)] transition-colors">Categories</Link>
          <Link href="/about" className="hover:text-[var(--foreground)] transition-colors">About</Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-[var(--glass-bg)] rounded-full transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button>
          <button className="relative p-2 hover:bg-[var(--glass-bg)] rounded-full transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <span className="absolute top-0 right-0 w-4 h-4 bg-[var(--primary)] text-[10px] flex items-center justify-center rounded-full">0</span>
          </button>
          <Link href="/login" className="px-5 py-2 rounded-full bg-[var(--foreground)] text-[var(--background)] text-sm font-semibold hover:opacity-90 transition-opacity">
            Sign In
          </Link>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
        }
      `}</style>
    </nav>
  );
}
