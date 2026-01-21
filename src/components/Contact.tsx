import { motion, AnimatePresence } from 'framer-motion';
import { Send, Github, Linkedin, Mail, Phone, Loader2, CheckCircle2, AlertCircle, X } from 'lucide-react';
import emailjs from 'emailjs-com';
import { useRef, useState, useEffect } from 'react';

export const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);
    const [notification, setNotification] = useState<{
        show: boolean;
        type: 'success' | 'error';
        message: string;
    }>({ show: false, type: 'success', message: '' });

    // Auto-dismiss notification
    useEffect(() => {
        if (notification.show) {
            const timer = setTimeout(() => {
                setNotification(prev => ({ ...prev, show: false }));
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [notification.show]);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);

        // Replace these with your actual EmailJS credentials
        const SERVICE_ID = "service_l0pzj2b";
        const PUBLIC_KEY = "E8D2CTHRBEB5lMlxO";
        const ADMIN_TEMPLATE_ID = "template_qa81it2"; // Contact Us (Notification)
        const AUTO_REPLY_TEMPLATE_ID = "template_bjbi84d"; // Contact Us (Auto-Reply)

        if (form.current) {
            // Send both emails simultaneously
            Promise.all([
                emailjs.sendForm(SERVICE_ID, ADMIN_TEMPLATE_ID, form.current, PUBLIC_KEY),
                emailjs.sendForm(SERVICE_ID, AUTO_REPLY_TEMPLATE_ID, form.current, PUBLIC_KEY)
            ]).then(
                () => {
                    setNotification({
                        show: true,
                        type: 'success',
                        message: 'Signal transmitted successfully! Secure link established.'
                    });
                    setIsSending(false);
                    form.current?.reset();
                },
                (error) => {
                    console.error("EmailJS Error:", error);
                    setNotification({
                        show: true,
                        type: 'error',
                        message: 'Transmission failed. Signal lost in deep space.'
                    });
                    setIsSending(false);
                }
            );
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Custom Notification HUD */}
            <AnimatePresence>
                {notification.show && (
                    <motion.div
                        initial={{ opacity: 0, y: -50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -50, scale: 0.9 }}
                        transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                        className={`fixed top-24 right-5 md:right-10 z-50 p-6 rounded-xl border backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-start gap-4 max-w-sm
                            ${notification.type === 'success'
                                ? 'bg-obsidian/90 border-neon-cyan/50 shadow-neon-cyan/20'
                                : 'bg-obsidian/90 border-red-500/50 shadow-red-500/20'}`}
                    >
                        <div className={`p-2 rounded-full ${notification.type === 'success' ? 'bg-neon-cyan/20 text-neon-cyan' : 'bg-red-500/20 text-red-500'}`}>
                            {notification.type === 'success' ? <CheckCircle2 size={24} /> : <AlertCircle size={24} />}
                        </div>
                        <div className="flex-1">
                            <h4 className={`text-lg font-bold font-heading mb-1 ${notification.type === 'success' ? 'text-neon-cyan' : 'text-red-500'}`}>
                                {notification.type === 'success' ? 'TRANSMISSION SENT' : 'SIGNAL ERROR'}
                            </h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {notification.message}
                            </p>
                        </div>
                        <button
                            onClick={() => setNotification(prev => ({ ...prev, show: false }))}
                            className="text-gray-500 hover:text-white transition-colors"
                        >
                            <X size={18} />
                        </button>

                        {/* Scanning Line Effect */}
                        <div className={`absolute bottom-0 left-0 h-[2px] w-full ${notification.type === 'success' ? 'bg-neon-cyan' : 'bg-red-500'} animate-[loading_5s_linear_forwards]`} />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4"><span className="text-neon-cyan">07.</span> Signal</h2>
                    <p className="text-gray-400">Establish Connection</p>
                </motion.div>

                <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-3xl font-bold text-white">Let's build something <br /><span className="text-neon-cyan">defying gravity.</span></h3>
                        <p className="text-gray-400 leading-relaxed">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-4">
                            <a href="mailto:ishaan.verma36@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-neon-cyan transition-colors group">
                                <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-neon-cyan/50">
                                    <Mail size={20} />
                                </div>
                                <span>ishaan.verma36@gmail.com</span>
                            </a>
                            <a href="tel:+919315176799" className="flex items-center gap-4 text-gray-300 hover:text-neon-cyan transition-colors group">
                                <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-neon-cyan/50">
                                    <Phone size={20} />
                                </div>
                                <span>+91 9315176799</span>
                            </a>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <a href="https://github.com/ishaanv18" target="_blank" className="p-4 rounded-full bg-obsidian border border-white/10 hover:bg-white hover:text-obsidian transition-all">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/ishaan-verma-03s/" target="_blank" className="p-4 rounded-full bg-obsidian border border-white/10 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </motion.div>

                    {/* HUD Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative p-8 rounded-3xl bg-obsidian/50 backdrop-blur-md border border-white/10"
                    >
                        {/* HUD Corners */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-cyan rounded-tl-2xl" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-cyan rounded-br-2xl" />

                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Identity (Name)</label>
                                <input type="text" name="from_name" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan/50 transition-colors" placeholder="Commander Shepard" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Mission Name (Subject)</label>
                                <input type="text" name="subject" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan/50 transition-colors" placeholder="Project Alpha" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Comms Frequency (Email)</label>
                                <input type="email" name="from_email" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan/50 transition-colors" placeholder="commander@base.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Transmission (Message)</label>
                                <textarea name="message" rows={4} required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan/50 transition-colors" placeholder="Ready for launch..." />
                            </div>
                            <button
                                type="submit"
                                disabled={isSending}
                                className="w-full py-4 bg-gradient-to-r from-neon-cyan to-neon-purple text-obsidian font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                            >
                                {isSending ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
                                {isSending ? "Transmitting..." : "Transmit Signal"}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
