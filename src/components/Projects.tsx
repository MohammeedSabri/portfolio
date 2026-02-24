'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, Cpu, Orbit, HandMetal, BookOpen, Bot, X } from 'lucide-react';

export default function Projects({ dict }: { dict: any }) {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);

    const projects = [
        {
            id: "smart_eval",
            title: dict.projects.smart_eval.title,
            description: dict.projects.smart_eval.description,
            tags: ["AI Ecosystem", "NLP", "Classification", "Python"],
            metrics: dict.projects.smart_eval.metrics,
            icon: <BookOpen className="w-8 h-8 text-[var(--color-cyan)]" />,
            colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
            github: true
        },
        {
            id: "sign_language",
            title: dict.projects.sign_language.title,
            description: dict.projects.sign_language.description,
            tags: ["Computer Vision", "MediaPipe", "Transformers", "LSTM"],
            metrics: dict.projects.sign_language.metrics,
            icon: <HandMetal className="w-8 h-8 text-[var(--color-indigo)]" />,
            colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
            github: true
        },
        {
            id: "adam_optimizer",
            title: dict.projects.adam_optimizer.title,
            description: dict.projects.adam_optimizer.description,
            tags: ["Python", "Plotly.js", "3D Visualization", "Math"],
            icon: <Orbit className="w-8 h-8 text-emerald-400" />,
            colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
            github: true
        },
        {
            id: "robotic_arm",
            title: dict.projects.robotic_arm.title,
            description: dict.projects.robotic_arm.description,
            tags: ["Python", "Tkinter", "Arduino", "Serial Comms"],
            icon: <Bot className="w-8 h-8 text-orange-400" />,
            colSpan: "col-span-1 md:col-span-2 lg:col-span-1"
        },
        {
            id: "sdid_portal",
            title: dict.projects.sdid_portal.title,
            description: dict.projects.sdid_portal.description,
            tags: ["Spring Boot", "React", "Full-Stack", "RBAC"],
            icon: <Cpu className="w-8 h-8 text-pink-400" />,
            colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
            github: true
        }
    ];

    const activeProject = projects.find(p => p.id === selectedProject);

    return (
        <section id="projects" className="w-full py-32 bg-transparent text-white relative">
            {/* Extremely subtle, sophisticated background styling */}
            <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-[var(--color-cyan)] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--color-slate-gray)]">
                        {dict.projects.title}
                    </h2>
                    <p className="text-[var(--color-slate-gray)] text-xl max-w-2xl mx-auto font-light">
                        {dict.projects.subtitle}
                    </p>
                    <div className="mx-auto mt-8 h-1 w-24 bg-gradient-to-r from-transparent via-[var(--color-cyan)] to-transparent rounded-full" />
                </motion.div>

                {/* GRID GALLERY */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(0,1fr)]">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            layoutId={`card-${project.id}`}
                            onClick={() => setSelectedProject(project.id)}
                            initial={{ opacity: 0, y: 40, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -8, scale: 1.02, zIndex: 10 }}
                            className={`group relative bg-[#0b0c10]/60 border border-white/10 rounded-3xl p-8 backdrop-blur-xl overflow-hidden hover:border-[var(--color-cyan)] hover:bg-[#0b0c10]/80 cursor-pointer transition-colors shadow-lg hover:shadow-[0_0_40px_rgba(102,252,241,0.15)] flex flex-col ${project.colSpan}`}
                        >
                            <motion.div layoutId={`icon-${project.id}`} className="mb-6 p-3 bg-white/5 rounded-2xl border border-white/5 inline-block group-hover:bg-[var(--color-cyan)]/10 group-hover:border-[var(--color-cyan)]/30 transition-colors w-max">
                                {project.icon}
                            </motion.div>

                            <motion.h3 layoutId={`title-${project.id}`} className="text-3xl font-bold text-white font-[family-name:var(--font-heading)] mb-4 group-hover:text-[var(--color-cyan)] transition-colors">
                                {project.title}
                            </motion.h3>

                            <motion.p layoutId={`desc-${project.id}`} className="text-[var(--color-slate-gray)] text-lg leading-relaxed mb-8 flex-grow">
                                {project.description}
                            </motion.p>

                            <motion.div layoutId={`tags-${project.id}`} className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-sm font-medium px-4 py-1.5 rounded-full bg-[#1e293b]/50 backdrop-blur-md border border-white/5 text-white/70">
                                        {tag}
                                    </span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* EXPANDED MODAL */}
            <AnimatePresence>
                {selectedProject && activeProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10 bg-[#050608]/80 backdrop-blur-2xl"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            layoutId={`card-${activeProject.id}`}
                            className="w-full max-w-6xl h-[80vh] bg-[#0b0c10]/90 backdrop-blur-3xl border border-white/20 shadow-[0_0_100px_rgba(102,252,241,0.1)] rounded-3xl overflow-hidden flex flex-col md:flex-row relative cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-md"
                            >
                                <X size={24} />
                            </button>

                            {/* Left Side: Details */}
                            <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col border-r border-white/10 overflow-y-auto">
                                <motion.div layoutId={`icon-${activeProject.id}`} className="mb-6 inline-block">
                                    {activeProject.icon}
                                </motion.div>

                                <motion.h3 layoutId={`title-${activeProject.id}`} className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-heading)] mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--color-cyan)]">
                                    {activeProject.title}
                                </motion.h3>

                                <motion.p layoutId={`desc-${activeProject.id}`} className="text-[var(--color-slate-gray)] text-xl leading-relaxed mb-8">
                                    {activeProject.description}
                                </motion.p>

                                {activeProject.metrics && (
                                    <div className="mb-8 p-4 bg-[var(--color-cyan)]/10 text-[var(--color-cyan)] rounded-xl border border-[var(--color-cyan)]/20 shadow-[0_0_15px_rgba(102,252,241,0.2)]">
                                        <p className="font-bold flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-[var(--color-cyan)] animate-pulse" />
                                            Metric Achieved: {activeProject.metrics}
                                        </p>
                                    </div>
                                )}

                                <motion.div layoutId={`tags-${activeProject.id}`} className="flex flex-wrap gap-2 mb-10">
                                    {activeProject.tags.map((tag) => (
                                        <span key={tag} className="text-sm font-medium px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[var(--color-cyan)]">
                                            {tag}
                                        </span>
                                    ))}
                                </motion.div>

                                <div className="mt-auto flex gap-4 pt-8 border-t border-white/10">
                                    {activeProject.github && (
                                        <a href="#" className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-[var(--color-cyan)] hover:text-black transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(102,252,241,0.6)]">
                                            <Github size={20} /> View on GitHub
                                        </a>
                                    )}
                                    <a href="#" className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-bold rounded-full hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)] transition-colors">
                                        Live Demo <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            {/* Right Side: Visual/Demo Placeholder */}
                            <div className="w-full md:w-1/2 bg-[var(--color-indigo)]/20 relative overflow-hidden flex items-center justify-center p-10">
                                {/* Abstract wireframe/demo background */}
                                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }} />

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="w-full h-full max-h-[400px] border border-white/10 rounded-2xl bg-black/40 backdrop-blur-md flex items-center justify-center shadow-2xl relative overflow-hidden"
                                >
                                    {/* Simulated interactive component loading */}
                                    <div className="absolute w-32 h-32 bg-[var(--color-cyan)] rounded-full mix-blend-screen filter blur-[80px] animate-pulse" />
                                    <span className="text-[var(--color-slate-gray)] font-mono z-10 flex flex-col items-center gap-4">
                                        {activeProject.icon}
                                        Loading Interactive Visualization...
                                    </span>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
