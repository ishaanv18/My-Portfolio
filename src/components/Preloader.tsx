import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 500); // Wait a bit after 100%
                    return 100;
                }
                // Randomize increment for "hacking" feel
                const increment = Math.floor(Math.random() * 5) + 1;
                return Math.min(prev + increment, 100);
            });
        }, 80); // Roughly 3-4 seconds total

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-obsidian flex flex-col items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            {/* Central Reactor Core */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center mb-12">
                {/* Outer Rotating Rings */}
                <div className="absolute inset-0 border-2 border-neon-cyan/20 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-4 border border-neon-purple/30 rounded-full animate-[spin_8s_linear_infinite_reverse]" />
                <div className="absolute inset-8 border-2 border-neon-cyan/40 rounded-full border-dashed animate-[spin_15s_linear_infinite]" />

                {/* Core Pulse */}
                <div className="absolute w-24 h-24 bg-neon-cyan/10 rounded-full blur-xl animate-pulse" />
                <div className="relative z-10 text-4xl md:text-5xl font-bold font-heading text-white tracking-wider flex items-center">
                    {progress}%
                </div>
            </div>

            {/* Loading Text with Glitch Effect */}
            <div className="relative">
                <div className="text-neon-cyan font-mono text-sm md:text-base tracking-[0.2em] animate-pulse">
                    INITIALIZING IV-GRAVITY PROTOCOLS...
                </div>
                {/* Scanning Line */}
                <div className="absolute bottom-0 left-0 h-[2px] bg-neon-purple w-full animate-[width_2s_ease-in-out_infinite]" />
            </div>

            {/* System Status Lines */}
            <div className="mt-8 space-y-1 text-xs text-gray-500 font-mono text-center opacity-70">
                <p>{progress < 30 ? "Booting Neural Systems..." : progress < 60 ? "Calibrating Gravity Engines..." : "Establishing Secure Uplink..."}</p>
                <p className="text-[10px] tracking-widest">SYS.VER.2025.1.0</p>
            </div>
        </motion.div>
    );
};
