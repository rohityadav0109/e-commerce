"use client";

import { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group glass-card overflow-hidden cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[var(--primary)] text-white">
            {product.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] to-transparent opacity-0 group-hover:opacity-40 transition-opacity"></div>
        <button className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] py-3 rounded-xl bg-white text-black font-bold text-sm translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          Add to Cart
        </button>
      </div>
      
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i}
                xmlns="http://www.w3.org/2000/svg" 
                width="12" height="12" 
                viewBox="0 0 24 24" 
                fill={i < Math.floor(product.rating) ? "var(--primary)" : "none"} 
                stroke={i < Math.floor(product.rating) ? "var(--primary)" : "var(--muted)"}
                strokeWidth="2"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            ))}
            <span className="text-[10px] text-[var(--muted)] ml-1">({product.rating})</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-1 group-hover:text-[var(--primary)] transition-colors">{product.name}</h3>
        <p className="text-[var(--muted)] text-sm mb-4">Professional grade performance in index.</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-black text-white">${product.price}</span>
          <button className="p-2 rounded-full border border-[var(--glass-border)] hover:bg-[var(--glass-bg)] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
