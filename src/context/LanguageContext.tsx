"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type LanguageContextType = {
    isEnglish: boolean;
    toggleLanguage: () => void;
    t: <T>(es: T, en: T) => T;
};

const LanguageContext = createContext<LanguageContextType>({
    isEnglish: false,
    toggleLanguage: () => { },
    t: <T,>(es: T) => es,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [isEnglish, setIsEnglish] = useState(false);

    const toggleLanguage = () => setIsEnglish((prev) => !prev);

    // Helper: t(spanish, english) — returns the correct value based on language
    // Works with strings, JSX, or any other type
    const t = <T,>(es: T, en: T): T => (isEnglish ? en : es);

    return (
        <LanguageContext.Provider value={{ isEnglish, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
