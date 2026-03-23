"use client";

import { useCart } from "@/lib/CartContext";
import { useRouter } from "next/navigation";

export default function CartDrawer() {
  const cartContext = useCart() as any;
  const { cart, removeFromCart, totalItems, totalPrice } = cartContext;
  const isOpen = cartContext.isOpen;
  const setIsOpen = cartContext.setIsOpen;
  const router = useRouter();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setIsOpen?.(false)} />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#141414] border-l border-[#2e2e2e] h-full flex flex-col shadow-[-20px_0_60px_rgba(0,0,0,0.5)]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#2e2e2e]">
          <div>
            <h2 className="text-white font-black text-base tracking-wide uppercase">Your Bag</h2>
            <p className="text-[#9ca3af] text-[11px] mt-0.5">{totalItems} item{totalItems !== 1 ? 's' : ''}</p>
          </div>
          <button onClick={() => setIsOpen?.(false)} className="text-[#9ca3af] hover:text-[#f97316] transition-colors p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto hide-scrollbar px-6 py-4 space-y-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-16">
              <div className="w-16 h-16 bg-[#1a1a1a] border border-[#2e2e2e] rounded-2xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2e2e2e" strokeWidth="1.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              </div>
              <h3 className="text-white font-semibold text-lg">Your bag is empty</h3>
              <p className="text-[#9ca3af] text-sm font-light">Add something bold to get started.</p>
              <button
                onClick={() => { setIsOpen?.(false); router.push('/products'); }}
                className="btn-orange text-[11px] px-8 py-3 rounded-lg mt-2"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cart.map((item: any) => (
              <div key={item.id} className="flex gap-4 bg-[#1a1a1a] border border-[#2e2e2e] rounded-xl p-3 hover:border-[#f97316]/30 transition-colors">
                <div className="w-16 h-20 bg-[#242424] rounded-lg overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="text-white text-sm font-semibold leading-tight line-clamp-2">{item.name}</h4>
                    <button onClick={() => removeFromCart(item.id)} className="text-[#9ca3af] hover:text-red-400 transition-colors flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
                    </button>
                  </div>
                  <p className="text-[#9ca3af] text-[11px] mt-1">Qty: {item.quantity}</p>
                  <p className="text-[#f97316] font-bold text-sm mt-auto">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-[#2e2e2e] p-6 bg-[#0f0f0f]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[#9ca3af] text-sm">Subtotal</span>
              <span className="text-white text-xl font-black">₹{totalPrice.toLocaleString('en-IN')}</span>
            </div>
            <p className="text-[#9ca3af] text-[10px] mb-5">Shipping & taxes calculated at checkout</p>
            <button
              onClick={() => { setIsOpen?.(false); router.push('/checkout'); }}
              className="w-full btn-orange py-4 rounded-xl text-sm"
            >
              Checkout — ₹{totalPrice.toLocaleString('en-IN')}
            </button>
            <button
              onClick={() => { setIsOpen?.(false); router.push('/products'); }}
              className="w-full text-center text-[#9ca3af] hover:text-white text-xs mt-3 py-2 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
