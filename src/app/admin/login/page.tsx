"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Simple hardcoded credentials — change these as needed
const ADMIN_EMAIL = "admin@rktech.in";
const ADMIN_PASSWORD = "rktech@2024";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        localStorage.setItem("rktech_admin_auth", "true");
        router.push("/admin");
      } else {
        setError("Invalid credentials. Please try again.");
        setLoading(false);
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#f4f6fb] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>
            </div>
            <span className="text-2xl font-black text-slate-800 tracking-tight">
              RKTECH <span className="text-indigo-600">Admin</span>
            </span>
          </div>
          <p className="text-slate-500 text-sm font-light">Sign in to access your store dashboard</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
          <form onSubmit={handleLogin} className="space-y-5">
            
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@rktech.in"
                required
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all placeholder:text-slate-300"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 pr-12 text-sm text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all placeholder:text-slate-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPass
                    ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" x2="23" y1="1" y2="23"/></svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  }
                </button>
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 bg-red-50 text-red-600 text-sm font-medium px-4 py-3 rounded-xl border border-red-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-bold py-3 rounded-xl text-sm shadow-md hover:shadow-lg transition-all"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                  Verifying...
                </span>
              ) : "Sign In to Dashboard"}
            </button>

          </form>

          {/* Credentials hint */}
          <div className="mt-6 pt-6 border-t border-slate-100">
            <p className="text-[11px] text-slate-400 text-center font-medium uppercase tracking-wider mb-3">Default Credentials</p>
            <div className="bg-slate-50 rounded-xl px-4 py-3 text-xs font-mono text-slate-600 space-y-1">
              <p><span className="text-slate-400">Email:</span> admin@rktech.in</p>
              <p><span className="text-slate-400">Password:</span> rktech@2024</p>
            </div>
          </div>
        </div>

        <p className="text-center text-[11px] text-slate-400 mt-6">
          Not an admin?{" "}
          <a href="/" className="text-indigo-600 font-semibold hover:underline">Return to Store</a>
        </p>
      </div>
    </div>
  );
}
