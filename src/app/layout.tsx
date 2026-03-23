import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { CartProvider } from "@/lib/CartContext";
import CartDrawer from "@/components/CartDrawer";

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800'] });

export const metadata: Metadata = {
  title: "RKTECH | Premium Fashion Store",
  description: "Elevate your style with RKTECH — curated premium clothing for the modern individual.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[#0f0f0f] text-[#f5f5f5] antialiased`}>
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
