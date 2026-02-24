'use client';

import { motion } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X, FileDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [cvOpen, setCvOpen] = useState(false);
    const cvDropdownRef = useRef<HTMLDivElement>(null);
    const params = useParams();
    const locale = params.locale as string;

    const cvButtonText = locale === 'fr' ? 'Curriculum Vitae' : locale === 'de' ? 'Lebenslauf' : 'Curriculum Vitae';
    const cvDropdownLabel = locale === 'fr' ? 'Télécharger le CV' : locale === 'de' ? 'Lebenslauf herunterladen' : 'Download CV';

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (cvDropdownRef.current && !cvDropdownRef.current.contains(event.target as Node)) {
                setCvOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--color-obsidian)]/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* LOGO */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-bold font-[family-name:var(--font-heading)]"
                >
                    <span className="text-[var(--color-cyan)]">M</span>. Sabri
                </motion.div>

                {/* DESKTOP NAV */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-8 text-[var(--color-slate-gray)] font-medium text-sm uppercase tracking-wider">
                        <li><a href="#about" className="hover:text-[var(--color-cyan)] transition-colors">About</a></li>
                        <li><a href="#projects" className="hover:text-[var(--color-cyan)] transition-colors">Projects</a></li>
                        <li><a href="#skills" className="hover:text-[var(--color-cyan)] transition-colors">Skills</a></li>
                    </ul>

                    <div className="h-6 w-px bg-white/10"></div>

                    <LanguageSwitcher />

                    {/* INTERACTIVE CV DROPDOWN */}
                    <div className="relative" ref={cvDropdownRef}>
                        <motion.button
                            onClick={() => setCvOpen(!cvOpen)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="ml-4 relative group flex items-center gap-2.5 px-6 py-2.5 rounded-full overflow-hidden"
                            aria-label={cvDropdownLabel}
                        >
                            <span className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-[var(--color-cyan)] via-[#6c63ff] to-[var(--color-cyan)] opacity-70 group-hover:opacity-100 bg-[length:200%_auto] animate-gradient-xy transition-opacity duration-300"></span>
                            <span className="absolute inset-[1.5px] rounded-full bg-[var(--color-obsidian)] group-hover:bg-[#111820] transition-colors duration-300"></span>
                            <span className="absolute inset-0 rounded-full shadow-[inset_0_0_15px_rgba(102,252,241,0.15)] group-hover:shadow-[inset_0_0_20px_rgba(102,252,241,0.3)] transition-shadow duration-300 z-10"></span>
                            <span className="relative z-20 flex items-center gap-2 text-white font-medium text-sm tracking-wide group-hover:text-[var(--color-cyan)] transition-colors duration-300">
                                <FileDown size={16} className="text-[var(--color-cyan)] group-hover:text-white transition-colors duration-300" />
                                {cvButtonText}
                            </span>
                        </motion.button>

                        {/* Dropdown Menu */}
                        {cvOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full right-0 mt-4 w-48 rounded-2xl overflow-hidden border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-50 py-2"
                                style={{ backdropFilter: 'blur(10px)', background: 'rgba(10, 10, 10, 0.6)' }}
                            >
                                {[
                                    { lang: "EN", title: "English", flag: "🇬🇧" },
                                    { lang: "FR", title: "Français", flag: "🇫🇷" },
                                    { lang: "DE", title: "Deutsch", flag: "🇩🇪" }
                                ].map((cv) => (
                                    <a
                                        key={cv.lang}
                                        href={`/cv/Mohammed_Sabri_CV_${cv.lang}.pdf`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setCvOpen(false)}
                                        className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-[var(--color-cyan)] hover:bg-white/5 transition-colors"
                                    >
                                        <span className="text-xl">{cv.flag}</span>
                                        <span className="font-medium text-sm">{cv.title}</span>
                                    </a>
                                ))}
                            </motion.div>
                        )}
                    </div>

                    <a href="#contact" className="ml-4 px-6 py-2 border border-[var(--color-cyan)] text-[var(--color-cyan)] hover:bg-[var(--color-cyan)] hover:text-[#000] rounded-full text-sm font-semibold transition-all">
                        Contact
                    </a>
                </div>

                {/* MOBILE TOGGLE */}
                <div className="md:hidden flex items-center gap-4">
                    <LanguageSwitcher />
                    <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--color-slate-gray)]">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* MOBILE NAV */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-20 left-0 w-full bg-[var(--color-obsidian)] border-b border-white/5 py-4 px-6 flex flex-col gap-4 shadow-xl"
                >
                    <a href="#about" onClick={() => setIsOpen(false)} className="text-[var(--color-slate-gray)] hover:text-[var(--color-cyan)] uppercase text-sm font-medium tracking-wide block py-2">About</a>
                    <a href="#projects" onClick={() => setIsOpen(false)} className="text-[var(--color-slate-gray)] hover:text-[var(--color-cyan)] uppercase text-sm font-medium tracking-wide block py-2">Projects</a>
                    <a href="#skills" onClick={() => setIsOpen(false)} className="text-[var(--color-slate-gray)] hover:text-[var(--color-cyan)] uppercase text-sm font-medium tracking-wide block py-2">Skills</a>
                    <a href="#contact" onClick={() => setIsOpen(false)} className="px-6 py-3 border border-[var(--color-cyan)] text-[var(--color-cyan)] hover:bg-[var(--color-cyan)] hover:text-[#000] rounded-full text-sm font-semibold transition-all text-center mt-2">
                        Contact
                    </a>
                </motion.div>
            )}
        </nav>
    );
}
