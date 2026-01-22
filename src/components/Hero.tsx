import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { lazy, Suspense } from 'react';

// Lazy load the heavy 3D background
const Background3D = lazy(() => import('./Background3D'));
import resume from '../assets/Ishaan_Verma_Resume.pdf';

export const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <Suspense fallback={null}>
                <Background3D />
            </Suspense>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan text-sm font-medium mb-6 backdrop-blur-sm">
                        Hello, Universe
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-8xl font-bold font-heading tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400"
                >
                    Ishaan Verma
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto font-light"
                >
                    Software Developer | Architecting the <span className="text-neon-purple font-medium">Digital Future</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="group relative px-8 py-4 bg-white text-obsidian rounded-full font-bold text-lg hover:bg-neon-cyan transition-colors duration-300 flex items-center gap-2 overflow-hidden"
                    >
                        Explore Universe
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-white/20 group-hover:animate-pulse" />
                    </a>

                    <a
                        href={resume}
                        download="Ishaan_Verma_Resume.pdf"
                        target="_blank"
                        className="px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 hover:border-white/40 transition-all flex items-center gap-2 backdrop-blur-sm"
                    >
                        <Download size={20} />
                        Download Resume
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1.5 h-1.5 bg-neon-cyan rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};
