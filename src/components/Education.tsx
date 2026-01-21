import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap } from 'lucide-react';

export const Education = () => {
    return (
        <section id="education" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4"><span className="text-neon-purple">02.</span> Education</h2>
                </motion.div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2">
                        <motion.div
                            className="absolute top-0 left-0 w-full bg-gradient-to-b from-neon-purple to-neon-cyan"
                            initial={{ height: 0 }}
                            whileInView={{ height: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </div>

                    {/* Education Item */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative flex flex-col md:flex-row items-center gap-8 group"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-obsidian border-2 border-neon-cyan rounded-full -translate-x-[calc(50%-0.5px)] z-10 group-hover:scale-150 group-hover:bg-neon-cyan transition-all duration-300 shadow-[0_0_10px_rgba(0,243,255,0.5)]" />

                        <div className="md:w-1/2 md:pr-12 md:text-right ml-10 md:ml-0 flex flex-col items-end">
                            <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-2 border-neon-cyan/50 shadow-[0_0_15px_rgba(0,243,255,0.3)] bg-white p-1">
                                <img src="/vit_logo.jpg" alt="VIT Logo" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">B.Tech in Computer Science Engineering</h3>
                            <p className="text-neon-purple font-medium mb-4">Vellore Institute of Technology</p>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-400 md:justify-end">
                                <div className="flex items-center gap-1"><Calendar size={14} /> 2022 - 2026</div>
                                <div className="flex items-center gap-1"><MapPin size={14} /> Bhopal, Madhya Pradesh, India</div>
                            </div>
                        </div>

                        <div className="md:w-1/2 md:pl-12 ml-10 md:ml-0">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-cyan/30 transition-colors">
                                <div className="flex items-center gap-3 mb-4 text-neon-cyan">
                                    <GraduationCap />
                                    <span className="font-bold">CGPA: 8.2/10</span>
                                </div>
                                <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                                    <p>
                                        I am currently pursuing my B.Tech in Computer Science Engineering at VIT Bhopal, where I have built a strong foundation in core computer science subjects such as Data Structures & Algorithms, Operating Systems, Computer Networks, DBMS, and Object-Oriented Programming.
                                    </p>
                                    <p>
                                        Alongside academics, I actively focus on practical, real-world development by working on full-stack and AI-driven projects using Spring Boot, React, MongoDB, AWS, Docker, and modern DevOps practices.
                                    </p>
                                    <p>
                                        My learning approach is highly project-oriented, allowing me to apply theoretical concepts to real-world systems like HR platforms, AI learning tools, and code intelligence systems. I continuously upgrade my skills through certifications and hands-on development to stay aligned with industry standards.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
