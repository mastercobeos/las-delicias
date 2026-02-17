import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ShoppingCart, MessageCircle, Check, Truck, Shield } from "lucide-react";
import Link from "next/link";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="container mx-auto px-4 py-24 mt-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Product Image */}
                    <div className="lg:w-1/2">
                        <div className="relative aspect-square bg-gray-100 overflow-hidden border border-gray-200">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700 cursor-zoom-in"
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-4 mt-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="aspect-square bg-gray-100 border border-gray-200 cursor-pointer hover:border-secondary transition-colors">
                                    {/* Thumbnail placeholders */}
                                    <img src={product.image} alt="Thumbnail" className="w-full h-full object-cover opacity-70 hover:opacity-100" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="lg:w-1/2">
                        <div className="mb-2 text-sm text-gray-500 uppercase tracking-widest">
                            <Link href="/catalogo" className="hover:text-secondary">Catálogo</Link> / <span className="text-secondary">{product.category}</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">{product.name}</h1>

                        <div className="text-2xl font-light text-primary mb-6">
                            ${product.price.toLocaleString()} MXN
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-8 text-lg font-light">
                            {product.description} Este producto combina funcionalidad superior con un diseño estético incomparable. Fabricado con materiales resistentes a la corrosión y acabados de larga duración.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center text-sm text-gray-600">
                                <Check size={18} className="text-green-600 mr-2" />
                                <span>Disponible para envío inmediato</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <Shield size={18} className="text-secondary mr-2" />
                                <span>Garantía de 5 años incluida</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <Truck size={18} className="text-secondary mr-2" />
                                <span>Envío gratuito a todo México</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <button className="flex-1 py-4 bg-primary text-white font-medium hover:bg-gray-800 transition-colors uppercase tracking-widest text-sm flex items-center justify-center">
                                <ShoppingCart size={18} className="mr-2" /> Agregar al Carrito
                            </button>
                            <button className="flex-1 py-4 border border-green-600 text-green-700 font-medium hover:bg-green-50 transition-colors uppercase tracking-widest text-sm flex items-center justify-center">
                                <MessageCircle size={18} className="mr-2" /> Cotizar por WhatsApp
                            </button>
                        </div>

                        <div className="border-t pt-8">
                            <h3 className="font-serif font-bold text-lg mb-4">Especificaciones</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex justify-between border-b pb-2">
                                    <span>Material:</span> <span className="font-medium">Latón macizo / Acrílico</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span>Acabado:</span> <span className="font-medium">Mate / Cepillado</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span>Instalación:</span> <span className="font-medium">Estándar 1/2"</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
