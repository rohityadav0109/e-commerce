import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { featuredProducts } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      
      <section className="py-20 bg-[var(--background)]">
        <div className="container px-6 mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                FEATURED <span className="text-[var(--primary)]">COLLECTION</span>
              </h2>
              <p className="text-[var(--muted)] text-lg">Curated selections from the world's most innovative brands.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[var(--primary)] hover:text-[var(--secondary)] transition-colors">
              View All Products
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 md:hidden text-center">
             <button className="w-full py-4 rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] text-sm font-bold uppercase tracking-widest text-[var(--foreground)]">
              View All Products
            </button>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-[var(--glass-border)] bg-[rgba(255,255,255,0.02)]">
        <div className="container px-6 mx-auto text-center">
          <p className="text-[var(--muted)] text-sm">&copy; 2026 Astra R-Commerce. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        .container {
          max-width: 1200px;
        }
      `}</style>
    </>
  );
}
