'use client';

import { motion } from 'framer-motion';

export default function About({ dict }: { dict: any }) {
    const manifestoLines: string[] = Array.isArray(dict.about.manifesto)
        ? dict.about.manifesto
        : [dict.about.manifesto || ""];

    return (
        <section id="about" className="w-full min-h-screen py-32 bg-transparent text-white relative flex items-center">
            {/* Subtle local glow accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-cyan)] rounded-full mix-blend-screen filter blur-[200px] opacity-[0.06] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

                    {/* LEFT COLUMN: Oversized Asymmetrical Typography — FIXED for no cutoff */}
                    <div className="col-span-1 lg:col-span-5 flex flex-col justify-center overflow-visible -ml-2 sm:-ml-4 lg:-ml-8 xl:-ml-12 pr-4 lg:pr-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: -50 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="relative overflow-visible"
                        >
                            {/* Left accent bar */}
                            <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-[var(--color-cyan)] to-transparent" />

                            {/*
                              FIX: Removed `whitespace-nowrap` and the extreme negative margins (-ml-12, -ml-16).
                              Each line now wraps naturally. Font scales responsively to stay within bounds.
                              Uses `break-words` to guarantee no overflow on any viewport.
                            */}
                            <h2 className="
                                text-[3.2rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[5rem] xl:text-[6rem]
                                font-black
                                font-[family-name:var(--font-heading)]
                                leading-[0.85]
                                tracking-tighter
                                text-transparent
                                bg-clip-text
                                bg-gradient-to-br from-white via-gray-300 to-[#1e293b]
                                break-words
                                pl-2 sm:pl-0
                            ">
                                {dict.about.quote_1}
                                <br />
                                <span className="text-[var(--color-cyan)]">{dict.about.quote_2}</span>
                                <br />
                                {dict.about.quote_3}
                                <br />
                                {dict.about.quote_4}
                            </h2>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Glassmorphism Tech Manifesto */}
                    <div className="col-span-1 lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="relative"
                        >
                            {/* Premium Glass Panel */}
                            <div className="bg-[#0b0c10]/70 backdrop-blur-2xl border border-white/8 shadow-2xl rounded-3xl p-8 md:p-14 relative overflow-hidden group">
                                {/* Hover shimmer */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                {/* Label */}
                                <div className="mb-10 flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-[var(--color-cyan)] animate-pulse" />
                                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-slate-gray)]">
                                        Executive Identity / Manifesto
                                    </span>
                                </div>

                                {/* Manifesto */}
                                <div className="space-y-8">
                                    {manifestoLines.map((line, index) => (
                                        <motion.p
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.4 + (index * 0.15), ease: "easeOut" }}
                                            className={`font-light leading-relaxed ${index === 0
                                                ? 'text-2xl md:text-3xl text-white font-[family-name:var(--font-heading)] tracking-tight border-l-2 border-[var(--color-cyan)] pl-6'
                                                : 'text-lg md:text-xl text-gray-400 pl-6'
                                                }`}
                                        >
                                            {line}
                                        </motion.p>
                                    ))}
                                </div>

                                {/* Engineering Footprint */}
                                <div className="mt-16 pt-8 border-t border-white/5 flex gap-12 font-mono text-[10px] text-[var(--color-slate-gray)] uppercase tracking-widest">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-white">Status</span>
                                        <span className="text-[var(--color-cyan)] flex items-center gap-2">
                                            <span className="w-1 h-1 bg-[var(--color-cyan)] rounded-full" /> Operational
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-white">Architecture</span>
                                        <span>Full-Stack &amp; ML</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-white">Directive</span>
                                        <span>Problem Resolution</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
