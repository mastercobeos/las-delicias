'use client';

import { useState, useEffect, useCallback, useRef } from "react";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/context/LanguageContext";

const HERO_SLIDES = [
    {
        image: "/images/pozole-1.jpg",
        title_es: "Pozole Rojo",
        title_en: "Red Pozole",
        subtitle_es: "Tradición en cada cucharada",
        subtitle_en: "Tradition in every spoonful"
    },
    {
        image: "/images/pozole-4.jpg",
        title_es: "Pozole Verde",
        title_en: "Green Pozole",
        subtitle_es: "El sabor de Guerrero",
        subtitle_en: "Guerrero's flavor"
    },
    {
        image: "/images/pozole-3.jpg",
        title_es: "Pozole Blanco",
        title_en: "White Pozole",
        subtitle_es: "Receta ancestral",
        subtitle_en: "Ancestral recipe"
    },
    {
        image: "/images/pozole-4.jpg",
        title_es: "Complementos Frescos",
        title_en: "Fresh Toppings",
        subtitle_es: "Al gusto",
        subtitle_en: "To your taste"
    },
    {
        image: "/images/pozole-1.jpg",
        title_es: "Mesa Mexicana",
        title_en: "Mexican Table",
        subtitle_es: "Para compartir",
        subtitle_en: "To share"
    }
];

const MENU_ITEMS = [
    {
        title_es: "Pozole Rojo Guerrero",
        title_en: "Red Pozole Guerrero Style",
        description_es: "El rey de la mesa. Caldo de maíz cacahuazintle con carne de cerdo, servido con rábano, lechuga, orégano y limón. ¡Una explosión de sabor tradicional!",
        description_en: "The king of the table. Hominy corn soup with pork, served with radish, lettuce, oregano and lime. A burst of traditional flavor!",
        price: "$240 MXN",
        label: "Pozole",
        image: "/images/pozole-1.jpg",
        gradient: "linear-gradient(135deg, #c23b22 0%, #1a5c38 100%)"
    },
    {
        title_es: "Tacos al Pastor Real",
        title_en: "Authentic Tacos al Pastor",
        description_es: "Carne de cerdo marinada en achiote y especias, cocinada lentamente en trompo. Servidos con piña, cebolla, cilantro y salcita habanera.",
        description_en: "Pork marinated in achiote and spices, slow-cooked on a spit. Served with pineapple, onion, cilantro and habanero salsa.",
        price: "$180 MXN",
        label: "Tacos",
        image: "/images/pozole-4.jpg",
        gradient: "linear-gradient(135deg, #e4007c 0%, #f2c94c 100%)"
    },
    {
        title_es: "Ceviche Tropical",
        title_en: "Tropical Ceviche",
        description_es: "Pesca del día marinada en cítricos frescos, con mango maduro, aguacate cremoso y un toque sutil de habanero. Servido con totopos artesanales.",
        description_en: "Catch of the day marinated in fresh citrus, with ripe mango, creamy avocado and a subtle touch of habanero. Served with artisan tortilla chips.",
        price: "$280 MXN",
        label: "Ceviche",
        image: "/images/pozole-3.jpg",
        gradient: "linear-gradient(135deg, #f5e6c8 0%, #00897b 100%)"
    },
    {
        title_es: "Pozole Verde Estilo Norte",
        title_en: "Northern Style Green Pozole",
        description_es: "Deliciosa variante preparada con tomate verde, pepita de calabaza y chiles serranos. Servido con carne de pollo deshebrada, aguacate y chicharrón.",
        description_en: "Delicious variant prepared with green tomato, pumpkin seeds and serrano peppers. Served with shredded chicken, avocado and pork rinds.",
        price: "$240 MXN",
        label: "Pozole Verde",
        image: "/images/pozole-4.jpg",
        gradient: "linear-gradient(135deg, #f2c94c 0%, #c23b22 100%)"
    }
];

const REVIEWS = [
    {
        name: "María González",
        rating: 5,
        text_es: "¡Increíble experiencia! El ceviche es el mejor que he probado en Playa del Carmen. El ambiente es perfecto para una cena romántica.",
        text_en: "Incredible experience! The ceviche is the best I've tried in Playa del Carmen. The atmosphere is perfect for a romantic dinner.",
        date_es: "Hace 2 semanas",
        date_en: "2 weeks ago"
    },
    {
        name: "John Smith",
        rating: 5,
        text_es: "¡Mariscos excepcionales! La langosta estaba cocinada a la perfección. Gran servicio y hermosas vistas al mar. ¡Muy recomendable!",
        text_en: "Outstanding seafood! The lobster was cooked to perfection. Great service and beautiful ocean views. Highly recommended!",
        date_es: "Hace 1 mes",
        date_en: "1 month ago"
    },
    {
        name: "Carlos Ramírez",
        rating: 5,
        text_es: "Excelente relación calidad-precio. Los platillos son frescos y deliciosos. El personal es muy atento y profesional.",
        text_en: "Excellent value for money. The dishes are fresh and delicious. The staff is very attentive and professional.",
        date_es: "Hace 3 semanas",
        date_en: "3 weeks ago"
    },
    {
        name: "Sophie Laurent",
        rating: 4,
        text_es: "¡Una experiencia culinaria excepcional! Los mariscos tienen una frescura incomparable. ¡Se los recomiendo mucho!",
        text_en: "An exceptional culinary experience! The seafood is incomparably fresh. I highly recommend it!",
        date_es: "Hace 1 semana",
        date_en: "1 week ago"
    }
];

export default function Home() {
    const { t, isEnglish } = useLanguage();

    const [heroSlide, setHeroSlide] = useState(0);
    const [menuSlide, setMenuSlide] = useState(0);
    const [reviewSlide, setReviewSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const heroTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const menuTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const reviewTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    // Hero slider auto-advance
    useEffect(() => {
        heroTimerRef.current = setInterval(() => {
            setHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 3000);
        return () => { if (heroTimerRef.current) clearInterval(heroTimerRef.current); };
    }, []);

    // Detect mobile
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Set initial
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Menu shows 2 items at a time on desktop, 1 on mobile
    const itemsPerView = isMobile ? 1 : 2;
    const maxMenuSlide = Math.ceil(MENU_ITEMS.length / itemsPerView) - 1;

    // Reset menu timer whenever slide changes
    const resetMenuTimer = useCallback(() => {
        if (menuTimerRef.current) clearInterval(menuTimerRef.current);
        menuTimerRef.current = setInterval(() => {
            setMenuSlide((prev) => {
                const next = prev + 1;
                return next > maxMenuSlide ? 0 : next;
            });
        }, 3000);
    }, [maxMenuSlide]);

    // Ensure current slide is valid on resize
    useEffect(() => {
        if (menuSlide > maxMenuSlide) {
            setMenuSlide(0);
        }
    }, [maxMenuSlide, menuSlide]);

    // Reset review timer whenever slide changes
    const resetReviewTimer = useCallback(() => {
        if (reviewTimerRef.current) clearInterval(reviewTimerRef.current);
        reviewTimerRef.current = setInterval(() => {
            setReviewSlide((prev) => (prev + 1) % REVIEWS.length);
        }, 3000);
    }, []);

    useEffect(() => {
        resetMenuTimer();
        return () => { if (menuTimerRef.current) clearInterval(menuTimerRef.current); };
    }, [resetMenuTimer]);

    useEffect(() => {
        resetReviewTimer();
        return () => { if (reviewTimerRef.current) clearInterval(reviewTimerRef.current); };
    }, [resetReviewTimer]);

    const goToMenuSlide = (index: number) => {
        setMenuSlide(index);
        resetMenuTimer();
    };

    const goToReviewSlide = (index: number) => {
        setReviewSlide(index);
        resetReviewTimer();
    };

    const currentHeroSlide = HERO_SLIDES[heroSlide];

    return (
        <>
            <Navbar />
            {/* ===== HERO WITH PHOTO SLIDER ===== */}
            <section id="hero" className="relative overflow-hidden w-full max-w-[100vw]">
                {/* Background Image Slides */}
                {HERO_SLIDES.map((slide, index) => (
                    <div
                        key={index}
                        className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                        style={{
                            opacity: index === heroSlide ? 1 : 0,
                            zIndex: index === heroSlide ? 1 : 0
                        }}
                    >
                        <img
                            src={slide.image}
                            alt={isEnglish ? slide.title_en : slide.title_es}
                            className="w-full h-full object-cover block"
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        />
                        <div className="absolute inset-0 bg-black/50" />
                    </div>
                ))}

                {/* Hero Text Content */}
                <div className="hero-content relative" style={{ zIndex: 2 }}>

                    <h1>Las Delicias<br />Playa del Carmen</h1>
                    <p>
                        {t(
                            "Donde el mar se encuentra con la mesa. Una experiencia culinaria que celebra los sabores auténticos de la Riviera Maya con ingredientes frescos del día y la calidez de la hospitalidad mexicana.",
                            "Where the sea meets the table. A culinary experience that celebrates the authentic flavors of the Riviera Maya with fresh daily ingredients and the warmth of Mexican hospitality."
                        )}
                    </p>
                    <a href="#menu" className="btn">{t("Descubre Nuestro Menú", "Discover Our Menu")}</a>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3" style={{ zIndex: 3 }}>
                    {HERO_SLIDES.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setHeroSlide(index);
                                if (heroTimerRef.current) clearInterval(heroTimerRef.current);
                                heroTimerRef.current = setInterval(() => {
                                    setHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
                                }, 3000);
                            }}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === heroSlide
                                ? 'bg-[#f2c94c] scale-125 shadow-lg'
                                : 'bg-white/50 hover:bg-white/80'
                                }`}
                            aria-label={`${t("Ir a foto", "Go to photo")} ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Current Dish Name Overlay */}
                <div className="absolute bottom-20 right-8 md:right-16 text-right" style={{ zIndex: 3 }}>
                    <p className="text-[#f2c94c] text-xs md:text-sm uppercase tracking-[0.3em] font-black">
                        {isEnglish ? currentHeroSlide.subtitle_en : currentHeroSlide.subtitle_es}
                    </p>
                    <p className="text-white text-2xl md:text-4xl font-black">
                        {isEnglish ? currentHeroSlide.title_en : currentHeroSlide.title_es}
                    </p>
                </div>
            </section>

            {/* ===== ABOUT ===== */}
            <section id="about">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-text">
                            <p className="section-subtitle">{t("Desde 2010", "Since 2010")}</p>
                            <h2 className="section-title">{t("Nuestra Esencia", "Our Essence")}</h2>
                            <p>
                                {t(
                                    <>En el corazón de Playa del Carmen, <strong>Las Delicias</strong> nació de una pasión profunda por el mar y la tradición culinaria mexicana. Cada mañana, nuestros chefs seleccionan personalmente los mariscos más frescos directamente de los pescadores locales.</>,
                                    <>In the heart of Playa del Carmen, <strong>Las Delicias</strong> was born from a deep passion for the sea and Mexican culinary tradition. Every morning, our chefs personally select the freshest seafood directly from local fishermen.</>
                                )}
                            </p>
                            <p>
                                {t(
                                    "Creemos que una comida excepcional es más que nutrición—es un ritual, una celebración. Aquí, bajo las estrellas y con el murmullo de las olas como melodía de fondo, ofrecemos una experiencia que permanece en la memoria.",
                                    "We believe that an exceptional meal is more than nutrition—it's a ritual, a celebration. Here, under the stars and with the murmur of waves as background melody, we offer an experience that stays in your memory."
                                )}
                            </p>
                            <p>
                                {t(
                                    "Nuestro compromiso es simple: ingredientes de la más alta calidad, preparados con técnica y servidos con alma.",
                                    "Our commitment is simple: the highest quality ingredients, prepared with technique and served with soul."
                                )}
                            </p>
                            <a href="#contact" className="btn">{t("Conoce Más", "Learn More")}</a>
                        </div>
                        <div className="about-img-placeholder" style={{ padding: 0 }}>
                            <img
                                src="/images/pozole-3.jpg"
                                alt={t("Pozole tradicional casero", "Traditional homemade pozole")}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== MENU SLIDER ===== */}
            <section id="menu">
                <div className="container text-center">
                    <p className="section-subtitle">{t("Del Mar a Tu Mesa", "From Sea to Table")}</p>
                    <h2 className="section-title">{t("Platillos Destacados", "Featured Dishes")}</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto 3rem', opacity: 0.8 }}>
                        {t(
                            "Una selección curada de nuestras creaciones más celebradas.",
                            "A curated selection of our most celebrated creations."
                        )}
                    </p>

                    <div className="slider-container menu-slider">
                        <div
                            className="slider-wrapper"
                            style={{ transform: `translateX(-${menuSlide * 100}%)` }}
                        >
                            {MENU_ITEMS.map((item, index) => (
                                <div key={index} className="slider-item menu-slide-item">
                                    <div className="menu-item">
                                        <div
                                            className="menu-img-placeholder relative overflow-hidden"
                                            style={{ background: item.gradient }}
                                        >
                                            {item.image ? (
                                                <img
                                                    src={item.image}
                                                    alt={isEnglish ? item.title_en : item.title_es}
                                                    className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                                />
                                            ) : (
                                                item.label
                                            )}
                                        </div>
                                        <div className="menu-info">
                                            <h3>{isEnglish ? item.title_en : item.title_es}</h3>
                                            <p>{isEnglish ? item.description_en : item.description_es}</p>
                                            <span className="price">{item.price}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            className="slider-btn slider-btn-prev"
                            onClick={() => goToMenuSlide(menuSlide <= 0 ? maxMenuSlide : menuSlide - 1)}
                            aria-label={t("Anterior", "Previous")}
                        >
                            ‹
                        </button>
                        <button
                            className="slider-btn slider-btn-next"
                            onClick={() => goToMenuSlide(menuSlide >= maxMenuSlide ? 0 : menuSlide + 1)}
                            aria-label={t("Siguiente", "Next")}
                        >
                            ›
                        </button>

                        <div className="slider-dots">
                            {Array.from({ length: maxMenuSlide + 1 }).map((_, index) => (
                                <button
                                    key={index}
                                    className={`slider-dot ${index === menuSlide ? 'active' : ''}`}
                                    onClick={() => goToMenuSlide(index)}
                                    aria-label={`${t("Ir a grupo", "Go to group")} ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* ===== POZOLE PROMO ===== */}
                    <div className="mt-24 p-1 rounded-3xl bg-gradient-to-r from-[#c23b22] via-[#ffffff] to-[#1a5c38] shadow-2xl">
                        <div className="bg-[#fdf6ec] rounded-[22px] overflow-hidden flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 h-80 md:h-auto overflow-hidden">
                                <img
                                    src="/images/pozole-4.jpg"
                                    alt={t("Pozole Tradicional", "Traditional Pozole")}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="md:w-1/2 p-12 text-left">
                                <span className="inline-block bg-[#c23b22] text-white px-4 py-1 rounded-full text-xs font-black tracking-widest mb-6">
                                    {t("PROMOCIÓN ESPECIAL", "SPECIAL PROMOTION")}
                                </span>
                                <h2 className="text-4xl font-black text-[#1a5c38] mb-4">
                                    {t("¡¡Jueves y Viernes de Pozole!!", "Pozole Thursdays & Fridays!!")}
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                    {t(
                                        "Vuelve la tradición a Las Delicias. Disfruta de nuestro pozole estrella preparado con la receta secreta de la casa. Carne tierna, maíz perfecto y todos los complementos que amas.",
                                        "Tradition returns to Las Delicias. Enjoy our star pozole prepared with the house's secret recipe. Tender meat, perfect corn and all the toppings you love."
                                    )}
                                </p>
                                <div className="flex items-center gap-6">
                                    <div className="text-center">
                                        <span className="block text-3xl font-black text-[#c23b22]">$199</span>
                                        <span className="text-[10px] uppercase font-bold text-gray-500">
                                            {t("Precio Promo", "Promo Price")}
                                        </span>
                                    </div>
                                    <a href="#contact" className="bg-[#1a5c38] text-white px-8 py-4 rounded-full font-black text-sm tracking-widest hover:bg-[#c23b22] transition-colors shadow-lg">
                                        {t("RESERVAR MESA", "BOOK A TABLE")}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '4rem' }}>
                        <a href="#" className="btn">{t("Ver Menú Completo", "View Full Menu")}</a>
                    </div>
                </div>
            </section>

            {/* ===== GOOGLE REVIEWS SLIDER ===== */}
            <section id="reviews">
                <div className="container text-center">
                    <p className="section-subtitle">{t("Lo Que Dicen Nuestros Clientes", "What Our Clients Say")}</p>
                    <h2 className="section-title">{t("Reseñas de Google", "Google Reviews")}</h2>

                    <div className="slider-container reviews-slider">
                        <div
                            className="slider-wrapper"
                            style={{ transform: `translateX(-${reviewSlide * 100}%)` }}
                        >
                            {REVIEWS.map((review, index) => (
                                <div key={index} className="slider-item">
                                    <div className="review-card">
                                        <div className="review-stars">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <span key={i} className="star">★</span>
                                            ))}
                                        </div>
                                        <p className="review-text">&ldquo;{isEnglish ? review.text_en : review.text_es}&rdquo;</p>
                                        <div className="review-author">
                                            <strong>{review.name}</strong>
                                            <span className="review-date">{isEnglish ? review.date_en : review.date_es}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            className="slider-btn slider-btn-prev"
                            onClick={() => goToReviewSlide((reviewSlide - 1 + REVIEWS.length) % REVIEWS.length)}
                            aria-label={t("Reseña anterior", "Previous review")}
                        >
                            ‹
                        </button>
                        <button
                            className="slider-btn slider-btn-next"
                            onClick={() => goToReviewSlide((reviewSlide + 1) % REVIEWS.length)}
                            aria-label={t("Siguiente reseña", "Next review")}
                        >
                            ›
                        </button>

                        <div className="slider-dots">
                            {REVIEWS.map((_, index) => (
                                <button
                                    key={index}
                                    className={`slider-dot ${index === reviewSlide ? 'active' : ''}`}
                                    onClick={() => goToReviewSlide(index)}
                                    aria-label={`${t("Ir a reseña", "Go to review")} ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    <div style={{ marginTop: '3rem' }} className="px-4">
                        <a
                            href="https://www.google.com/maps"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn inline-block text-center"
                        >
                            {t("Ver Todas las Reseñas en Google", "View All Google Reviews")}
                        </a>
                    </div>
                </div>
            </section>

            {/* ===== CONTACT ===== */}
            <section id="contact">
                <div className="container">
                    <p className="section-subtitle">{t("Visítanos", "Visit Us")}</p>
                    <h2 className="section-title">{t("Reservaciones", "Reservations")}</h2>
                    <div className="contact-info">
                        <p>Calle 38 Norte y Zona Federal Marítima</p>
                        <p>Playa del Carmen, Quintana Roo</p>
                        <p style={{ marginTop: '2rem' }}>
                            <a href="tel:+529841234567">{t("Tel", "Phone")}: (984) 123-4567</a>
                        </p>
                        <p>
                            <a href="mailto:reservas@lasdeliciasplaya.com">reservas@lasdeliciasplaya.com</a>
                        </p>
                    </div>
                    <div className="divider"></div>
                    <p style={{ fontStyle: 'italic', opacity: 0.7, fontSize: '1rem' }}>
                        {t("Abierto todos los días", "Open every day")}<br />
                        {t("Almuerzo: 1:00 PM - 5:00 PM | Cena: 6:00 PM - 11:00 PM", "Lunch: 1:00 PM - 5:00 PM | Dinner: 6:00 PM - 11:00 PM")}
                    </p>

                    <footer>
                        <p>&copy; 2026 Las Delicias Playa del Carmen. {t("Todos los derechos reservados.", "All rights reserved.")}</p>
                    </footer>
                </div>
            </section>
        </>
    );
}
