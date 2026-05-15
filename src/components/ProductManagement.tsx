import { motion } from 'framer-motion';
import { ExternalLink, Download, Target, Users, Layers, Rocket, FileText } from 'lucide-react';
import empowerlyLogo from '../assets/empowerly_logo.webp';
import arribotLogo from '../assets/arribot_logo.webp';
import astramindLogo from '../assets/astramind_logo.png';

export const ProductManagement = () => {
    const prds = [
        {
            title: "Empowerly",
            subtitle: "HR Management Platform",
            description: "A comprehensive PM document detailing the vision, user personas, strategic roadmap, and feature specifications to unify HR operations into a secure, AI-driven system.",
            focusAreas: [
                { icon: <Target size={16} />, text: "Strategic Roadmap" },
                { icon: <Users size={16} />, text: "User Personas" },
                { icon: <Layers size={16} />, text: "Feature Specs" }
            ],
            notionLink: "https://www.notion.so/Empowerly-Product-Requirements-Document-35de0b2be0e180b08829e7075531f230?source=copy_link",
            pdfLink: "/Empowerly_Product_Requirements_Document.pdf",
            logo: empowerlyLogo,
            logoBg: "bg-white",
            gradient: "from-blue-500/20 to-cyan-500/20",
            border: "group-hover:border-cyan-500/50"
        },
        {
            title: "ASTraMind",
            subtitle: "AI Code Intelligence",
            description: "Product management lifecycle focused on production stabilization, addressing OOM crashes, defining Neon PostgreSQL migration, and mapping out the optimization of indexing pipelines.",
            focusAreas: [
                { icon: <Rocket size={16} />, text: "Production Scaling" },
                { icon: <Layers size={16} />, text: "Tech Architecture" },
                { icon: <Target size={16} />, text: "Performance KPIs" }
            ],
            notionLink: "https://www.notion.so/ASTraMind-359e0b2be0e180bcb0f3e00222f2d88e?source=copy_link",
            pdfLink: "/ASTraMind_Product_Management.pdf",
            logo: astramindLogo,
            logoBg: "bg-black",
            gradient: "from-purple-500/20 to-indigo-500/20",
            border: "group-hover:border-purple-500/50"
        },
        {
            title: "ArriBot",
            subtitle: "AI Learning Platform",
            description: "A highly structured 15-section PRD spanning from the core product vision to final retrospective. It aligns engineering deliverables with stakeholder expectations for an intelligent automation tool.",
            focusAreas: [
                { icon: <FileText size={16} />, text: "15-Section PRD" },
                { icon: <Target size={16} />, text: "Vision & Scope" },
                { icon: <Users size={16} />, text: "Stakeholder Alignment" }
            ],
            notionLink: "https://www.notion.so/ArriBot-Product-Requirements-Document-35de0b2be0e1808b8031f9a0908add3e?source=copy_link",
            pdfLink: "/ArriBot_Comprehensive_PRD.pdf",
            logo: arribotLogo,
            logoBg: "bg-white",
            gradient: "from-emerald-500/20 to-teal-500/20",
            border: "group-hover:border-emerald-500/50"
        }
    ];

    return (
        <section id="product-management" className="py-24 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                        <span className="text-neon-purple">06.</span> Product Management
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Bridging the gap between engineering and user needs. Here is a deep dive into my strategic planning, requirement documentation, and product execution workflows.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {prds.map((prd, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className={`group relative rounded-3xl bg-obsidian/80 backdrop-blur-xl border border-white/10 ${prd.border} overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col h-full`}
                        >
                            {/* Animated Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${prd.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0`} />
                            
                            <div className="relative z-10 p-8 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-8">
                                    <div className={`w-16 h-16 rounded-2xl ${prd.logoBg} p-2 flex items-center justify-center shadow-lg shadow-black/50 group-hover:scale-110 transition-transform duration-500`}>
                                        <img src={prd.logo} alt={`${prd.title} logo`} className="w-full h-full object-contain" />
                                    </div>
                                    <div className="flex gap-3">
                                        <a 
                                            href={prd.pdfLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="p-2.5 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110"
                                            title="Download PDF"
                                        >
                                            <Download size={18} />
                                        </a>
                                        <a 
                                            href={prd.notionLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="p-2.5 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110"
                                            title="View on Notion"
                                        >
                                            <ExternalLink size={18} />
                                        </a>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                        {prd.title}
                                    </h3>
                                    <p className="text-sm font-mono text-neon-cyan/80 group-hover:text-neon-cyan transition-colors">
                                        {prd.subtitle}
                                    </p>
                                </div>

                                <p className="text-gray-400 leading-relaxed mb-8 flex-grow group-hover:text-gray-300 transition-colors">
                                    {prd.description}
                                </p>

                                <div className="space-y-3 mt-auto">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Key PM Focus</p>
                                    {prd.focusAreas.map((area, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm text-gray-300 bg-white/5 p-3 rounded-xl border border-white/5 group-hover:border-white/10 transition-colors">
                                            <div className="text-neon-purple group-hover:scale-110 transition-transform">
                                                {area.icon}
                                            </div>
                                            <span>{area.text}</span>
                                        </div>
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
