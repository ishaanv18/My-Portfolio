import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { LayoutGrid, Orbit } from 'lucide-react';
import awsLogo from '../assets/aws_logo.png';

interface TechItem {
    name: string;
    color: string;
    slug: string;
    path?: string;
    image?: string;
}

export const TechStack = () => {
    const [viewAll, setViewAll] = useState(false);

    const innerOrbit: TechItem[] = [
        { name: "Java", color: "#f89820", slug: "openjdk" },
        { name: "JavaScript", color: "#F7DF1E", slug: "javascript" },
        { name: "Spring Boot", color: "#6db33f", slug: "springboot" },
        { name: "React", color: "#61dafb", slug: "react" },
        { name: "Python", color: "#3776ab", slug: "python" },
        { name: "TypeScript", color: "#3178c6", slug: "typescript" },
        { name: "Node.js", color: "#339933", slug: "nodedotjs" },
    ];

    const outerOrbit: TechItem[] = [
        { name: "Docker", color: "#2496ed", slug: "docker" },
        {
            name: "AWS",
            color: "#ff9900",
            slug: "amazonaws",
            image: awsLogo
        },
        { name: "Kubernetes", color: "#326ce5", slug: "kubernetes" },
        { name: "MongoDB", color: "#47a248", slug: "mongodb" },
        { name: "MySQL", color: "#4479A1", slug: "mysql" },
        { name: "Git", color: "#f05032", slug: "git" },
        { name: "Express", color: "#ffffff", slug: "express" },
        { name: "Tailwind", color: "#06b6d4", slug: "tailwindcss" },
    ];

    const allTech = [
        ...innerOrbit,
        ...outerOrbit,
        { name: "C++", color: "#00599C", slug: "cplusplus" },
        { name: "HTML5", color: "#E34F26", slug: "html5" },
        { name: "CSS3", color: "#1572B6", slug: "css3" },
        { name: "Three.js", color: "#ffffff", slug: "threedotjs" },
        { name: "GitHub Actions", color: "#2088FF", slug: "githubactions" },
        { name: "Postman", color: "#ff6c37", slug: "postman" },
        { name: "Vite", color: "#646CFF", slug: "vite" },
        { name: "REST API", color: "#009688", slug: "fastapi" },
    ];

    return (
        <section id="tech" className="py-24 relative overflow-hidden flex flex-col items-center justify-center min-h-[800px]">
            {/* Background Galaxy Dust */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,243,255,0.03)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center justify-center">

                {/* View Toggle */}
                <div className="mb-12 z-30">
                    <button
                        onClick={() => setViewAll(!viewAll)}
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-neon-cyan/50 transition-all duration-300 backdrop-blur-md group"
                    >
                        {viewAll ? <Orbit className="w-4 h-4 text-neon-cyan" /> : <LayoutGrid className="w-4 h-4 text-neon-cyan" />}
                        <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                            {viewAll ? "View Orbit" : "View Full Arsenal"}
                        </span>
                    </button>
                </div>

                <AnimatePresence mode="wait">
                    {viewAll ? (
                        <motion.div
                            key="grid"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            className="w-full flex flex-col items-center"
                        >
                            <div className="relative z-20 text-center mb-12">
                                <h2 className="text-4xl font-bold font-heading mb-2">Arsenal</h2>
                                <p className="text-neon-cyan text-sm tracking-widest uppercase">Tech Stack</p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full">
                                {allTech.map((tech, i) => (
                                    <motion.div
                                        key={tech.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="p-4 rounded-xl bg-obsidian/80 backdrop-blur-md border border-white/10 hover:border-neon-cyan/50 hover:bg-white/5 transition-all duration-300 flex flex-col items-center gap-3 group"
                                    >
                                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/5 group-hover:scale-110 transition-transform duration-300">
                                            {/* @ts-ignore - Adding path property dynamically */}
                                            {tech.image ? (
                                                <img src={tech.image} alt={tech.name} className="w-8 h-8 object-contain" />
                                            ) : tech.path ? (
                                                <svg viewBox="0 0 24 24" className="w-8 h-8" fill={tech.color}>
                                                    <path d={tech.path} />
                                                </svg>
                                            ) : (
                                                <img
                                                    src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace('#', '')}`}
                                                    alt={tech.name}
                                                    className="w-8 h-8"
                                                />
                                            )}
                                        </div>
                                        <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{tech.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="orbit"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] flex items-center justify-center"
                        >
                            {/* Central Core with Header */}
                            <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-neon-purple to-neon-cyan blur-[20px] opacity-20" />
                            <div className="relative z-20 text-center">
                                <h2 className="text-4xl font-bold font-heading mb-2">Arsenal</h2>
                                <p className="text-neon-cyan text-sm tracking-widest uppercase">Tech Stack</p>
                            </div>

                            {/* Inner Orbit Ring */}
                            <div className="absolute w-[140px] h-[140px] md:w-[220px] md:h-[220px] rounded-full border border-white/5 animate-[spin_30s_linear_infinite]" />
                            {innerOrbit.map((tech, i) => (
                                <div key={tech.name} className="absolute inset-0 animate-[spin_20s_linear_infinite]" style={{ animationDelay: `-${i * (20 / innerOrbit.length)}s` }}>
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[70px] md:-translate-y-[110px]">
                                        <div className="animate-[spin_20s_linear_infinite_reverse]" style={{ animationDelay: `-${i * (20 / innerOrbit.length)}s` }}>
                                            <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-xl bg-obsidian/80 backdrop-blur-md border border-white/10 hover:border-neon-cyan/50 transition-colors shadow-lg flex items-center gap-2">
                                                <img
                                                    src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace('#', '')}`}
                                                    alt={tech.name}
                                                    className="w-4 h-4 md:w-5 md:h-5"
                                                />
                                                <span className="text-xs md:text-sm font-medium" style={{ color: tech.color }}>{tech.name}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Outer Orbit Ring */}
                            <div className="absolute w-[220px] h-[220px] md:w-[380px] md:h-[380px] rounded-full border border-white/5 animate-[spin_40s_linear_infinite_reverse]" />
                            {outerOrbit.map((tech, i) => (
                                <div key={tech.name} className="absolute inset-0 animate-[spin_35s_linear_infinite_reverse]" style={{ animationDelay: `-${i * (35 / outerOrbit.length)}s` }}>
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[110px] md:-translate-y-[190px]">
                                        <div className="animate-[spin_35s_linear_infinite]" style={{ animationDelay: `-${i * (35 / outerOrbit.length)}s` }}>
                                            <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-xl bg-obsidian/80 backdrop-blur-md border border-white/10 hover:border-neon-purple/50 transition-colors shadow-lg flex items-center gap-2">
                                                {/* @ts-ignore - Adding path property dynamically */}
                                                {tech.image ? (
                                                    <img src={tech.image} alt={tech.name} className="w-4 h-4 md:w-5 md:h-5 object-contain" />
                                                ) : tech.path ? (
                                                    <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 " fill={tech.color}>
                                                        <path d={tech.path} />
                                                    </svg>
                                                ) : (
                                                    <img
                                                        src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace('#', '')}`}
                                                        alt={tech.name}
                                                        className="w-4 h-4 md:w-5 md:h-5"
                                                    />
                                                )}
                                                <span className="text-xs md:text-sm font-medium" style={{ color: tech.color }}>{tech.name}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};
