import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';

export const Contributions = () => {
    return (
        <section id="contributions" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4"><span className="text-neon-cyan">07.</span> The Legacy</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full mb-8" />
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        My open source contributions and coding activity on GitHub.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_50px_rgba(157,0,255,0.1)] hover:border-neon-purple/30 transition-colors overflow-x-auto"
                >
                    <GitHubCalendar
                        username="ishaanv18"
                        colorScheme='dark'
                        fontSize={14}
                        blockSize={12}
                        blockMargin={5}
                        theme={{
                            dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                        }}
                        style={{
                            color: '#e2e8f0'
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
};
