import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, ChevronDown, ChevronUp, MapPin } from 'lucide-react';

export const Experience = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const experiences = [
        {
            company: "Arrise Solutions (India) Pvt. Ltd.",
            role: "Software Developer Intern",
            period: "Oct 2024 – Dec 2024",
            location: "Noida, Uttar Pradesh, India",
            logo: "/src/assets/arrise_logo.png",
            intro: "During my internship at Arrise Solutions, I worked on building and optimizing production-grade full-stack applications for enterprise use. I contributed to both backend and frontend development, focusing on performance, security, and user experience.",
            details: [
                "On the backend, I developed and enhanced features using Spring Boot, implemented secure authentication with role-based access control, and optimized APIs for better reliability and scalability. I also performed debugging, unit testing, and code optimization to ensure high-quality delivery.",
                "On the frontend, I built dynamic and responsive interfaces using React, improving usability and creating a smooth user experience for end users.",
                "I collaborated with cross-functional teams and actively contributed to the PWF360 global project (Romania-based) by participating in quality assurance, testing, and system validation to ensure high software standards."
            ],
            footer: "This experience helped me understand real-world software development workflows, agile collaboration, and how engineering decisions directly impact product performance and business outcomes."
        }
    ];

    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute right-0 top-1/2 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4"><span className="text-neon-cyan">03.</span> Experience</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full" />
                </motion.div>

                <div className="flex flex-col gap-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 20,
                                delay: index * 0.2
                            }}
                            className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden group hover:border-neon-purple/50 transition-colors duration-500"
                        >
                            {/* Glow Effect */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/5 rounded-full blur-[80px] group-hover:bg-neon-purple/10 transition-colors" />

                            <div className="relative z-10 flex flex-col md:flex-row gap-8">
                                <div className="md:w-1/3 flex flex-col items-start text-left">
                                    {exp.logo && (
                                        <div className="w-48 h-auto mb-6 bg-white p-4 rounded-xl shadow-lg shadow-neon-purple/20">
                                            <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                                        </div>
                                    )}
                                    <div className="flex items-center gap-3 text-neon-cyan mb-2">
                                        <Briefcase size={20} />
                                        <span className="font-bold tracking-wider uppercase text-sm">Experience</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                    <h4 className="text-xl text-neon-purple font-medium mb-4">{exp.company}</h4>
                                    <div className="flex flex-col gap-2 text-gray-400 text-sm">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} />
                                            {exp.period}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} />
                                            {exp.location}
                                        </div>
                                    </div>
                                </div>

                                <div className="md:w-2/3 border-l border-white/10 pl-0 md:pl-8 pt-6 md:pt-0 flex flex-col">
                                    <p className="text-gray-300 mb-4 text-lg font-light leading-relaxed">
                                        {exp.intro}
                                    </p>

                                    <AnimatePresence>
                                        {expandedIndex === index && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="space-y-4 mb-6">
                                                    {exp.details.map((detail, i) => (
                                                        <p key={i} className="text-gray-400 leading-relaxed">
                                                            {detail}
                                                        </p>
                                                    ))}
                                                </div>
                                                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-sm italic mb-6">
                                                    "{exp.footer}"
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <button
                                        onClick={() => toggleExpand(index)}
                                        className="self-start mt-2 flex items-center gap-2 text-neon-cyan hover:text-neon-purple transition-colors font-medium text-sm uppercase tracking-wider"
                                    >
                                        {expandedIndex === index ? (
                                            <>Show Less <ChevronUp size={16} /></>
                                        ) : (
                                            <>View More <ChevronDown size={16} /></>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
