import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pb-16">
        {/* Banner Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20 px-4 mt-12 mb-12">
          <div className="container mx-auto text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-6">Redefining Everyday Fashion</h1>
            <p className="text-lg text-[#64748b] leading-relaxed">
              At RKTECH, our mission is to make premium, stylish clothing accessible to everyone. We believe that fashion should be a statement of your individuality, crafted with the finest materials and delivered to your doorstep with unparalleled reliability.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 max-w-5xl">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#1e293b] mb-6">Our Journey</h2>
            <p className="text-[#64748b] leading-relaxed mb-4">
              Founded in 2026, RKTECH started as a small digital storefront curated by a team of fashion enthusiasts. Today, we've grown into a comprehensive marketplace offering thousands of styles across Men's, Women's, and Kids' collections.
            </p>
            <p className="text-[#64748b] leading-relaxed">
              We partner directly with top-tier manufacturers and trusted brands to eliminate the middleman, ensuring you get authentic products at genuinely unbeatable prices. 
            </p>
          </div>
          <div>
            <div className="w-full h-[400px] bg-indigo-100 rounded-2xl overflow-hidden relative shadow-lg">
              <img src="https://images.unsplash.com/photo-1521336575822-6da63fb45455?q=80&w=2670&auto=format&fit=crop" alt="Fashion Store" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="container mx-auto px-4 max-w-5xl mt-24">
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 text-center hover-card">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
              </div>
              <h3 className="text-xl font-bold text-[#1e293b] mb-3">Customer First</h3>
              <p className="text-[#64748b] text-sm">We are obsessed with customer satisfaction. Our 24/7 support and easy return policies ensure a stress-free experience.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 text-center hover-card">
              <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 className="text-xl font-bold text-[#1e293b] mb-3">Value Pricing</h3>
              <p className="text-[#64748b] text-sm">Experience the absolute best deals in the fashion space without compromising a single stitch of quality.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 text-center hover-card">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" x2="7.01" y1="7" y2="7"/></svg>
              </div>
              <h3 className="text-xl font-bold text-[#1e293b] mb-3">Authentic Brands</h3>
              <p className="text-[#64748b] text-sm">We guarantee that 100% of our products are genuine, directly sourced from authorized brand distributors.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
