import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 w-full bg-[#f8fafc] py-12">
        <div className="container mx-auto px-4 max-w-6xl">

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#1e293b] mb-4">How can we help you?</h1>
            <p className="text-[#64748b]">Whether you have a question about our clothing, styling tips, or orders, our team is ready to answer all your questions.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#64748b] mb-2 uppercase tracking-wide">Full Name</label>
                    <input type="text" className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-blue-100 transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#64748b] mb-2 uppercase tracking-wide">Email Address</label>
                    <input type="email" className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-blue-100 transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#64748b] mb-2 uppercase tracking-wide">Subject</label>
                  <select className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-blue-100 transition-all bg-white">
                    <option>Order Status / Tracking</option>
                    <option>Returns & Exchanges</option>
                    <option>Product Inquiry</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#64748b] mb-2 uppercase tracking-wide">Message</label>
                  <textarea rows={5} className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-blue-100 transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="bg-[var(--primary)] text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-[var(--primary-hover)] transition-all hover:shadow-lg transform hover:-translate-y-0.5">
                  Send Message
                </button>
              </form>
            </div>

            {/* Side Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 p-8 hover-card">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-[#1e293b] mb-2">Phone Support</h3>
                <p className="text-[#64748b] mb-4 text-sm">Our fashion experts are available Mon-Sat, 9AM-8PM.</p>
                <div className="text-lg font-bold text-[var(--primary)]">6367446220</div>
              </div>

              <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 p-8 hover-card">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                </div>
                <h3 className="text-xl font-bold text-[#1e293b] mb-2">Email Us</h3>
                <p className="text-[#64748b] mb-4 text-sm">Drop us an email anytime, and we'll reply within 24 hours.</p>
                <div className="text-lg font-bold text-[var(--primary)]">yadavrr9784@gmail.com</div>
              </div>

              <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 p-8 hover-card">
                <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <h3 className="text-xl font-bold text-[#1e293b] mb-2">Head Office</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">
                  RKTECH Internet Private Limited,<br />
                  Buildings yadav, house,<br />
                  shishu, Bsikar - 332405.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
