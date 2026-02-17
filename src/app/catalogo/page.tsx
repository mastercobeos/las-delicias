import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";
import Link from "next/link";

export default function CatalogPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Header */}
            <div className="bg-primary text-white py-20 mt-[72px]"> {/* mt to account for fixed navbar */}
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Catálogo Completo</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Explora nuestra selección de productos de alta gama diseñados para el baño moderno.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar / Filters (Simple for now) */}
                    <aside className="w-full md:w-64 flex-shrink-0">
                        <div className="bg-white p-6 sticky top-24">
                            <h3 className="font-serif font-bold text-lg mb-6 pb-2 border-b">Categorías</h3>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li>
                                    <Link href="/catalogo" className="block text-secondary font-bold">Todos los productos</Link>
                                </li>
                                <li>
                                    <Link href="/catalogo?cat=griferia" className="block hover:text-secondary transition-colors">Grifería</Link>
                                </li>
                                <li>
                                    <Link href="/catalogo?cat=tinas" className="block hover:text-secondary transition-colors">Tinas</Link>
                                </li>
                                <li>
                                    <Link href="/catalogo?cat=regaderas" className="block hover:text-secondary transition-colors">Regaderas</Link>
                                </li>
                                <li>
                                    <Link href="/catalogo?cat=accesorios" className="block hover:text-secondary transition-colors">Accesorios</Link>
                                </li>
                            </ul>

                            <h3 className="font-serif font-bold text-lg mt-8 mb-6 pb-2 border-b">Precio</h3>
                            <div className="flex gap-2">
                                <input type="number" placeholder="Min" className="w-full p-2 border text-sm" />
                                <input type="number" placeholder="Max" className="w-full p-2 text-sm border" />
                            </div>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
