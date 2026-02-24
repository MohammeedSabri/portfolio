'use client';

import { motion } from 'framer-motion';
import { Database, Cpu, Code2, Network, Braces, BrainCircuit, Activity } from 'lucide-react';

export default function Skills({ dict }: { dict: any }) {

    // Skill data categorized for the Bento boxes
    const intelligenceStack = [
        { name: "Python", level: 95 },
        { name: "TensorFlow & Keras", level: 88 },
        { name: "PyTorch", level: 85 },
        { name: "Computer Vision (OpenCV)", level: 90 },
        { name: "NLP & Transformers", level: 82 }
    ];

    const dataEngineering = [
        { name: "SQL (PostgreSQL/MySQL)", level: 90 },
        { name: "Data Warehousing", level: 85 },
        { name: "Pandas & NumPy", level: 95 },
        { name: "Power BI", level: 80 }
    ];

    const softwareArchitecture = [
        { name: "React & Next.js", level: 88 },
        { name: "TypeScript / JavaScript", level: 92 },
        { name: "Java (Spring Boot)", level: 85 },
        { name: "C/C++", level: 80 }
    ];

    return (
        <section id="skills" className="w-full py-40 bg-transparent text-white relative border-t border-white/5 overflow-hidden">
            {/* Extremely subtle grid background for tech texture */}
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

            <div className="max-w-7xl mx-auto px-6 z-10 relative flex flex-col items-center">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-20 text-center w-full max-w-3xl"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] mb-6 text-white tracking-tight">
                        Technical Arsenal
                    </h2>
                    <p className="text-[var(--color-slate-gray)] text-lg md:text-xl mx-auto font-light leading-relaxed">
                        An enterprise-grade overview of my engineering capabilities across machine learning, scalable architectures, and core data pipelines.
                    </p>
                </motion.div>

                {/* The Bento Box Grid */}
                <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(0,1fr)]">

                    {/* BOX 1: AI & Machine Learning (Large Span) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="col-span-1 md:col-span-12 lg:col-span-8 row-span-2 group relative p-8 md:p-12 rounded-[2rem] bg-[#0b0c10]/50 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl transition-all hover:border-white/20 hover:bg-[#0b0c10]/70 hover:shadow-[0_0_40px_rgba(102,252,241,0.1)]"
                    >
                        {/* Subtle interactive hover glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-cyan)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen" />

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-[var(--color-cyan)]/30 transition-colors">
                                    <BrainCircuit className="w-6 h-6 text-[var(--color-cyan)]" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)]">Artificial Intelligence</h3>
                                    <p className="text-xs font-mono text-[var(--color-slate-gray)] uppercase tracking-widest mt-1">Primary Focus Area</p>
                                </div>
                            </div>

                            <div className="flex-grow flex flex-col gap-6 justify-center">
                                {intelligenceStack.map((skill, i) => (
                                    <div key={skill.name} className="flex flex-col gap-2">
                                        <div className="flex justify-between items-end">
                                            <span className="text-sm font-medium text-white/90">{skill.name}</span>
                                        </div>
                                        {/* Extremely crisp, modern progress bar */}
                                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden relative">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: 0.4 + (i * 0.1), ease: "circOut" }}
                                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[var(--color-slate-gray)] to-[var(--color-cyan)]"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* BOX 2: Software Architecture */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="col-span-1 md:col-span-6 lg:col-span-4 row-span-2 group relative p-8 md:p-10 rounded-[2rem] bg-[#0b0c10]/50 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl transition-all hover:border-[var(--color-indigo)]/30 hover:bg-[#0b0c10]/70"
                    >
                        <div className="absolute inset-x-0 -bottom-32 h-64 bg-[var(--color-indigo)] rounded-full mix-blend-screen filter blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" />

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
                                <Code2 className="w-5 h-5 text-[var(--color-indigo)]" />
                                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)]">Core Engineering</h3>
                            </div>

                            <ul className="space-y-6 flex-grow flex flex-col justify-center">
                                {softwareArchitecture.map((skill) => (
                                    <li key={skill.name} className="flex items-center gap-4 group/item">
                                        <span className="w-1 h-1 bg-white/20 group-hover/item:bg-[var(--color-indigo)] rounded-full transition-colors" />
                                        <span className="text-sm font-medium text-white/80 group-hover/item:text-white transition-colors">{skill.name}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 pt-6 border-t border-white/10">
                                <span className="text-[10px] font-mono text-[var(--color-slate-gray)] uppercase tracking-widest">Full-Stack / Object-Oriented</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* BOX 3: Data Engineering */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="col-span-1 md:col-span-6 lg:col-span-7 row-span-1 group relative p-8 md:p-10 rounded-[2rem] bg-[#0b0c10]/50 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl transition-all hover:border-emerald-500/30 hover:bg-[#0b0c10]/70"
                    >
                        <div className="relative z-10 flex flex-col justify-center h-full">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-4">
                                    <Database className="w-5 h-5 text-emerald-400" />
                                    <h3 className="text-xl font-bold font-[family-name:var(--font-heading)]">Data Infrastructure</h3>
                                </div>
                                <Activity className="w-4 h-4 text-emerald-400/50" />
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {dataEngineering.map(skill => (
                                    <span key={skill.name} className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm font-medium text-white/80 hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/30 transition-all cursor-default backdrop-blur-md">
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* BOX 4: Mathematical Visualization & Tools */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="col-span-1 md:col-span-12 lg:col-span-5 row-span-1 group relative p-8 md:p-10 rounded-[2rem] bg-[#0b0c10]/50 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl transition-all hover:border-white/20 hover:bg-[#0b0c10]/70"
                    >
                        {/* High-end dataviz abstraction effect */}
                        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" style={{ background: 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,1) 45%, transparent 50%)', backgroundSize: '200% 200%', animation: 'shimmer 3s infinite linear' }} />

                        <div className="relative z-10 flex flex-col justify-center h-full">
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-4">
                                    <Network className="w-5 h-5 text-[#a855f7]" />
                                    <h3 className="text-xl font-bold font-[family-name:var(--font-heading)]">Specialized Vectors</h3>
                                </div>
                                <div className="flex gap-4 text-sm text-[var(--color-slate-gray)] font-mono">
                                    <div className="flex flex-col gap-1"><span className="text-white">Math</span><span className="text-xs opacity-70">MATLAB, R</span></div>
                                    <div className="w-[1px] bg-white/10" />
                                    <div className="flex flex-col gap-1"><span className="text-white">Viz</span><span className="text-xs opacity-70">Plotly.js, WebGL</span></div>
                                    <div className="w-[1px] bg-white/10" />
                                    <div className="flex flex-col gap-1"><span className="text-white">DevOps</span><span className="text-xs opacity-70">Docker, Git</span></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
