'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Award, ExternalLink, CheckCircle2, X } from 'lucide-react';

const certificationsList = [
    { title: "Master PL/SQL", provider: "Coursera", date: "2023" },
    { title: "Optimize Database Logic", provider: "Coursera", date: "2023" },
    { title: "Oracle PL/SQL Programming", provider: "Coursera", date: "2023" },
    { title: "Oracle PLSQL 21c", provider: "Coursera", date: "2023" },
    { title: "Write Smarter with Overleaf and LaTeX", provider: "Coursera", date: "2023" },
    { title: "Data Manipulation in SQL Server", provider: "Coursera", date: "2023" },
    { title: "SQL Foundations", provider: "Coursera", date: "2023" },
    { title: "Advanced Learning Algorithms", provider: "DeepLearning.AI", date: "2023" },
    { title: "Supervised Machine Learning", provider: "DeepLearning.AI", date: "2023" },
    { title: "Java Programming for Beginners", provider: "IBM", date: "2023" },
    { title: "C for Everyone", provider: "UC Santa Cruz", date: "2023" }
];

function CertCard({ cert, index, setModalData }: { cert: any, index: number, setModalData: (data: any) => void }) {
    const [isFlipped, setIsFlipped] = useState(false);

    // Dynamic colors based on provider
    const getProviderColor = (provider: string) => {
        if (provider.includes('Coursera')) return 'var(--color-cyan)';
        if (provider.includes('DeepLearning')) return '#a855f7'; // Purple
        if (provider.includes('IBM')) return '#3b82f6'; // Blue
        return '#f59e0b'; // Amber
    };

    const providerColor = getProviderColor(cert.provider);

    return (
        <div
            className="h-64 w-full perspective-1000 cursor-pointer group"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                className="w-full h-full relative preserve-3d"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
            >
                {/* FRONT FACE */}
                <div className="absolute w-full h-full backface-hidden bg-[#0b0c10]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-lg hover:bg-[#0b0c10]/60 hover:border-white/30 transition-all duration-300">
                    <div className="absolute top-4 right-4 text-white/10 group-hover:text-white/30 transition-colors">
                        <Award size={20} />
                    </div>

                    <div
                        className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)] relative overflow-hidden"
                        style={{ backgroundColor: `${providerColor}15`, border: `1px solid ${providerColor}30` }}
                    >
                        {/* Metallic sheen effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-[150%] group-hover:animate-[shimmer_2s_infinite]" />
                        <Award size={32} style={{ color: providerColor }} className="relative z-10" />
                    </div>

                    <h4 className="text-xl font-bold text-white font-[family-name:var(--font-heading)] mb-2 leading-tight">
                        {cert.title}
                    </h4>
                    <span className="text-sm font-medium text-[var(--color-slate-gray)] tracking-widest uppercase">
                        {cert.provider}
                    </span>

                    <div className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-[var(--color-slate-gray)] font-mono">
                        Click to Reveal
                    </div>
                </div>

                {/* BACK FACE */}
                <div
                    className="absolute w-full h-full backface-hidden bg-gradient-to-br from-[#1e293b]/90 to-[#0f172a]/90 backdrop-blur-xl border rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                    style={{
                        transform: "rotateY(180deg)",
                        borderColor: `${providerColor}50`
                    }}
                >
                    <CheckCircle2 size={36} style={{ color: providerColor }} className="mb-4" />

                    <h4 className="text-lg font-bold text-white mb-1 leading-tight">
                        {cert.title}
                    </h4>
                    <p className="text-xs text-[var(--color-slate-gray)] mb-4">
                        Earned • {cert.date}
                    </p>

                    <div className="mb-6 px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold rounded-full flex items-center gap-1 backdrop-blur-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Verified Credential
                    </div>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setModalData(cert);
                        }}
                        className="flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold transition-all hover:scale-105"
                        style={{
                            backgroundColor: `${providerColor}20`,
                            color: providerColor,
                            border: `1px solid ${providerColor}50`,
                            boxShadow: `0 0 15px ${providerColor}20`
                        }}
                    >
                        View Official Diploma <ExternalLink size={16} />
                    </button>
                </div>
            </motion.div>
        </div>
    );
}

export default function Certifications() {
    const [modalData, setModalData] = useState<any>(null);

    return (
        <section id="certifications" className="w-full py-32 bg-transparent text-white relative border-t border-white/5">
            {/* Container mapping for glassmorphism */}
            <div className="absolute inset-0 bg-[#050608]/40 backdrop-blur-sm pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto px-6 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#a855f7] tracking-tight drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                        Verified Intelligence
                    </h2>
                    <p className="text-[var(--color-slate-gray)] text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        Continuous learning is the backbone of elite engineering. Here are the 11 credentials that forged my expertise.
                    </p>
                </motion.div>

                {/* Masonry-style Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {certificationsList.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <CertCard cert={cert} index={index} setModalData={setModalData} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* DIPLOMA VIEW MODAL */}
            <AnimatePresence>
                {modalData && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setModalData(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10 bg-[#050608]/80 backdrop-blur-2xl"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#0b0c10]/90 border border-white/20 rounded-3xl w-full max-w-4xl p-2 relative shadow-[0_0_100px_rgba(168,85,247,0.2)] overflow-hidden backdrop-blur-3xl"
                        >
                            <button
                                onClick={() => setModalData(null)}
                                className="absolute top-6 right-6 z-20 p-2 bg-black/50 hover:bg-white/10 backdrop-blur-md rounded-full text-white transition-colors border border-white/10"
                            >
                                <X size={20} />
                            </button>

                            <div className="w-full h-[60vh] md:h-[70vh] relative border border-white/5 rounded-2xl overflow-hidden bg-[#0a0b10]/80 flex flex-col items-center justify-center p-10 text-center">
                                {/* Simulated Diploma Grid Background */}
                                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

                                <Award size={80} className="text-[#a855f7] mb-8 opacity-50" />

                                <h3 className="text-3xl md:text-5xl font-bold font-serif text-white mb-4">
                                    {modalData.title}
                                </h3>

                                <p className="text-xl text-[var(--color-slate-gray)] mb-12">
                                    Offered by <strong className="text-white">{modalData.provider}</strong>
                                </p>

                                <div className="flex gap-4 z-10">
                                    <a href="#" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-[var(--color-cyan)] transition-colors inline-flex items-center gap-2">
                                        Verify Certificate <ExternalLink size={18} />
                                    </a>
                                </div>

                                {/* Aesthetic flourishes */}
                                <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#a855f7]/10 to-transparent pointer-events-none" />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
