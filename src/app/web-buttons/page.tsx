'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { RefreshCw, ArrowRightLeft, Repeat } from 'lucide-react';

// SVG Mexico Flag Component
const MexicoFlag = ({ className = "w-full h-full" }) => (
    <svg viewBox="0 0 640 480" className={className}>
        <path fill="#006847" d="M0 0h213.3v480H0z" />
        <path fill="#fff" d="M213.3 0h213.4v480H213.3z" />
        <path fill="#ce1126" d="M426.7 0H640v480H426.7z" />
        <circle cx="320" cy="240" r="40" fill="#4d3d2b" opacity="0.3" /> {/* Simplified Crest */}
    </svg>
);

// SVG USA Flag Component
const USAFlag = ({ className = "w-full h-full" }) => (
    <svg viewBox="0 0 741 390" className={className}>
        <rect width="741" height="390" fill="#bf0a30" />
        <path fill="#fff" d="M0 30h741v30H0m0 60h741v30H0m0 60h741v30H0m0 60h741v30H0m0 60h741v30H0m0 60h741v30H0" />
        <rect width="296.4" height="210" fill="#002868" />
        {/* Simplified Stars (White background) */}
        <rect x="20" y="20" width="256" height="170" fill="#fff" opacity="0.1" />
    </svg>
);

const DualFlagButton = ({ title, children, dark }) => (
    <div className={`p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center space-y-6 transition-all border-b-4 ${dark ? 'bg-[#111] border-gray-800' : 'bg-white border-[#1a5c38]'}`}>
        <span className={`text-xs font-black uppercase tracking-widest ${dark ? 'text-gray-600' : 'text-gray-400'}`}>{title}</span>
        {children}
    </div>
);

export default function WebButtonsPage() {
    const [isMX, setIsMX] = useState(true);

    // Auto-intercalate for demo
    useEffect(() => {
        const interval = setInterval(() => {
            setIsMX(prev => !prev);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="min-h-screen bg-[#fefaf3] pb-20 font-sans">
            <Navbar />

            <div className="container mx-auto px-4 pt-40">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-black text-[#103d25] mb-4">Galería de Banderitas Reales</h1>
                    <p className="text-lg text-[#bf5a3a] font-bold">10 diseños usando iconos de banderas vectoriales intercaladas</p>
                    <div className="w-24 h-1 bg-[#f2c94c] mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {/* 1. El Switch Deslizante */}
                    <DualFlagButton title="1. Switch Deslizante">
                        <button
                            onClick={() => setIsMX(!isMX)}
                            className="w-24 h-12 bg-gray-100 rounded-full p-1 flex items-center relative border border-gray-200 shadow-inner"
                        >
                            <div className={`absolute w-10 h-10 rounded-full bg-white shadow-md transition-all duration-500 overflow-hidden ${isMX ? 'left-1' : 'left-[51px]'}`}>
                                {isMX ? <MexicoFlag /> : <USAFlag />}
                            </div>
                            <span className="ml-auto mr-12 text-[10px] font-black text-gray-400">EN</span>
                            <span className="mr-auto ml-12 text-[10px] font-black text-gray-400">ES</span>
                        </button>
                    </DualFlagButton>

                    {/* 2. El Giro (Flip) */}
                    <DualFlagButton title="2. Giro de Moneda">
                        <button
                            onClick={() => setIsMX(!isMX)}
                            className="group perspective-1000 w-16 h-16"
                        >
                            <div className={`relative w-full h-full transition-all duration-700 preserve-3d ${!isMX ? 'rotate-y-180' : ''}`}>
                                <div className="absolute inset-0 backface-hidden overflow-hidden border-2 border-[#1a5c38] rounded-full shadow-md bg-white">
                                    <MexicoFlag />
                                </div>
                                <div className="absolute inset-0 backface-hidden rotate-y-180 overflow-hidden border-2 border-[#c23b22] rounded-full shadow-md bg-white">
                                    <USAFlag />
                                </div>
                            </div>
                        </button>
                    </DualFlagButton>

                    {/* 3. El Fundido (Cross-Fade) */}
                    <DualFlagButton title="3. Fundido Estético">
                        <button
                            onClick={() => setIsMX(!isMX)}
                            className="relative w-20 h-14 bg-white rounded-xl border-2 border-[#f2c94c] shadow-lg overflow-hidden group"
                        >
                            <div className={`absolute inset-0 transition-all duration-700 ${isMX ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}>
                                <MexicoFlag />
                            </div>
                            <div className={`absolute inset-0 transition-all duration-700 ${!isMX ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}>
                                <USAFlag />
                            </div>
                        </button>
                    </DualFlagButton>

                    {/* 4. Cortina Diagonal */}
                    <DualFlagButton title="4. Cortina Diagonal">
                        <button
                            onClick={() => setIsMX(!isMX)}
                            className="w-16 h-16 rounded-full overflow-hidden border-2 border-black relative group"
                        >
                            <div className={`absolute inset-0 transition-transform duration-700 ${isMX ? 'translate-y-0' : '-translate-y-full'}`}>
                                <MexicoFlag />
                            </div>
                            <div className={`absolute inset-0 transition-transform duration-700 ${!isMX ? 'translate-y-0' : 'translate-y-full'}`}>
                                <USAFlag />
                            </div>
                        </button>
                    </DualFlagButton>

                    {/* 5. Círculos Dobles */}
                    <DualFlagButton title="5. Dúo de Banderitas">
                        <div className="flex items-center gap-3">
                            <button onClick={() => setIsMX(true)} className={`w-14 h-14 rounded-full overflow-hidden border-4 transition-all ${isMX ? 'border-[#1a5c38] scale-110 shadow-lg' : 'border-gray-200 grayscale scale-90'}`}>
                                <MexicoFlag />
                            </button>
                            <ArrowRightLeft className="text-[#f2c94c]" size={20} />
                            <button onClick={() => setIsMX(false)} className={`w-14 h-14 rounded-full overflow-hidden border-4 transition-all ${!isMX ? 'border-[#c23b22] scale-110 shadow-lg' : 'border-gray-200 grayscale scale-90'}`}>
                                <USAFlag />
                            </button>
                        </div>
                    </DualFlagButton>

                    {/* 6. Neumorphismo Pro */}
                    <DualFlagButton title="6. Neumorphismo" dark>
                        <button
                            onClick={() => setIsMX(!isMX)}
                            className="w-20 h-20 rounded-full bg-[#111] shadow-[10px_10px_20px_#000,-10px_-10px_20px_#222] flex items-center justify-center p-3 relative overflow-hidden group"
                        >
                            <div className="w-full h-full rounded-full overflow-hidden">
                                {isMX ? <MexicoFlag /> : <USAFlag />}
                            </div>
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </button>
                    </DualFlagButton>

                    {/* 7. Marco Giratorio */}
                    <DualFlagButton title="7. Marco Giratorio">
                        <div className="relative group">
                            <div className={`absolute inset-0 bg-gradient-to-tr from-[#1a5c38] via-[#f2c94c] to-[#c23b22] rounded-full blur-md opacity-40 group-hover:opacity-100 transition-all ${isMX ? 'rotate-0' : 'rotate-180'}`}></div>
                            <button className="relative w-20 h-20 bg-white rounded-full p-2 overflow-hidden shadow-2xl transition-transform active:scale-95">
                                <div className="w-full h-full rounded-full overflow-hidden">
                                    {isMX ? <MexicoFlag /> : <USAFlag />}
                                </div>
                            </button>
                        </div>
                    </DualFlagButton>

                    {/* 8. Estilo de Pestaña (Tab) */}
                    <DualFlagButton title="8. Pestañas Modernas">
                        <div className="flex bg-gray-100 p-1.5 rounded-xl">
                            <button className={`flex items-center gap-2 px-4 py-2 rounded-lg font-black text-xs transition-all ${isMX ? 'bg-white shadow text-[#1a5c38]' : 'text-gray-400'}`} onClick={() => setIsMX(true)}>
                                <div className="w-5 h-5 rounded-full overflow-hidden"><MexicoFlag /></div> ES
                            </button>
                            <button className={`flex items-center gap-2 px-4 py-2 rounded-lg font-black text-xs transition-all ${!isMX ? 'bg-white shadow text-[#c23b22]' : 'text-gray-400'}`} onClick={() => setIsMX(false)}>
                                <div className="w-5 h-5 rounded-full overflow-hidden"><USAFlag /></div> EN
                            </button>
                        </div>
                    </DualFlagButton>

                    {/* 9. Botón Retro (Game Style) */}
                    <DualFlagButton title="9. Retro Game Style">
                        <button className="group relative">
                            <div className="bg-[#1a5c38] w-20 h-20 rounded-xl border-4 border-black shadow-[6px_6px_0_#000] active:shadow-none active:translate-x-1 active:translate-y-1 p-2 transition-all">
                                <div className="w-full h-full border-2 border-black bg-white overflow-hidden">
                                    {isMX ? <MexicoFlag /> : <USAFlag />}
                                </div>
                            </div>
                        </button>
                    </DualFlagButton>

                    {/* 10. Split Vertical (Desplazamiento) */}
                    <DualFlagButton title="10. Desplazamiento Flash">
                        <button
                            onClick={() => setIsMX(!isMX)}
                            className="w-16 h-24 bg-white border-2 border-black rounded-full overflow-hidden flex flex-col items-center transition-all shadow-lg"
                        >
                            <div className={`flex flex-col items-center gap-4 py-2 transition-transform duration-500 ${isMX ? 'translate-y-0' : '-translate-y-[100px]'}`}>
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100 shadow-sm"><MexicoFlag /></div>
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100 shadow-sm"><USAFlag /></div>
                            </div>
                        </button>
                    </DualFlagButton>

                </div>

                <div className="mt-20 p-10 bg-[#1a5c38] rounded-3xl text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-green-500 via-white to-red-500"></div>
                    <h2 className="text-3xl font-black text-white mb-6">¿Cuál "banderita" ponemos?</h2>
                    <p className="text-[#f2c94c] font-bold mb-10 max-w-2xl mx-auto">
                        He sustituido los emojis por iconos vectoriales de alta calidad (Banderitas reales) para que el sitio luzca mucho más profesional y auténtico.
                    </p>
                    <a href="/" className="px-10 py-4 bg-white text-[#1a5c38] font-black rounded-full shadow-lg hover:scale-105 transition-all uppercase text-sm tracking-widest">
                        Volver al Restaurante
                    </a>
                </div>
            </div>

            <style jsx global>{`
                .perspective-1000 { perspective: 1000px; }
                .preserve-3d { transform-style: preserve-3d; }
                .backface-hidden { backface-visibility: hidden; }
                .rotate-y-180 { transform: rotateY(180deg); }
            `}</style>
        </main>
    );
}
