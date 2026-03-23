import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryNav from "@/components/CategoryNav";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { featuredProducts } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f0f]">
      <Navbar />
      <main className="flex-1 w-full flex flex-col">
        
        <Hero />
        <CategoryNav />

        {/* Section: Featured Products */}
        <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-20">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[#f97316] text-[11px] font-bold uppercase tracking-[0.2em] mb-2">Handpicked For You</p>
              <h2 className="text-4xl font-black text-white tracking-tight">
                Trending Now
                <span className="text-[#f97316]">.</span>
              </h2>
            </div>
            <a href="/products" className="hidden md:flex items-center gap-2 text-[#9ca3af] hover:text-[#f97316] transition-colors text-[12px] font-semibold uppercase tracking-widest group">
              View All
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="w-full bg-gradient-to-r from-[#f97316] to-[#fbbf24] py-20 px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Become a Seller on RKTECH</h2>
            <p className="text-white/80 text-lg font-light mb-8 max-w-lg mx-auto">Have a brand or craft? Reach thousands of fashion lovers across India.</p>
            <a href="/admin" className="inline-block bg-[#0f0f0f] text-white font-black text-[12px] uppercase tracking-[0.15em] px-10 py-4 rounded shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:scale-105 transition-all">
              Open Your Store
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
