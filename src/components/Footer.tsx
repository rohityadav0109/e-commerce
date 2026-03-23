import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#141414] border-t border-[#2e2e2e] pt-16 pb-8 mt-auto">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#f97316] rounded flex items-center justify-center text-white font-black text-sm">RK</div>
              <span className="text-white font-black text-lg tracking-wider">TECH<span className="text-[#f97316]">.</span></span>
            </div>
            <p className="text-[#9ca3af] text-sm font-light leading-relaxed mb-6">
              Elevate your style with premium, hand-curated fashion. Delivered fast. Loved longer.
            </p>
            <div className="flex items-center gap-3">
              {["instagram", "twitter", "facebook"].map(s => (
                <div key={s} className="w-9 h-9 bg-[#1a1a1a] border border-[#2e2e2e] rounded-lg flex items-center justify-center text-[#9ca3af] hover:border-[#f97316] hover:text-[#f97316] transition-all cursor-pointer capitalize text-[10px] font-bold">{s[0].toUpperCase()}</div>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-white text-[11px] font-bold uppercase tracking-[0.15em] mb-6">Shop</h3>
            <ul className="space-y-3">
              {["Best Sellers", "New Arrivals", "Men's Clothing", "Women's Clothing", "Kids Fashion", "Ethnic Wear"].map(item => (
                <li key={item}>
                  <Link href="/products" className="text-[#9ca3af] text-sm hover:text-[#f97316] transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-[11px] font-bold uppercase tracking-[0.15em] mb-6">Company</h3>
            <ul className="space-y-3">
              {[["About Us", "/about"], ["Contact", "/contact"], ["Admin Panel", "/admin"], ["Become a Seller", "#"]].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-[#9ca3af] text-sm hover:text-[#f97316] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-[11px] font-bold uppercase tracking-[0.15em] mb-6">Stay Updated</h3>
            <p className="text-[#9ca3af] text-sm mb-4">Get exclusive deals and trend alerts in your inbox.</p>
            <div className="flex gap-0">
              <input type="email" placeholder="Your email..." className="flex-1 bg-[#1a1a1a] border border-[#2e2e2e] border-r-0 text-white text-sm px-4 py-3 rounded-l-lg focus:border-[#f97316] outline-none placeholder:text-[#555]" />
              <button className="bg-[#f97316] hover:bg-[#ea580c] text-white px-4 py-3 rounded-r-lg text-xs font-bold uppercase tracking-wide transition-colors">
                Go
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#2e2e2e] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#9ca3af] text-xs">© {new Date().getFullYear()} RKTECH. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms", "Shipping Policy"].map(item => (
              <span key={item} className="text-[#9ca3af] text-xs hover:text-[#f97316] cursor-pointer transition-colors">{item}</span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
