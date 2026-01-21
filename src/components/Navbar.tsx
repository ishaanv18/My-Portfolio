import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, Briefcase, Code, Mail, GraduationCap, Cpu } from 'lucide-react';
import { cn } from '../lib/utils';
import logo from '../assets/logo.png';
import resume from '../assets/Ishaan_Verma_Resume.pdf';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'About', icon: <User size={18} />, href: '#about' },
        { name: 'Education', icon: <GraduationCap size={18} />, href: '#education' },
        { name: 'Experience', icon: <Briefcase size={18} />, href: '#experience' },
        { name: 'Arsenal', icon: <Cpu size={18} />, href: '#tech' },
        { name: 'Projects', icon: <Code size={18} />, href: '#projects' },
        { name: 'Contact', icon: <Mail size={18} />, href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "py-4" : "py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className={cn(
                    "flex items-center justify-between p-4 rounded-2xl transition-all duration-300",
                    scrolled || isOpen
                        ? "bg-obsidian/70 backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(0,243,255,0.1)]"
                        : "bg-transparent border border-transparent"
                )}>
                    {/* Logo */}
                    <a href="#" className="relative z-10 flex items-center gap-2 group">
                        <img src={logo} alt="Ishaan Verma" className="h-12 w-auto object-contain hover:scale-105 transition-transform duration-300" />
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-gray-300 hover:text-neon-cyan transition-colors relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}
                        <a
                            href={resume}
                            target="_blank"
                            className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:bg-neon-cyan/20 hover:border-neon-cyan/50 hover:text-neon-cyan transition-all duration-300"
                        >
                            Resume
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white hover:text-neon-cyan transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: 'auto' }}
                            exit={{ opacity: 0, y: -20, height: 0 }}
                            className="md:hidden mt-2 overflow-hidden rounded-2xl bg-obsidian/90 backdrop-blur-xl border border-white/10"
                        >
                            <div className="flex flex-col p-6 gap-4">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-3 text-lg text-gray-300 hover:text-neon-cyan transition-colors"
                                    >
                                        {item.icon}
                                        {item.name}
                                    </a>
                                ))}
                                <a
                                    href={resume}
                                    target="_blank"
                                    className="mt-4 px-6 py-3 bg-neon-cyan/10 border border-neon-cyan/30 rounded-xl text-center text-neon-cyan font-medium hover:bg-neon-cyan/20 transition-all"
                                >
                                    Resume
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};
