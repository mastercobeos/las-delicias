"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Facebook, Instagram, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

// SVG Mexico Flag Component
const MexicoFlag = ({ className = "w-full h-full" }: { className?: string }) => (
    <svg viewBox="0 0 640 480" className={className}>
        <path fill="#006847" d="M0 0h213.3v480H0z" />
        <path fill="#fff" d="M213.3 0h213.4v480H213.3z" />
        <path fill="#ce1126" d="M426.7 0H640v480H426.7z" />
        <circle cx="320" cy="240" r="40" fill="#4d3d2b" opacity="0.3" />
    </svg>
);

// SVG USA Flag Component with Stars
const USAFlag = ({ className = "w-full h-full" }: { className?: string }) => (
    <svg viewBox="0 0 741 390" className={className}>
        <rect width="741" height="390" fill="#bf0a30" />
        <path fill="#fff" d="M0 30h741v30H0m0 60h741v30H0m0 60h741v30H0m0 60h741v30H0m0 60h741v30H0m0 60h741v30H0" />
        <rect width="296.4" height="210" fill="#002868" />
        <g fill="#fff">
            <g id="s">
                <g id="c">
                    <path id="t" d="M24.7 12l2.5 8.2h8.6l-7 5 2.6 8.2-6.9-5.2-7 5.2 2.7-8.2-7-5h8.6z" />
                    <use xlinkHref="#t" x="49.4" />
                    <use xlinkHref="#t" x="98.8" />
                    <use xlinkHref="#t" x="148.2" />
                    <use xlinkHref="#t" x="197.6" />
                </g>
                <use xlinkHref="#c" y="42" />
                <use xlinkHref="#c" y="84" />
                <use xlinkHref="#c" y="126" />
            </g>
            <use xlinkHref="#s" y="21" x="24.7" />
        </g>
    </svg>
);

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const { isEnglish, toggleLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 0);

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const links = [
        { name: t("Inicio", "Home"), href: "#hero" },
        { name: t("Historia", "Our Story"), href: "#about" },
        { name: t("Menú", "Menu"), href: "#menu" },
        { name: t("Reseñas", "Reviews"), href: "#reviews" },
    ];

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-[5%] right-[5%] w-[90%] z-[1000] transition-all duration-300 ease-in-out rounded-b-2xl",
                    !showHeader ? "-translate-y-full" : "translate-y-0",
                    isScrolled
                        ? "bg-[linear-gradient(90deg,#c23b22_0%,#c23b22_33.33%,#ffffff_33.33%,#ffffff_66.66%,#1a5c38_66.66%,#1a5c38_100%)] shadow-2xl py-1 md:py-2"
                        : "bg-[linear-gradient(90deg,#c23b22_0%,#c23b22_33.33%,#ffffff_33.33%,#ffffff_66.66%,#1a5c38_66.66%,#1a5c38_100%)] shadow-2xl py-2 md:py-3"
                )}
            >
                <div className="w-full h-full flex items-center px-4 md:px-0">
                    {/* 1. Left Section - Logo (on Red) */}
                    <div className="flex-[1] h-full flex items-center md:pl-8">
                        <Link href="/">
                            <img
                                src="/logo.png"
                                alt="Las Delicias"
                                className="h-16 md:h-24 w-auto object-contain transition-transform hover:scale-105 drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)]"
                            />
                        </Link>
                    </div>

                    {/* 2. Center Section - Navigation (on White) */}
                    <div className="flex-[1] h-full hidden md:flex items-center justify-center space-x-5 lg:space-x-8">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-[10px] lg:text-[12px] uppercase tracking-[0.2em] text-[#1a5c38] hover:text-[#c23b22] transition-colors font-black whitespace-nowrap"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* 3. Right Section - Actions (on Green) */}
                    <div className="flex-[1] h-full flex items-center justify-end md:pr-8 space-x-4 md:space-x-6">
                        {/* Language Switcher (3D Flip) — translucent background */}
                        <button
                            onClick={toggleLanguage}
                            className="perspective-1000 w-8 h-8 md:w-9 md:h-9 flex-shrink-0"
                            title={isEnglish ? "Cambiar a Español" : "Switch to English"}
                        >
                            <div
                                className={cn(
                                    "relative w-full h-full transition-all duration-700 preserve-3d",
                                    isEnglish && "rotate-y-180"
                                )}
                            >
                                <div className="absolute inset-0 backface-hidden overflow-hidden border border-white/40 rounded-full shadow-md bg-white/20 backdrop-blur-sm">
                                    <MexicoFlag />
                                </div>
                                <div className="absolute inset-0 backface-hidden rotate-y-180 overflow-hidden border border-white/40 rounded-full shadow-md bg-white/20 backdrop-blur-sm">
                                    <USAFlag />
                                </div>
                            </div>
                        </button>

                        {/* Desktop Reservar Button */}
                        <a
                            href="#contact"
                            className="hidden md:block bg-[#f2c94c] text-black px-5 lg:px-7 py-2 rounded-full text-[10px] lg:text-[11px] font-black tracking-[0.15em] hover:bg-white transition-all shadow-md active:scale-95 whitespace-nowrap"
                        >
                            {t("RESERVAR", "BOOK NOW")}
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-[#f2c94c] focus:outline-none"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <X size={26} strokeWidth={3} />
                            ) : (
                                <Menu size={26} strokeWidth={3} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-[#fdf6ec] border-t border-[#1a5c38]/20 absolute w-full left-0 top-full shadow-xl rounded-b-2xl">
                        <div className="flex flex-col py-6 px-6 space-y-4">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-[#1a5c38] hover:text-[#c23b22] font-bold uppercase tracking-widest text-sm border-b border-[#1a5c38]/10 pb-3"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="#contact"
                                className="bg-[#c23b22] text-white text-center py-3 rounded-full font-black text-sm tracking-widest mt-2 shadow-lg"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {t("RESERVAR", "BOOK NOW")}
                            </a>
                            {/* Mobile Language Switcher — translucent background */}
                            <button
                                onClick={toggleLanguage}
                                className="perspective-1000 w-14 h-14 mx-auto mt-2"
                            >
                                <div
                                    className={cn(
                                        "relative w-full h-full transition-all duration-700 preserve-3d",
                                        isEnglish && "rotate-y-180"
                                    )}
                                >
                                    <div className="absolute inset-0 backface-hidden overflow-hidden border-2 border-white/30 rounded-full shadow-lg bg-white/20 backdrop-blur-sm">
                                        <MexicoFlag />
                                    </div>
                                    <div className="absolute inset-0 backface-hidden rotate-y-180 overflow-hidden border-2 border-white/30 rounded-full shadow-lg bg-white/20 backdrop-blur-sm">
                                        <USAFlag />
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Social Media Sidebar - Fixed Right */}
            <div className="hidden md:flex fixed right-6 top-32 flex-col gap-4 z-[990]">
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/90 backdrop-blur text-[#1877F2] rounded-full flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all shadow-lg hover:scale-110 hover:-translate-x-1"
                    title="Facebook"
                >
                    <Facebook size={20} />
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/90 backdrop-blur text-[#E4405F] rounded-full flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-all shadow-lg hover:scale-110 hover:-translate-x-1"
                    title="Instagram"
                >
                    <Instagram size={20} />
                </a>
                <a
                    href="https://wa.me/5219841234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/90 backdrop-blur text-[#25D366] rounded-full flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all shadow-lg hover:scale-110 hover:-translate-x-1"
                    title="WhatsApp"
                >
                    <MessageCircle size={20} />
                </a>
            </div>
        </>
    );
};

export default Navbar;
