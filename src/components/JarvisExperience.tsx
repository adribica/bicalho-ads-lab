import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Lock, CheckCircle2, Volume2, ArrowRight } from 'lucide-react';

type JarvisState = 'CAPTURE' | 'LOADING' | 'TRIGGER' | 'AUDIO';

const JarvisExperience: React.FC = () => {
    const [currentState, setCurrentState] = useState<JarvisState>('CAPTURE');
    const [progress, setProgress] = useState(0);

    // Manipular Estado 2: Loading Hacker (Simulação de 4 segundos)
    useEffect(() => {
        if (currentState === 'LOADING') {
            const interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setTimeout(() => setCurrentState('TRIGGER'), 500);
                        return 100;
                    }
                    return prev + Math.floor(Math.random() * 15) + 5;
                });
            }, 400);

            return () => clearInterval(interval);
        }
    }, [currentState]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setCurrentState('LOADING');
    };

    const handleAudioTrigger = () => {
        setCurrentState('AUDIO');
    };

    // Variantes de Animação Refinadas
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            transition: { duration: 0.5, ease: 'easeOut' }
        },
        exit: {
            opacity: 0,
            scale: 1.05,
            filter: 'blur(10px)',
            transition: { duration: 0.4, ease: 'easeIn' }
        }
    };

    return (
        <section id="jarvis-experience" className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-6 mt-20 z-20">

            {/* Background Central Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary-neon/10 blur-[150px] rounded-[100%] pointer-events-none -z-10"></div>

            <div className="w-full max-w-2xl relative">
                <AnimatePresence mode="wait">

                    {/* ESTADO 1: CAPTURA DE LEADS */}
                    {currentState === 'CAPTURE' && (
                        <motion.div
                            key="capture"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="glass p-10 md:p-14 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-neon to-transparent opacity-50"></div>

                            <div className="text-center mb-10">
                                <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 mb-6 shadow-glow">
                                    <Terminal className="w-8 h-8 text-primary-neon animate-pulse" />
                                </div>
                                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
                                    Onde Dados se Tornam <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-neon to-cyan-glow">Dominância de Mercado</span>
                                </h2>
                                <p className="text-white/60 font-medium text-lg">Inicie a varredura e descubra os vazamentos da sua operação.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                <input
                                    type="text"
                                    required
                                    placeholder="Nome Completo"
                                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary-neon/50 focus:ring-1 focus:ring-primary-neon/50 transition-all font-medium placeholder:text-white/30"
                                />
                                <input
                                    type="url"
                                    required
                                    placeholder="Link do Instagram (@suaempresa)"
                                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-glow/50 focus:ring-1 focus:ring-cyan-glow/50 transition-all font-medium placeholder:text-white/30"
                                />
                                <input
                                    type="tel"
                                    required
                                    placeholder="WhatsApp com DDD"
                                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary-neon/50 focus:ring-1 focus:ring-primary-neon/50 transition-all font-medium placeholder:text-white/30"
                                />

                                <button
                                    type="submit"
                                    className="mt-4 w-full group relative inline-flex items-center justify-center gap-3 bg-white text-black text-lg font-bold py-5 px-8 rounded-xl overflow-hidden transition-all hover:scale-[1.02] shadow-glow active:scale-[0.98]"
                                >
                                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-neon via-cyan-glow to-primary-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                                    INICIAR VARREDURA DO SISTEMA
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </motion.div>
                    )}

                    {/* ESTADO 2: LOADING HACKER */}
                    {currentState === 'LOADING' && (
                        <motion.div
                            key="loading"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="glass p-10 md:p-14 rounded-3xl border border-primary-neon/30 shadow-[0_0_50px_rgba(138,43,226,0.15)] font-mono"
                        >
                            <div className="flex items-center gap-3 text-cyan-glow mb-8 pb-4 border-b border-white/5">
                                <Lock className="w-5 h-5" />
                                <span className="text-sm font-bold tracking-widest uppercase">Conexão Segura Estabelecida</span>
                            </div>

                            <div className="space-y-4 text-sm md:text-base text-white/70 mb-10">
                                <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex gap-2">
                                    <span className="text-primary-neon">{'>'}</span> Acessando Meta Ads API...
                                </motion.p>
                                <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 }} className="flex gap-2 text-white">
                                    <span className="text-primary-neon">{'>'}</span> Isolando pixels vazados...
                                </motion.p>
                                <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2.0 }} className="flex gap-2">
                                    <span className="text-primary-neon">{'>'}</span> Mapeando gargalos de conversão...
                                </motion.p>
                                <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 3.0 }} className="flex gap-2 text-cyan-glow">
                                    <span className="text-cyan-glow">{'>'}</span> Compilando dossiê 80/20...
                                </motion.p>
                            </div>

                            {/* Barra de Progresso */}
                            <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden border border-white/5">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-primary-neon to-cyan-glow relative"
                                    initial={{ width: '0%' }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ ease: "linear", duration: 0.2 }}
                                >
                                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:20px_20px] animate-[slide_1s_linear_infinite]"></div>
                                </motion.div>
                            </div>
                            <div className="text-right mt-2 text-xs text-white/40">{progress > 100 ? 100 : progress}%</div>
                        </motion.div>
                    )}

                    {/* ESTADO 3: GATILHO */}
                    {currentState === 'TRIGGER' && (
                        <motion.div
                            key="trigger"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="flex flex-col items-center justify-center p-10"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                className="w-24 h-24 rounded-full bg-primary-neon/20 flex items-center justify-center mb-8 border border-primary-neon/50 shadow-glow-lg"
                            >
                                <CheckCircle2 className="w-12 h-12 text-primary-neon" />
                            </motion.div>

                            <button
                                onClick={handleAudioTrigger}
                                className="relative px-10 py-6 rounded-2xl bg-black border border-primary-neon/50 shadow-[0_0_60px_rgba(138,43,226,0.5)] overflow-hidden group hover:scale-[1.02] transition-transform active:scale-[0.98]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-neon/20 to-cyan-glow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <span className="relative z-10 text-xl md:text-2xl font-black text-white tracking-widest flex items-center gap-4">
                                    ANÁLISE CONCLUÍDA. OUVIR A I.A.
                                    <Volume2 className="w-6 h-6 animate-pulse" />
                                </span>

                                {/* Glow Border Effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary-neon to-cyan-glow rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 -z-10"></div>
                            </button>
                        </motion.div>
                    )}

                    {/* ESTADO 4: ÁUDIO FINAL / REDIRECIONAMENTO */}
                    {currentState === 'AUDIO' && (
                        <motion.div
                            key="audio"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="glass p-10 md:p-14 rounded-3xl border border-white/10 text-center relative overflow-hidden"
                        >
                            {/* Equalizer Animado */}
                            <div className="flex items-center justify-center gap-2 mb-10 h-16">
                                {[...Array(9)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{
                                            height: ["20%", "100%", "40%", "80%", "20%"],
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: i * 0.1,
                                        }}
                                        className="w-3 rounded-full bg-gradient-to-t from-primary-neon to-cyan-glow"
                                    />
                                ))}
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-relaxed">
                                Seu dossiê visual e o plano de ação foram enviados de forma <span className="text-cyan-glow">criptografada</span> para o seu WhatsApp.
                            </h2>
                            <p className="text-white/50 font-medium mb-10">Nossos engenheiros aguardam autorização para injetar os novos protocolos na sua conta.</p>

                            <a
                                href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20receber%20meu%20dossi%C3%AA%20da%20an%C3%A1lise%20Jarvis."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center justify-center gap-3 w-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366] hover:text-black py-5 px-8 rounded-xl font-bold text-lg transition-all shadow-[0_0_30px_rgba(37,211,102,0.15)] hover:shadow-[0_0_40px_rgba(37,211,102,0.4)]"
                            >
                                ABRIR MEU WHATSAPP AGORA
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
        </section>
    );
};

export default JarvisExperience;
