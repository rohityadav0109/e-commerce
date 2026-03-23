"use client";

import { useRouter } from "next/navigation";
import { Product } from "@/lib/data";
import { useCart } from "@/lib/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const router = useRouter();
  const discountedPrice = Math.floor(product.price * 1.5);
  const discount = Math.round((1 - product.price / discountedPrice) * 100);

  return (
    <div className="card-dark rounded-xl overflow-hidden flex flex-col cursor-pointer group">
      
      {/* Image */}
      <div
        className="relative overflow-hidden bg-[#242424] aspect-[4/5]"
        onClick={() => router.push(`/products/${product.id}`)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={(e) => { e.stopPropagation(); router.push(`/products/${product.id}`); }}
            className="bg-white text-[#0f0f0f] text-[11px] font-black uppercase tracking-[0.1em] px-6 py-2.5 rounded transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            View Details
          </button>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {discount > 0 && (
            <span className="bg-[#f97316] text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-wide">
              {discount}% OFF
            </span>
          )}
          {product.rating >= 4.5 && (
            <span className="bg-[#fbbf24] text-[#0f0f0f] text-[10px] font-black px-2 py-1 rounded uppercase tracking-wide">
              🔥 Hot
            </span>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-4 bg-[#1a1a1a]">
        <p className="text-[#f97316] text-[10px] font-bold uppercase tracking-[0.15em] mb-1">{product.category}</p>
        <h3
          className="text-white text-sm font-semibold leading-snug mb-2 line-clamp-2 hover:text-[#f97316] transition-colors cursor-pointer"
          onClick={() => router.push(`/products/${product.id}`)}
        >
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex">
            {[1,2,3,4,5].map(i => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill={i <= Math.floor(product.rating) ? "#f97316" : "#2e2e2e"} stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            ))}
          </div>
          <span className="text-[#9ca3af] text-[10px]">({product.rating})</span>
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-black text-white">₹{product.price.toLocaleString('en-IN')}</span>
          <span className="text-[#9ca3af] text-sm line-through">₹{discountedPrice.toLocaleString('en-IN')}</span>
        </div>

        <button
          onClick={() => addToCart(product)}
          className="mt-auto w-full btn-orange text-[11px] py-3 rounded-lg"
        >
          Add to Bag
        </button>
      </div>
    </div>
  );
}
