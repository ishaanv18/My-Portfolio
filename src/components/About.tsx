import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { MapPin } from 'lucide-react';

const TiltCard = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useMotionTemplate`calc(${mouseYSpring} * -0.5deg)`;
    const rotateY = useMotionTemplate`calc(${mouseXSpring} * 0.5deg)`;

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct * 20);
        y.set(yPct * 20);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative w-full max-w-4xl mx-auto rounded-3xl bg-gray-900/50 backdrop-blur-xl border border-white/10 p-8 md:p-12 shadow-[0_0_50px_rgba(0,243,255,0.1)] group"
        >
            {/* Glossy overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none group-hover:opacity-75 transition-opacity duration-500" />

            <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};

export const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-neon-cyan/20 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4"><span className="text-neon-cyan">01.</span> About Me</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full" />
                </motion.div>

                <TiltCard>
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                            <div className="relative w-64 h-64 rounded-full overflow-hidden border-2 border-white/20">
                                <img src="/ishaan_profile.jpg" alt="Ishaan Verma" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        <div className="text-left space-y-6">
                            <h3 className="text-2xl font-bold font-heading">The Explorer</h3>
                            <div className="space-y-4 text-gray-300 leading-relaxed font-light text-lg">
                                <p>
                                    I’m Ishaan Verma, a final-year <span className="text-white font-bold">B.Tech Computer Science Engineering</span> student at VIT Bhopal with a strong passion for building scalable, real-world software products. I specialize in <span className="text-neon-cyan font-medium">Full Stack Development</span> and enjoy working at the intersection of backend systems, modern frontend interfaces, AI-powered applications, and product design.
                                </p>
                                <p>
                                    Along with a solid technical foundation in DSA, Operating Systems, DBMS, and Computer Networks, I also have a growing interest in product development and business fundamentals. I focus on understanding user needs, system usability, performance, and real-world impact while building solutions.
                                </p>
                                <p>
                                    I have hands-on experience with Spring Boot, React, MongoDB, AWS, Docker, and Kubernetes, and I aim to create secure, efficient, and scalable systems that can evolve into real products. My project work includes <span className="text-neon-purple font-medium">HR platforms, AI learning tools, and code intelligence systems</span> designed with both technical excellence and business value in mind.
                                </p>
                                <p>
                                    My goal is to grow as a product-focused software engineer who not only writes strong code but also understands how technology solves real business problems.
                                </p>
                            </div>

                            {/* Location / Base Ops */}
                            <div className="mt-8 flex items-center gap-4 p-4 rounded-xl bg-obsidian/40 border border-white/10 backdrop-blur-md w-fit hover:border-neon-cyan/50 transition-colors group/pin">
                                <div className="p-2 rounded-full bg-neon-cyan/10 text-neon-cyan group-hover/pin:animate-pulse">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Base of Operations</h4>
                                    <p className="text-white font-medium">Ghaziabad, Uttar Pradesh, India</p>
                                </div>
                            </div>

                            {/* Core Concepts */}
                            <div className="mt-8 pt-8 border-t border-white/10">
                                <h4 className="text-sm font-bold text-neon-purple uppercase tracking-widest mb-4">Core Concepts</h4>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        "Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems",
                                        "Computer Networks", "Clean Code", "SDLC", "Microservices", "System Design"
                                    ].map((concept, i) => (
                                        <div key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400 hover:text-white hover:border-neon-cyan/50 transition-colors">
                                            {concept}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </TiltCard>
            </div >
        </section >
    );
};
