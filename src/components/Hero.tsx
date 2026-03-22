"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--primary)] opacity-10 blur-[120px] -z-10 rounded-full"></div>
      
      <div className="container px-6 mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-sm mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
          <span className="text-xs font-semibold tracking-wide uppercase text-[var(--muted)]">New Season Collection Out Now</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.05] tracking-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
          REDEFINE YOUR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">DIGITAL REALM</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-[var(--muted)] mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Experience the pinnacle of ecommerce. Discover curated collections, 
          unmatched performance, and a design that feels like the future.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Link href="/products" className="px-8 py-4 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all">
            Shop Collection
          </Link>
          <Link href="/about" className="px-8 py-4 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-md text-[var(--foreground)] font-bold text-lg hover:bg-[rgba(255,255,255,0.1)] transition-all">
            Learn More
          </Link>
        </div>

        {/* Floating Stats or Badges */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.5s" }}>
          {[
            { label: "Products", value: "10k+" },
            { label: "Happy Customers", value: "50k+" },
            { label: "Fast Delivery", value: "24h" },
            { label: "Secure Payment", value: "100%" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl font-bold text-[var(--foreground)] mb-1">{stat.value}</span>
              <span className="text-xs uppercase tracking-widest text-[var(--muted)] font-bold">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
        }
      `}</style>
    </section>
  );
}
