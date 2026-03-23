// Separate layout for /admin — completely different from the main store
// No CartProvider needed here, no dark theme

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "RKTECH Admin Panel",
  description: "Manage products and store data",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[#f4f6fb] text-[#1e293b] antialiased`}>
        {children}
      </body>
    </html>
  );
}
