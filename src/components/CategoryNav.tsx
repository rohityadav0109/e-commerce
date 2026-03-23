import Link from "next/link";

const categories = [
  { label: "Shirts", emoji: "👔", href: "/products?category=Men's Clothing" },
  { label: "T-Shirts", emoji: "👕", href: "/products?category=Men's Clothing" },
  { label: "Jeans", emoji: "👖", href: "/products?category=Men's Clothing" },
  { label: "Kurtas", emoji: "🏅", href: "/products?category=Ethnic Wear" },
  { label: "Women", emoji: "👗", href: "/products?category=Women's Clothing" },
  { label: "Plazos", emoji: "🌸", href: "/products?category=Women's Clothing" },
  { label: "Sherwani", emoji: "🎖️", href: "/products?category=Ethnic Wear" },
  { label: "Kids", emoji: "👶", href: "/products?category=Kids Fashion" },
];

export default function CategoryNav() {
  return (
    <section className="w-full bg-[#141414] border-y border-[#2e2e2e] py-6">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 overflow-x-auto hide-scrollbar">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="flex-shrink-0 flex flex-col items-center gap-2 group"
            >
              <div className="w-14 h-14 bg-[#1a1a1a] border border-[#2e2e2e] rounded-xl flex items-center justify-center text-2xl group-hover:border-[#f97316] group-hover:bg-[#f97316]/10 transition-all duration-200 shadow-sm">
                {cat.emoji}
              </div>
              <span className="text-[10px] font-semibold text-[#9ca3af] group-hover:text-[#f97316] uppercase tracking-wider transition-colors">
                {cat.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
