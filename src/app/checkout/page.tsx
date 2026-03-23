"use client"

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/lib/CartContext";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useCart();
  const router = useRouter();

  const [activeStep, setActiveStep] = useState(1);
  const [placed, setPlaced] = useState(false);

  // Form states
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  if (cart.length === 0 && !placed) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
           <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#e2e8f0" strokeWidth="1" className="mb-6"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
           <h2 className="text-2xl font-light text-[#1c1c1c] mb-2 tracking-tight">Your bag is empty</h2>
           <p className="text-[#666] font-light mb-8">Let's find some beautiful pieces for you.</p>
           <button onClick={() => router.push('/products')} className="bg-[#1c1c1c] hover:bg-[var(--primary)] text-white text-[11px] font-bold tracking-[0.15em] px-10 py-4 uppercase transition-colors">
              Continue Shopping
           </button>
        </main>
        <Footer />
      </div>
    );
  }

  if (placed) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
           <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-8">
             <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 6 9 17l-5-5"/></svg>
           </div>
           <h2 className="text-3xl font-light text-[#1c1c1c] mb-4 tracking-tight">Order Confirmed</h2>
           <p className="text-[#666] font-light max-w-md mx-auto mb-10 leading-relaxed">Your order has been successfully placed. We've sent a confirmation email with tracking details to your inbox.</p>
           <button onClick={() => router.push('/')} className="border-b-2 border-[#1c1c1c] text-[#1c1c1c] text-xs font-bold uppercase tracking-widest pb-1 hover:text-[var(--primary)] hover:border-[var(--primary)] transition-colors">
              Return Home
           </button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf8f9]">
      <Navbar />
      
      <main className="flex-1 max-w-[1200px] w-full mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Left Col - Steps */}
        <div className="w-full lg:w-3/5 space-y-12">
           <h1 className="text-2xl font-light tracking-[0.1em] text-[#1c1c1c] uppercase mb-4 text-center lg:text-left">Checkout</h1>

           {/* Step 1: Customer Info */}
           <div className={`transition-opacity duration-300 ${activeStep !== 1 && 'opacity-60'}`}>
             <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-[#1c1c1c] mb-6 flex items-center gap-3">
               <span className="w-6 h-6 rounded-full bg-[#1c1c1c] text-white flex items-center justify-center text-[10px]">1</span> 
               Contact Information
             </h2>
             {activeStep === 1 ? (
               <div className="space-y-4">
                 <input 
                   type="email" 
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   placeholder="Email Address" 
                   className="w-full p-4 bg-white border border-gray-200 outline-none focus:border-[var(--primary)] transition-colors text-sm font-light text-[#1c1c1c]"
                 />
                 <button 
                   onClick={() => email ? setActiveStep(2) : alert("Please enter your email")}
                   className="w-full bg-[#1c1c1c] hover:bg-gray-800 text-white font-bold tracking-[0.15em] text-[11px] py-4 uppercase transition-colors"
                 >
                   Continue to Shipping
                 </button>
               </div>
             ) : (
               <div className="text-sm text-[#666] bg-white p-4 border border-gray-100 flex justify-between items-center">
                 <span>{email}</span>
                 <button onClick={() => setActiveStep(1)} className="text-xs font-bold uppercase tracking-wider hover:text-[var(--primary)]">Edit</button>
               </div>
             )}
           </div>

           <div className="w-full border-t border-gray-200"></div>

           {/* Step 2: Shipping */}
           <div className={`transition-opacity duration-300 ${activeStep !== 2 && 'opacity-60'}`}>
             <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-[#1c1c1c] mb-6 flex items-center gap-3">
               <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${activeStep >= 2 ? 'bg-[#1c1c1c] text-white' : 'bg-gray-200 text-gray-500'}`}>2</span> 
               Shipping Address
             </h2>
             {activeStep === 2 ? (
               <div className="space-y-4">
                 <textarea 
                   rows={3}
                   value={address}
                   onChange={(e) => setAddress(e.target.value)}
                   placeholder="123 Fashion Ave, Apt 4B, New York, NY 10001" 
                   className="w-full p-4 bg-white border border-gray-200 outline-none focus:border-[var(--primary)] transition-colors text-sm font-light text-[#1c1c1c] resize-none"
                 />
                 <button 
                   onClick={() => address ? setActiveStep(3) : alert("Please enter shipping address")}
                   className="w-full bg-[#1c1c1c] hover:bg-gray-800 text-white font-bold tracking-[0.15em] text-[11px] py-4 uppercase transition-colors"
                 >
                   Continue to Payment
                 </button>
               </div>
             ) : activeStep > 2 ? (
               <div className="text-sm text-[#666] bg-white p-4 border border-gray-100 flex justify-between items-center">
                 <span className="truncate">{address}</span>
                 <button onClick={() => setActiveStep(2)} className="text-xs font-bold uppercase tracking-wider hover:text-[var(--primary)]">Edit</button>
               </div>
             ) : null}
           </div>

           <div className="w-full border-t border-gray-200"></div>

           {/* Step 3: Payment */}
           <div className={`transition-opacity duration-300 ${activeStep !== 3 && 'opacity-60'}`}>
             <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-[#1c1c1c] mb-6 flex items-center gap-3">
               <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${activeStep === 3 ? 'bg-[#1c1c1c] text-white' : 'bg-gray-200 text-gray-500'}`}>3</span> 
               Secure Payment
             </h2>
             {activeStep === 3 && (
               <div className="space-y-6">
                 <div className="border border-[var(--primary)] bg-pink-50 p-4 relative">
                   <div className="flex items-center gap-3">
                     <input type="radio" checked readOnly className="accent-[var(--primary)]" />
                     <span className="text-sm font-medium text-[#1c1c1c]">Cash on Delivery (COD)</span>
                   </div>
                   <p className="ml-7 mt-2 text-xs text-[#666] font-light">Pay with cash when your order is delivered.</p>
                 </div>
                 <div className="border border-gray-200 bg-white p-4 relative opacity-50 cursor-not-allowed">
                   <div className="flex items-center gap-3">
                     <input type="radio" disabled />
                     <span className="text-sm font-medium text-[#1c1c1c]">Credit / Debit Card</span>
                   </div>
                 </div>

                 <button 
                   onClick={() => {
                     setPlaced(true);
                     setTimeout(() => clearCart(), 100);
                   }}
                   className="w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold tracking-[0.15em] text-[11px] py-5 uppercase transition-colors mt-8"
                 >
                   Confirm Order
                 </button>
               </div>
             )}
           </div>

        </div>

        {/* Right Col - Order Summary */}
        <div className="w-full lg:w-2/5 mt-12 lg:mt-0">
          <div className="bg-white border border-gray-100 p-8 sticky top-24">
            <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-[#1c1c1c] mb-6">Order Summary</h2>
            
            <div className="space-y-6 max-h-[40vh] overflow-y-auto hide-scrollbar">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-16 h-20 bg-[#f8f9fa] flex-shrink-0 relative">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                    <span className="absolute -top-2 -right-2 bg-gray-200 text-[#1c1c1c] text-[9px] font-bold w-5 h-5 flex items-center justify-center rounded-full leading-none">{item.quantity}</span>
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                     <h3 className="text-xs font-medium text-[#1c1c1c] leading-tight mb-1">{item.name}</h3>
                     <p className="text-xs text-[#666]">{item.category}</p>
                     <p className="text-sm font-medium text-[var(--primary)] mt-1">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full border-t border-gray-100 my-6"></div>

            <div className="space-y-3 text-sm font-light text-[#1c1c1c]">
              <div className="flex justify-between">
                <span className="text-[#666]">Subtotal</span>
                <span>₹{totalPrice.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#666]">Shipping</span>
                <span>Free</span>
              </div>
            </div>

            <div className="w-full border-t border-gray-100 my-6"></div>

            <div className="flex justify-between items-center text-lg font-bold text-[#1c1c1c]">
              <span>Total</span>
              <span>₹{totalPrice.toLocaleString('en-IN')}</span>
            </div>

          </div>
        </div>

      </main>
      
      <Footer />
    </div>
  );
}
