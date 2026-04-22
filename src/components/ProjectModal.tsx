import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export interface ProjectData {
    title: string;
    category: string;
    description: string;
    tech: string[];
    github?: string;
    live?: string;
    gradient: string;
    logo?: string;
    logoBg?: string;
    detailsMd?: string;
}

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: ProjectData | null;
}

export const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
    const [cachedProject, setCachedProject] = useState<ProjectData | null>(project);

    useEffect(() => {
        if (project) {
            setCachedProject(project);
        }
    }, [project]);

    const activeProject = project || cachedProject;

    if (!activeProject) return null;

    // Custom Markdown Components for a rich, animated, unique UI
    const markdownComponents = {
        h1: ({node, ...props}: any) => (
            <motion.h1 
                initial={{opacity: 0, y: 10}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}}
                className="text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400 mt-14 mb-8 pb-4 border-b border-white/10 flex items-center gap-3" 
                {...props} 
            />
        ),
        h2: ({node, ...props}: any) => (
            <motion.h2 
                initial={{opacity: 0, x: -10}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}}
                className="text-2xl md:text-3xl font-heading font-bold text-white mt-12 mb-6 flex items-center gap-3 before:content-[''] before:block before:w-1.5 before:h-8 before:bg-gradient-to-b before:from-neon-cyan before:to-neon-purple before:rounded-full" 
                {...props} 
            />
        ),
        h3: ({node, ...props}: any) => (
            <h3 className="text-xl md:text-2xl font-heading font-semibold text-gray-200 mt-8 mb-4 border-l-2 border-neon-purple/50 pl-4" {...props} />
        ),
        p: ({node, ...props}: any) => (
            <p className="text-gray-300 leading-relaxed mb-6 text-base md:text-lg tracking-wide" {...props} />
        ),
        a: ({node, ...props}: any) => (
            <a className="text-neon-cyan hover:text-white underline decoration-neon-cyan/40 hover:decoration-white underline-offset-4 transition-all duration-300" {...props} />
        ),
        ul: ({node, ...props}: any) => (
            <ul className="list-none space-y-4 mb-8 bg-white/[0.02] border border-white/5 p-6 rounded-2xl" {...props} />
        ),
        ol: ({node, ...props}: any) => (
            <ol className="list-decimal list-inside space-y-4 mb-8 bg-white/[0.02] border border-white/5 p-6 rounded-2xl text-gray-300 text-lg" {...props} />
        ),
        li: ({node, ...props}: any) => (
            <li className="flex items-start gap-4 text-gray-300 text-base md:text-lg group">
                <span className="text-neon-cyan mt-1.5 group-hover:scale-125 group-hover:rotate-12 transition-transform opacity-70 group-hover:opacity-100 flex-shrink-0">
                    <Sparkles size={16} />
                </span>
                <span className="leading-relaxed">{props.children}</span>
            </li>
        ),
        table: ({node, ...props}: any) => (
            <div className="overflow-x-auto mb-10 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-xl">
                <table className="w-full text-left border-collapse min-w-[600px]" {...props} />
            </div>
        ),
        th: ({node, ...props}: any) => (
            <th className="p-5 border-b border-white/10 bg-white/5 font-heading text-white font-semibold text-lg whitespace-nowrap" {...props} />
        ),
        td: ({node, ...props}: any) => (
            <td className="p-5 border-b border-white/5 text-gray-400 text-base align-top" {...props} />
        ),
        strong: ({node, ...props}: any) => (
            <strong className="text-white font-medium bg-white/5 px-1.5 py-0.5 rounded" {...props} />
        ),
        hr: ({node, ...props}: any) => (
            <hr className="my-12 border-t border-white/10 border-dashed" {...props} />
        ),
        blockquote: ({node, ...props}: any) => (
            <blockquote className="relative border-l-4 border-neon-cyan bg-gradient-to-r from-neon-cyan/10 to-transparent p-6 md:p-8 rounded-r-3xl italic text-gray-200 my-10 shadow-[inset_2px_0_0_0_rgba(0,243,255,0.5)] md:text-xl font-light" {...props} />
        ),
        pre: ({node, ...props}: any) => (
            <div className="relative my-10 rounded-2xl overflow-hidden bg-deep-space border border-white/10 shadow-2xl group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan via-blue-500 to-neon-purple opacity-70" />
                <div className="px-4 py-3 bg-white/5 border-b border-white/5 flex items-center justify-end text-xs text-gray-400 font-mono relative">
                    <div className="absolute left-4 flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                    </div>
                </div>
                <div className="p-6 overflow-x-auto text-sm text-gray-300 font-mono leading-loose custom-scrollbar">
                    <pre {...props} />
                </div>
            </div>
        ),
        code: ({node, inline, className, children, ...props}: any) => {
            const isInline = !className || !className.includes('language-');
            const strChildren = String(children);
            if (isInline && !strChildren.includes('\n')) {
                 return <code className="bg-neon-cyan/10 text-neon-cyan px-1.5 py-0.5 rounded-lg font-mono text-sm border border-neon-cyan/20 whitespace-nowrap" {...props}>{children}</code>
            }
            return <code className={`${className || ''} bg-transparent`} {...props}>{children}</code>
        }
    };

    const modalContent = (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 30 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full h-full md:h-auto md:max-h-[88vh] md:max-w-5xl bg-obsidian md:border md:border-white/10 md:rounded-[2rem] overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.8)]"
                    >
                        {/* Core Background Effect with Mask to hide sharp edges */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neon-purple/20 via-obsidian to-obsidian opacity-50 z-0 pointer-events-none" />
                        
                        <div 
                            className={`absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b ${activeProject.gradient} opacity-15 z-0 pointer-events-none`}
                            style={{ 
                                maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)', 
                                WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)' 
                            }} 
                        />

                        {/* Top Bar / Close Button */}
                        <div className="relative sticky top-0 z-30 flex justify-end p-4 md:p-6 pointer-events-none">
                            <button
                                onClick={onClose}
                                className="p-3 bg-black/50 hover:bg-white/10 rounded-full border border-white/10 hover:border-white/30 text-gray-400 hover:text-white transition-all backdrop-blur-md pointer-events-auto shadow-2xl"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Scrollable Content Body */}
                        <div className="relative z-10 px-6 sm:px-12 md:px-16 pb-16 overflow-y-auto custom-scrollbar h-full mt-[-60px] md:mt-[-80px]">
                            
                            {/* Super Header Component */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="flex flex-col items-center text-center mt-6 mb-12"
                            >
                                {activeProject.logo && (
                                    <motion.div 
                                        initial={{ scale: 0.8, rotate: -10 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ type: "spring", damping: 15 }}
                                        className={`w-32 h-32 md:w-40 md:h-40 rounded-3xl ${activeProject.logoBg || 'bg-white'} p-4 flex shrink-0 items-center justify-center border-2 border-white/10 shadow-[0_0_40px_rgba(0,243,255,0.15)] mb-8`}
                                    >
                                        <img src={activeProject.logo} alt={`${activeProject.title} logo`} className="w-full h-full object-contain drop-shadow-2xl" />
                                    </motion.div>
                                )}
                                
                                <h1 className="text-4xl md:text-6xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 mb-4 tracking-tight drop-shadow-sm">
                                    {activeProject.title}
                                </h1>
                                
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="px-4 py-1.5 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan font-mono text-sm shadow-[0_0_15px_rgba(0,243,255,0.2)]">
                                        {activeProject.category}
                                    </span>
                                </div>

                                <div className="flex gap-4">
                                    {activeProject.github && (
                                        <a href={activeProject.github} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 text-white transition-all shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                            <Github size={20} className="group-hover:scale-110 transition-transform" />
                                            <span className="font-medium hidden sm:inline">Source Code</span>
                                        </a>
                                    )}
                                    {activeProject.live && (
                                        <a href={activeProject.live} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 border border-white/20 rounded-full hover:from-neon-purple/40 hover:to-neon-cyan/40 text-white transition-all shadow-lg hover:shadow-[0_0_20px_rgba(0,243,255,0.2)]">
                                            <ExternalLink size={20} className="group-hover:scale-110 transition-transform" />
                                            <span className="font-medium hidden sm:inline">Live Demo</span>
                                        </a>
                                    )}
                                </div>
                            </motion.div>

                            {/* Tech Stack Floating Bar */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-wrap items-center justify-center gap-3 p-6 mb-16 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-inner"
                            >
                                <span className="text-gray-400 font-mono text-sm mr-2 uppercase tracking-widest hidden lg:block">Tech Arsenal</span>
                                {activeProject.tech.map((t) => (
                                    <span key={t} className="px-4 py-2 text-sm font-medium text-white bg-white/5 rounded-full border border-white/10 hover:bg-white/10 hover:border-white/30 transition-colors shadow-sm">
                                        {t}
                                    </span>
                                ))}
                            </motion.div>

                            {/* Detailed Markdown Content OR Fallback Description */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="w-full max-w-4xl mx-auto pb-10"
                            >
                                {activeProject.detailsMd ? (
                                    <ReactMarkdown 
                                        remarkPlugins={[remarkGfm]}
                                        components={markdownComponents as any}
                                    >
                                        {activeProject.detailsMd}
                                    </ReactMarkdown>
                                ) : (
                                    <p className="text-gray-300 text-xl leading-loose text-center max-w-3xl mx-auto">{activeProject.description}</p>
                                )}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );

    return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null;
};
