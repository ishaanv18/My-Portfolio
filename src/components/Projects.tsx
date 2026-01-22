import { motion } from 'framer-motion';
import { Github, Code2, ExternalLink } from 'lucide-react';
import empowerlyLogo from '../assets/empowerly_logo.webp';
import arribotLogo from '../assets/arribot_logo.webp';
import aiDungeonLogo from '../assets/ai_dungeon_logo.webp';

export const Projects = () => {
    const projects = [
        {
            title: "Empowerly",
            category: "Employee-HR Management System",
            description: "A unified, AI-driven HR platform designed to automate workforce operations, improve employee engagement, and deliver real-time business insights. Empowerly integrates attendance, leave, payroll, performance reviews, real-time chat, and video meetings into a single secure system.",
            tech: ["Java", "Spring Boot", "React", "WebRTC", "MongoDB"],
            github: "https://github.com/ishaanv18/Empowerly",
            live: "https://empowerly.vercel.app/",
            gradient: "from-pink-500 to-rose-500",
            logo: empowerlyLogo,
            logoBg: "bg-white"
        },
        {
            title: "ArriBot",
            category: "AI Learning Platform",
            description: "A modern, full-stack AI-powered learning platform designed to enhance self-study through intelligent automation. ArriBot enables users to interact with an AI chatbot, generate flashcards, create quizzes, and summarize long texts for faster learning.",
            tech: ["Spring Boot", "React", "Gemini AI", "MongoDB"],
            github: "https://github.com/ishaanv18/ArriBot",
            live: "https://arri-bot.vercel.app/",
            gradient: "from-blue-500 to-cyan-500",
            logo: arribotLogo,
            logoBg: "bg-white"
        },
        {
            title: "ASTraMind",
            category: "AI Code Intelligence",
            description: "An advanced AI-driven platform that transforms large codebases into intelligent, searchable knowledge systems. ASTraMind enables developers to query their code using natural language, understand architecture, analyze dependencies, and gain AI-powered insights.",
            tech: ["Spring Boot", "PostgreSQL", "React", "LLM", "RAG"],
            github: "https://github.com/ishaanv18/ASTraMind",
            live: "https://astramind.vercel.app/",
            gradient: "from-purple-500 to-indigo-500"
        },
        {
            title: "AI-Dungeon-Master",
            category: "Game",
            description: "An immersive AI-driven text RPG where players become the hero of their own evolving story. Powered by Google Gemini AI, the Dungeon Master dynamically generates narratives, adapts to player choices, and manages character stats, inventory, and health in real time.",
            tech: ["Spring Boot", "React", "Gemini AI", "MongoDB", "Web Speech API"],
            github: "",
            live: "https://ai-dungeon-master-eta.vercel.app/",
            gradient: "from-amber-500 to-orange-500",
            logo: aiDungeonLogo,
            logoBg: "bg-black"
        }
    ];

    return (
        <section id="projects" className="py-24 relative">
            {/* Background Galaxy Dust */}
            <div className="absolute left-0 top-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4"><span className="text-neon-cyan">05.</span> Galaxy</h2>
                    <p className="text-gray-400">Featured Projects</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="group relative rounded-3xl bg-obsidian border border-white/10 overflow-hidden hover:border-white/20 transition-colors h-full flex flex-col"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-b ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                            <div className="absolute inset-[1px] bg-obsidian rounded-[23px] z-0" />

                            <div className="relative z-10 p-8 flex flex-col h-full">
                                <div className="mb-6 flex justify-between items-start">
                                    {project.logo ? (
                                        <div className={`w-20 h-20 rounded-2xl ${project.logoBg || 'bg-white'} p-2 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform duration-300`}>
                                            <img src={project.logo} alt={`${project.title} logo`} className="w-full h-full object-contain" />
                                        </div>
                                    ) : (
                                        <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-10 w-12 h-12 flex items-center justify-center`}>
                                            <Code2 className="text-white" size={24} />
                                        </div>
                                    )}
                                    <div className="flex gap-4">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {project.live && (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">{project.title}</h3>
                                <p className="text-sm font-mono text-neon-cyan mb-4">{project.category}</p>

                                <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 rounded-full border border-white/10">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
