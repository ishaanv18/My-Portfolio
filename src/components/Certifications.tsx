import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export const Certifications = () => {
    const certs = [
        {
            name: "Oracle OCI DevOps Professional",
            issuer: "Oracle",
            date: "2024",
            gradient: "from-red-500/20 to-orange-500/20"
        },
        {
            name: "Oracle OCI Generative AI",
            issuer: "Oracle",
            date: "2024",
            gradient: "from-blue-500/20 to-purple-500/20"
        },
        {
            name: "NPTEL Cloud Computing",
            issuer: "IIT Madras",
            date: "2023",
            gradient: "from-green-500/20 to-teal-500/20"
        },
        {
            name: "Tech Fest 2025 Gold Medal",
            issuer: "Ramanujan Club",
            date: "2025",
            icon: "🏆",
            gradient: "from-yellow-500/20 to-amber-500/20"
        }
    ];

    return (
        <section id="certifications" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4"><span className="text-neon-purple">04.</span> Badges</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certs.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative group perspective-1000"
                        >
                            <div className={`relative h-full p-6 bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-500 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]`}>
                                {/* Holographic Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 bg-white/5 rounded-lg text-neon-cyan">
                                            {('icon' in cert && cert.icon) ? <span className="text-xl">{cert.icon}</span> : <Award size={24} />}
                                        </div>
                                        <span className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded">
                                            {cert.date}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors">{cert.name}</h3>
                                    <p className="text-sm text-gray-400">{cert.issuer}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
