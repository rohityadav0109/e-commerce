import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#0f0f0f] flex items-center overflow-hidden">
      {/* Background orange gradient glow */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-[#f97316]/10 via-[#f97316]/5 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f97316]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
        
        {/* Left — Text Content */}
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center gap-2 bg-[#f97316]/10 border border-[#f97316]/30 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse"></span>
            <span className="text-[#f97316] text-[11px] font-bold tracking-[0.15em] uppercase">New Season Collection</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1] mb-6 tracking-tight">
            DRESS<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#fbbf24]">BOLD.</span>
          </h1>

          <p className="text-[#9ca3af] text-lg font-light leading-relaxed max-w-md mb-10">
            Discover curated fashion that speaks your language. From bold streetwear to traditional elegance — own every room you walk into.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white font-bold text-[12px] tracking-[0.12em] uppercase px-8 py-4 rounded shadow-[0_4px_20px_rgba(249,115,22,0.4)] hover:shadow-[0_8px_30px_rgba(249,115,22,0.6)] hover:-translate-y-0.5 transition-all"
            >
              Shop Collection
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-[#2e2e2e] text-[#9ca3af] hover:border-[#f97316] hover:text-[#f97316] font-bold text-[12px] tracking-[0.12em] uppercase px-8 py-4 rounded transition-all"
            >
              Our Story
            </Link>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 mt-14 border-t border-[#2e2e2e] pt-8">
            <div>
              <p className="text-2xl font-black text-white">10K+</p>
              <p className="text-[11px] text-[#9ca3af] uppercase tracking-widest mt-1">Happy Customers</p>
            </div>
            <div className="w-px h-10 bg-[#2e2e2e]"></div>
            <div>
              <p className="text-2xl font-black text-white">500+</p>
              <p className="text-[11px] text-[#9ca3af] uppercase tracking-widest mt-1">Styles Available</p>
            </div>
            <div className="w-px h-10 bg-[#2e2e2e]"></div>
            <div>
              <p className="text-2xl font-black text-white">4.9★</p>
              <p className="text-[11px] text-[#9ca3af] uppercase tracking-widest mt-1">Avg. Rating</p>
            </div>
          </div>
        </div>

        {/* Right — Image Grid */}
        <div className="hidden lg:grid grid-cols-2 gap-4 h-[580px]">
          <div className="row-span-2 rounded-2xl overflow-hidden bg-[#1a1a1a] border border-[#2e2e2e]">
            <img
              src="https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=800&auto=format&fit=crop"
              alt="Fashion Model"
              className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700"
            />
          </div>
          <div className="rounded-2xl overflow-hidden bg-[#1a1a1a] border border-[#2e2e2e] relative group">
            <img
              src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop"
              alt="Men's Fashion"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <span className="text-white text-[11px] font-bold uppercase tracking-widest">Men's Wear</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden bg-[#1a1a1a] border border-[#2e2e2e] relative group">
            <img
              src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop"
              alt="Women's Fashion"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <span className="text-white text-[11px] font-bold uppercase tracking-widest">Women's Wear</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
