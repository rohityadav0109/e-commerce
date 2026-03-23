"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4 mt-20">
        <div className="bg-white shadow-md rounded-sm w-full max-w-3xl flex overflow-hidden min-h-[500px]">
          {/* Left colored section */}
          <div className="w-2/5 bg-[var(--primary)] p-8 text-white flex flex-col justify-between hidden md:flex">
            <div>
              <h2 className="text-3xl font-bold mb-4">Login</h2>
              <p className="text-gray-200 text-lg leading-relaxed">
                Get access to your Orders, Wishlist and Recommendations
              </p>
            </div>
            <div>
              <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" alt="Login Banner" className="w-full object-contain" />
            </div>
          </div>
          
          {/* Right form section */}
          <div className="w-full md:w-3/5 p-8 flex flex-col">
            <div className="flex-1">
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <input type="text" id="email" className="block px-0 py-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[var(--primary)] peer" placeholder=" " required />
                  <label htmlFor="email" className="absolute text-gray-500 text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[var(--primary)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Email/Mobile number</label>
                </div>
                
                <p className="text-xs text-[var(--muted)]">
                  By continuing, you agree to RKTECH's <Link href="#" className="text-[var(--primary)]">Terms of Use</Link> and <Link href="#" className="text-[var(--primary)]">Privacy Policy</Link>.
                </p>

                <button type="submit" className="w-full py-3.5 bg-[#fb641b] text-white font-bold rounded-sm shadow-sm hover:bg-[#eb5a16] transition-colors mt-2">
                  Request OTP
                </button>
              </form>
            </div>
            
            <div className="mt-8 text-center">
              <Link href="/signup" className="text-[var(--primary)] font-bold text-sm hover:underline">
                New to RKTECH? Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
