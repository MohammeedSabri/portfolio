'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Radar } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="w-full py-32 bg-transparent text-white relative border-t border-white/5 overflow-hidden">
            {/* Subtle tech background grid */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-7xl mx-auto px-6 z-10 relative flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] mb-6 tracking-tight text-white">
                        Initiate Collaboration
                    </h2>
                    <p className="text-[var(--color-slate-gray)] text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        Currently exploring visionary projects and high-impact research opportunities.
                    </p>
                    <div className="mx-auto mt-8 h-[1px] w-32 bg-gradient-to-r from-transparent via-[var(--color-cyan)] to-transparent" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl w-full">
                    {/* Left: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col justify-center space-y-10"
                    >
                        <div>
                            <h3 className="text-sm font-mono text-[var(--color-cyan)] tracking-widest uppercase mb-4 opacity-80">
                                Direct Channels
                            </h3>
                            <h4 className="text-3xl font-bold font-[family-name:var(--font-heading)] mb-6 text-white leading-tight">
                                Establish a secure connection for strategic partnerships.
                            </h4>
                        </div>

                        <div className="space-y-6">
                            <a href="mailto:simosabri966@gmail.com" className="group flex items-center p-4 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/5 hover:border-[var(--color-cyan)]/30 hover:bg-[#0b0c10]/50 transition-all duration-300">
                                <div className="w-14 h-14 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center mr-6 group-hover:bg-[var(--color-cyan)]/10 group-hover:border-[var(--color-cyan)]/50 transition-colors shadow-inner">
                                    <Mail className="w-6 h-6 text-[var(--color-slate-gray)] group-hover:text-[var(--color-cyan)] transition-colors" />
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-[var(--color-slate-gray)] uppercase tracking-wider mb-1">Primary Email</p>
                                    <span className="text-lg font-medium text-white group-hover:text-[var(--color-cyan)] transition-colors">simosabri966@gmail.com</span>
                                </div>
                            </a>

                            <div className="flex gap-4">
                                <a href="https://linkedin.com/in/mohammed-sabri-bb28b527a" target="_blank" rel="noopener noreferrer" className="flex-1 group flex items-center justify-center gap-3 p-4 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/5 hover:border-[#0a66c2]/50 hover:bg-[#0a66c2]/10 transition-all duration-300">
                                    <Linkedin className="w-5 h-5 text-[var(--color-slate-gray)] group-hover:text-[#0a66c2] transition-colors" />
                                    <span className="text-sm font-bold text-white group-hover:text-[#0a66c2] transition-colors">LinkedIn</span>
                                </a>

                                <a href="https://github.com/MohammeedSabri" target="_blank" rel="noopener noreferrer" className="flex-1 group flex items-center justify-center gap-3 p-4 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/5 hover:border-white/30 hover:bg-white/10 transition-all duration-300">
                                    <Github className="w-5 h-5 text-[var(--color-slate-gray)] group-hover:text-white transition-colors" />
                                    <span className="text-sm font-bold text-white transition-colors">GitHub</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: The Data Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-[#0b0c10]/70 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden group"
                    >
                        {/* Ambient corner glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-cyan)] rounded-full mix-blend-screen filter blur-[100px] opacity-10 pointer-events-none" />

                        <form className="flex flex-col gap-6 relative z-10">
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-mono text-[var(--color-cyan)] tracking-widest uppercase ml-1 opacity-80 flex items-center gap-2">
                                    <span className="w-1 h-1 bg-[var(--color-cyan)] rounded-full" />
                                    [ Subject Identifier ]
                                </label>
                                <input
                                    type="text"
                                    className="bg-[#1a2530]/50 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-4 text-white text-lg focus:outline-none focus:border-[var(--color-cyan)]/50 focus:bg-[#1a2530]/80 transition-all placeholder:text-white/20 font-medium"
                                    placeholder="e.g., Ada Lovelace"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-mono text-[var(--color-cyan)] tracking-widest uppercase ml-1 opacity-80 flex items-center gap-2">
                                    <span className="w-1 h-1 bg-[var(--color-cyan)] rounded-full" />
                                    [ Communication Link ]
                                </label>
                                <input
                                    type="email"
                                    className="bg-[#1a2530]/50 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-4 text-white text-lg focus:outline-none focus:border-[var(--color-cyan)]/50 focus:bg-[#1a2530]/80 transition-all placeholder:text-white/20 font-medium"
                                    placeholder="e.g., visionary@future-ai.dev"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-mono text-[var(--color-cyan)] tracking-widest uppercase ml-1 opacity-80 flex items-center gap-2">
                                    <span className="w-1 h-1 bg-[var(--color-cyan)] rounded-full" />
                                    [ Transmission Details ]
                                </label>
                                <textarea
                                    rows={4}
                                    className="bg-[#1a2530]/50 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-4 text-white text-lg focus:outline-none focus:border-[var(--color-cyan)]/50 focus:bg-[#1a2530]/80 transition-all resize-none placeholder:text-white/20 font-medium leading-relaxed"
                                    placeholder="e.g., Your mastery of Deep Learning and Data Science is exactly what we are looking for. I'd love to connect to discuss a potential collaboration or engineering role..."
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="mt-4 relative overflow-hidden group/btn rounded-full bg-[var(--color-cyan)] text-[#000] h-14 px-8 flex items-center justify-center gap-3 text-sm font-bold shadow-[0_0_20px_rgba(102,252,241,0.2)] hover:shadow-[0_0_30px_rgba(102,252,241,0.5)] transition-all uppercase tracking-wider"
                            >
                                {/* Scanning Radar Sweep Animation */}
                                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] group-hover/btn:animate-[shimmer_1.5s_infinite]" />

                                <span className="relative z-10 flex items-center gap-2">
                                    Initialize Secure Uplink <Radar className="w-5 h-5 group-hover/btn:animate-spin" />
                                </span>
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Footer Copy */}
                <div className="mt-32 w-full text-center flex flex-col items-center">
                    <p className="text-[var(--color-slate-gray)] text-sm font-mono z-10">
                        System Architecture Handcrafted by Mohammed Sabri © {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </section>
    );
}
