"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  featured: boolean;
}

const EMPTY_FORM = {
  name: "", description: "", price: "", image: "",
  category: "Men's Clothing", rating: "4.0", featured: false,
};

const CATEGORIES = ["Men's Clothing", "Women's Clothing", "Kids Fashion", "Ethnic Wear"];

export default function AdminPage() {
  const router = useRouter();
  const [authed, setAuthed] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ ...EMPTY_FORM });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);

  // ---- Auth Guard ----
  useEffect(() => {
    const isAuth = localStorage.getItem("rktech_admin_auth") === "true";
    if (!isAuth) {
      router.replace("/admin/login");
    } else {
      setAuthed(true);
    }
  }, [router]);

  const showToast = (msg: string, type: "success" | "error" = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(Array.isArray(data) ? data : []);
    } catch {
      showToast("Failed to load products", "error");
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (authed) fetchProducts();
  }, [authed, fetchProducts]);

  const openAdd = () => {
    setForm({ ...EMPTY_FORM });
    setEditingId(null);
    setShowForm(true);
  };

  const openEdit = (product: Product) => {
    setForm({
      name: product.name, description: product.description,
      price: String(product.price), image: product.image,
      category: product.category, rating: String(product.rating),
      featured: product.featured,
    });
    setEditingId(product.id);
    setShowForm(true);
  };

  const handleSave = async () => {
    if (!form.name || !form.price || !form.image) {
      showToast("Name, Price, and Image are required", "error");
      return;
    }
    setSaving(true);
    const url = editingId ? `/api/products/${editingId}` : "/api/products";
    const method = editingId ? "PUT" : "POST";
    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        showToast(editingId ? "Product updated!" : "Product added!");
        setShowForm(false);
        fetchProducts();
      } else {
        const err = await res.json();
        showToast(err.details || "Save failed", "error");
      }
    } catch {
      showToast("Network error", "error");
    }
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
      if (res.ok) {
        showToast("Product deleted");
        setDeleteId(null);
        fetchProducts();
      }
    } catch {
      showToast("Delete failed", "error");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("rktech_admin_auth");
    router.push("/admin/login");
  };

  // Show nothing while checking auth
  if (!authed) return null;

  return (
    <div className="min-h-screen bg-[#f4f6fb] flex flex-col">

      {/* ===== Admin Header ===== */}
      <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-indigo-600 rounded flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>
            </div>
            <span className="font-bold text-slate-800 tracking-tight">RKTECH <span className="text-indigo-600">Admin</span></span>
            <span className="hidden sm:block text-[10px] bg-indigo-100 text-indigo-700 font-bold px-2 py-0.5 rounded-full ml-1 uppercase tracking-wide">Dashboard</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" target="_blank" className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-indigo-600 font-semibold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
              View Store
            </Link>
            <button onClick={openAdd} className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5v14"/></svg>
              Add Product
            </button>
            <button onClick={handleLogout} className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-red-500 font-semibold transition-colors border border-slate-200 hover:border-red-200 px-3 py-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-[1400px] w-full mx-auto px-6 py-8">

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Products", value: products.length, icon: "📦", border: "border-blue-100", text: "text-blue-600", bg: "bg-blue-50" },
            { label: "Featured", value: products.filter(p => p.featured).length, icon: "⭐", border: "border-yellow-100", text: "text-yellow-600", bg: "bg-yellow-50" },
            { label: "Categories", value: new Set(products.map(p => p.category)).size, icon: "🏷️", border: "border-purple-100", text: "text-purple-600", bg: "bg-purple-50" },
            { label: "Avg. Rating", value: products.length ? (products.reduce((s,p)=>s+p.rating,0)/products.length).toFixed(1) : "—", icon: "📊", border: "border-green-100", text: "text-green-600", bg: "bg-green-50" },
          ].map((stat) => (
            <div key={stat.label} className={`bg-white border ${stat.border} rounded-xl p-4 flex items-center gap-3 shadow-sm`}>
              <span className="text-2xl">{stat.icon}</span>
              <div>
                <p className={`text-2xl font-black ${stat.text}`}>{stat.value}</p>
                <p className="text-[11px] text-slate-500 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-bold text-slate-800 text-lg">Products</h2>
            <span className="text-sm text-slate-400">{products.length} item{products.length !== 1 ? 's' : ''}</span>
          </div>
          {loading ? (
            <div className="flex justify-center items-center h-48">
              <div className="w-7 h-7 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : products.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-slate-400">
              <span className="text-5xl mb-4">📭</span>
              <p className="font-medium">No products yet</p>
              <button onClick={openAdd} className="mt-4 text-indigo-600 font-semibold text-sm hover:underline">Add your first product →</button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-500 text-[11px] uppercase tracking-wide">
                  <tr>
                    <th className="px-6 py-3 font-semibold">Product</th>
                    <th className="px-4 py-3 font-semibold">Category</th>
                    <th className="px-4 py-3 font-semibold">Price</th>
                    <th className="px-4 py-3 font-semibold">Rating</th>
                    <th className="px-4 py-3 font-semibold">Featured</th>
                    <th className="px-4 py-3 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {products.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-slate-100 overflow-hidden flex-shrink-0 border border-slate-200">
                            <img src={p.image} alt="" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src='https://placehold.co/40x40?text=?'; }} />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-800 line-clamp-1">{p.name}</p>
                            <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{p.description}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4"><span className="inline-block bg-indigo-50 text-indigo-700 text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap">{p.category}</span></td>
                      <td className="px-4 py-4 font-bold text-slate-800">₹{p.price.toLocaleString('en-IN')}</td>
                      <td className="px-4 py-4"><span className="flex items-center gap-1 text-amber-500 font-bold text-sm">⭐ {p.rating}</span></td>
                      <td className="px-4 py-4"><span className={`inline-block text-[10px] font-bold px-2 py-1 rounded-full ${p.featured ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-400'}`}>{p.featured ? '✓ Yes' : 'No'}</span></td>
                      <td className="px-4 py-4">
                        <div className="flex justify-end gap-2">
                          <button onClick={() => openEdit(p)} className="flex items-center gap-1.5 text-[11px] font-bold text-indigo-600 hover:bg-indigo-50 px-3 py-1.5 rounded-lg transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4Z"/></svg>
                            Edit
                          </button>
                          <button onClick={() => setDeleteId(p.id)} className="flex items-center gap-1.5 text-[11px] font-bold text-red-500 hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* ===== ADD / EDIT MODAL ===== */}
      {showForm && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <h3 className="font-bold text-lg text-slate-800">{editingId ? 'Edit Product' : 'Add New Product'}</h3>
              <button onClick={() => setShowForm(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </button>
            </div>
            <div className="p-6 space-y-4">
              {form.image && (
                <div className="w-full h-40 bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
                  <img src={form.image} alt="preview" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; }} />
                </div>
              )}
              {[
                { key: 'name', label: 'Product Name *', type: 'text', placeholder: 'e.g. Slim Fit Cotton Shirt' },
                { key: 'price', label: 'Price (₹) *', type: 'number', placeholder: 'e.g. 999' },
                { key: 'image', label: 'Image URL *', type: 'text', placeholder: 'https://example.com/image.jpg' },
                { key: 'rating', label: 'Rating (1–5)', type: 'number', placeholder: '4.0' },
              ].map(({ key, label, type, placeholder }) => (
                <div key={key}>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-1.5">{label}</label>
                  <input type={type} value={form[key as keyof typeof form] as string} onChange={(e) => setForm(f => ({ ...f, [key]: e.target.value }))} placeholder={placeholder} step={key === 'rating' ? '0.1' : undefined}
                    className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all placeholder:text-slate-300" />
                </div>
              ))}
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-1.5">Category</label>
                <select value={form.category} onChange={(e) => setForm(f => ({ ...f, category: e.target.value }))} className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-indigo-500 bg-white">
                  {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-1.5">Description</label>
                <textarea rows={3} value={form.description} onChange={(e) => setForm(f => ({ ...f, description: e.target.value }))} placeholder="Brief product description..."
                  className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-indigo-500 resize-none placeholder:text-slate-300" />
              </div>
              <label className="flex items-center gap-3 cursor-pointer select-none">
                <div onClick={() => setForm(f => ({ ...f, featured: !f.featured }))} className={`relative w-10 h-5 rounded-full transition-colors ${form.featured ? 'bg-indigo-600' : 'bg-slate-200'}`}>
                  <div className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${form.featured ? 'translate-x-5' : ''}`}></div>
                </div>
                <span className="text-sm font-medium text-slate-700">Mark as Featured</span>
              </label>
            </div>
            <div className="px-6 pb-6 flex gap-3">
              <button onClick={() => setShowForm(false)} className="flex-1 border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold py-2.5 rounded-xl transition-colors text-sm">Cancel</button>
              <button onClick={handleSave} disabled={saving} className="flex-1 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold py-2.5 rounded-xl transition-colors text-sm shadow-sm">
                {saving ? 'Saving...' : editingId ? 'Update Product' : 'Add Product'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== DELETE CONFIRM ===== */}
      {deleteId && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center">
            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </div>
            <h3 className="font-bold text-xl text-slate-800 mb-2">Delete Product?</h3>
            <p className="text-slate-500 text-sm mb-6">This action cannot be undone.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteId(null)} className="flex-1 border border-slate-200 text-slate-600 font-semibold py-2.5 rounded-xl hover:bg-slate-50 transition-colors text-sm">Cancel</button>
              <button onClick={() => handleDelete(deleteId)} className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-2.5 rounded-xl transition-colors text-sm shadow-sm">Yes, Delete</button>
            </div>
          </div>
        </div>
      )}

      {/* ===== TOAST ===== */}
      {toast && (
        <div className={`fixed bottom-6 right-6 z-[400] flex items-center gap-3 px-5 py-3 rounded-xl shadow-xl text-white font-bold text-sm ${toast.type === 'success' ? 'bg-green-600' : 'bg-red-500'}`}>
          {toast.type === 'success'
            ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6 9 17l-5-5"/></svg>
            : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
          }
          {toast.msg}
        </div>
      )}
    </div>
  );
}
