import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#1a5c38] text-white pt-16 pb-8 border-t border-[#d4a017]/30">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <h3 className="text-2xl font-serif font-bold tracking-widest mb-6">
                            LAS <span className="text-[#f2c94c] italic">DELICIAS</span>
                        </h3>
                        <p className="text-[#f5e6c8]/80 text-sm leading-relaxed mb-6">
                            Sabor auténtico de la Riviera Maya. Una experiencia culinaria donde la tradición mexicana se encuentra con la frescura del mar.
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="#" className="text-white hover:text-[#f2c94c] transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-white hover:text-[#f2c94c] transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-serif mb-6 text-[#f2c94c] tracking-widest">NAVEGACIÓN</h4>
                        <ul className="space-y-3 text-sm text-[#f5e6c8]/70">
                            <li>
                                <Link href="#about" className="hover:text-white transition-colors">
                                    Nuestra Historia
                                </Link>
                            </li>
                            <li>
                                <Link href="#menu" className="hover:text-white transition-colors">
                                    Menú & Especialidades
                                </Link>
                            </li>
                            <li>
                                <Link href="#reviews" className="hover:text-white transition-colors">
                                    Reseñas de Clientes
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="hover:text-white transition-colors">
                                    Reservaciones
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-serif mb-6 text-[#f2c94c] tracking-widest">CONTACTO</h4>
                        <ul className="space-y-4 text-sm text-[#f5e6c8]/70">
                            <li className="flex items-start justify-center md:justify-start space-x-3">
                                <MapPin size={18} className="mt-1 flex-shrink-0 text-[#c23b22]" />
                                <span>Calle 38 Norte y Zona Federal Marítima<br />Playa del Carmen, Q.R.</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start space-x-3">
                                <Phone size={18} className="flex-shrink-0 text-[#c23b22]" />
                                <span>(984) 123-4567</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start space-x-3">
                                <Mail size={18} className="flex-shrink-0 text-[#c23b22]" />
                                <span>reservas@lasdeliciasplaya.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-[#f5e6c8]/10 mt-16 pt-8 text-center text-xs text-[#f5e6c8]/40 uppercase tracking-wider">
                    <p>&copy; {new Date().getFullYear()} Las Delicias Playa del Carmen. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
