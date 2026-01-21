import logo from '../assets/logo.png';

export const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/10 bg-obsidian text-center relative z-10">
            <div className="flex flex-col items-center gap-4">
                <div className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-neon-cyan/50 transition-colors duration-300">
                    <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
                </div>
                <p className="text-gray-500 text-sm">
                    Designed & Architecture by <span className="text-white font-medium">Ishaan Verma</span>
                </p>
                <p className="text-gray-600 text-xs">
                    © 2026 Ishaan Verma Portfolio. All systems nominal.
                </p>
            </div>
        </footer>
    );
};
