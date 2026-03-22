export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  rating: number;
}

export const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Aether Pods Pro",
    price: 249,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2065&auto=format&fit=crop",
    rating: 4.8
  },
  {
    id: "2",
    name: "Lumina Watch S4",
    price: 599,
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1544006659-f0b21f04cb6e?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9
  },
  {
    id: "3",
    name: "Nebula Glass V2",
    price: 1299,
    category: "VR/AR",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop",
    rating: 4.7
  },
  {
    id: "4",
    name: "Quantum Keyboard",
    price: 189,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1512756783939-ad756f3b0a3d?q=80&w=2050&auto=format&fit=crop",
    rating: 4.6
  }
];
