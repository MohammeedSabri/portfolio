'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';

// --- Text Scramble Effect Component ---
const ScrambleText = ({ text }: { text: string }) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let iteration = 0;
        let interval: NodeJS.Timeout;

        const startScramble = () => {
            interval = setInterval(() => {
                setDisplayText(
                    text.split("")
                        .map((letter, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            return letters[Math.floor(Math.random() * letters.length)];
                        })
                        .join("")
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                }
                iteration += 1 / 3;
            }, 30);
        };

        // Slight delay before scramble starts
        setTimeout(startScramble, 500);

        return () => clearInterval(interval);
    }, [text]);

    return <>{displayText || text.replace(/./g, '_')}</>;
};

// --- Main Hero Component ---
export default function Hero({ dict }: { dict: any }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <section className="min-h-screen bg-transparent"></section>;

    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-transparent">
            {/* Removed the local <Canvas> since we now rely on <GlobalBackground /> at the layout level */}

            {/* --- Content Mask (Reduced opacity to punch up the background) --- */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[var(--color-obsidian)]/10 to-[var(--color-obsidian)]/40 pointer-events-none" />

            {/* --- Typography UI --- */}
            <main className="max-w-5xl flex flex-col items-center sm:items-start text-center sm:text-left gap-6 mt-20 z-10 w-full px-6 md:px-12 pointer-events-none">

                {/* Headline: Scrambled Reveal */}
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black font-[family-name:var(--font-heading)] text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[var(--color-slate-gray)] tracking-tighter drop-shadow-2xl"
                >
                    <ScrambleText text={dict.hero.greeting} />
                </motion.h1>

                {/* Sub-Headline */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
                    className="flex flex-col gap-2"
                >
                    <p className="text-xl sm:text-3xl text-[var(--color-cyan)] font-light tracking-wide drop-shadow-[0_0_10px_rgba(102,252,241,0.5)]">
                        {dict.hero.roles[0]}
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="h-[1px] w-12 bg-[var(--color-slate-gray)] hidden sm:block" />
                        <p className="text-lg sm:text-2xl text-[var(--color-slate-gray)] font-medium">
                            {dict.hero.roles[1]}
                        </p>
                    </div>
                </motion.div>

                {/* Interactive Tagline Reveal */}
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 1, delay: 2.2, ease: "anticipate" }}
                    className="mt-4 border-l-2 border-[var(--color-indigo)] pl-6"
                >
                    <p className="text-lg md:text-xl text-white/70 italic font-mono">
                        " {dict.hero.tagline} "
                    </p>
                </motion.div>

                {/* CTAs */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-6 mt-12 w-full pt-4 pointer-events-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2.5 }}
                >
                    <motion.a
                        whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(102,252,241,0.5)" }}
                        whileTap={{ scale: 0.95 }}
                        className="relative rounded-full bg-[var(--color-cyan)] text-[#000] h-14 px-10 flex items-center justify-center text-lg font-extrabold overflow-hidden group shadow-[0_0_20px_rgba(102,252,241,0.3)]"
                        href="#projects"
                    >
                        <div className="absolute inset-0 bg-white/40 h-full w-1/2 -skew-x-12 -translate-x-[150%] group-hover:animate-[shimmer_1s_infinite]" />
                        {dict.hero.cta}
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-full border border-solid border-white/30 text-white transition-colors h-14 px-10 flex items-center justify-center text-lg font-medium backdrop-blur-sm"
                        href="#contact"
                    >
                        {dict.hero.secondary_cta}
                    </motion.a>
                </motion.div>
            </main>
        </section>
    );
}
