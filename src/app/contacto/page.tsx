import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Header */}
            <div className="bg-primary text-white py-20 mt-[72px]">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contáctanos</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Estamos aquí para ayudarte a diseñar el baño de tus sueños.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-primary mb-8">Información de Contacto</h2>
                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="bg-secondary/10 p-3 rounded-full">
                                    <MapPin size={24} className="text-secondary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-primary text-lg">Visítanos</h3>
                                    <p className="text-gray-600">Av. Niños Héroes 2891<br />Guadalajara, Jalisco, México</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-secondary/10 p-3 rounded-full">
                                    <Phone size={24} className="text-secondary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-primary text-lg">Llámanos</h3>
                                    <p className="text-gray-600">+52 (33) 1234 5678</p>
                                    <p className="text-gray-500 text-sm">Lunes a Viernes: 9am - 6pm</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-secondary/10 p-3 rounded-full">
                                    <Mail size={24} className="text-secondary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-primary text-lg">Escríbenos</h3>
                                    <p className="text-gray-600">contacto@totalshower.mx</p>
                                    <p className="text-gray-600">ventas@totalshower.mx</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h3 className="text-xl font-serif font-bold text-primary mb-4">Nuestra Ubicación</h3>
                            <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                                {/* Map Placeholder */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.583995899285!2d-103.377!3d20.673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDQwJzIyLjgiTiAxMDPCsDIyJzM3LjIiVw!5e0!3m2!1sen!2smx!4v1620000000000!5m2!1sen!2smx"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 shadow-sm border border-gray-100 rounded-lg">
                        <h2 className="text-3xl font-serif font-bold text-primary mb-6">Envíanos un Mensaje</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-secondary focus:border-secondary transition-colors" placeholder="Tu nombre" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Apellido</label>
                                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-secondary focus:border-secondary transition-colors" placeholder="Tu apellido" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-secondary focus:border-secondary transition-colors" placeholder="tucorreo@ejemplo.com" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Asunto</label>
                                <select className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-secondary focus:border-secondary transition-colors">
                                    <option>Información General</option>
                                    <option>Cotización</option>
                                    <option>Soporte Técnico</option>
                                    <option>Otro</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                                <textarea rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-secondary focus:border-secondary transition-colors" placeholder="¿En qué podemos ayudarte?"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-secondary text-white font-bold py-3 uppercase tracking-widest hover:bg-secondary-light transition-colors flex items-center justify-center">
                                Enviar Mensaje <Send size={18} className="ml-2" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
