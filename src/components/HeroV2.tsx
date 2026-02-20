import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, ShoppingBag, Eye, Zap } from 'lucide-react';

const HeroV2: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Normalizando a posição do mouse entre -1 e 1
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const scrollToJarvis = () => {
        const element = document.getElementById('jarvis-experience');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative w-full min-h-screen pt-32 pb-20 px-6 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto z-20 overflow-hidden">

            {/* Background Glows */}
            <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary-neon/15 blur-[150px] rounded-full pointer-events-none -z-10"></div>
            <div className="absolute bottom-0 -right-1/4 w-[500px] h-[500px] bg-magenta-neon/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

            {/* Esquerda: Copywriting Violento */}
            <div className="w-full lg:w-1/2 flex flex-col items-start z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 transform-style-3d"
                >
                    <div className="w-2 h-2 rounded-full bg-magenta-neon animate-pulse-fast"></div>
                    <span className="text-xs font-bold tracking-widest text-white/80 uppercase">Auditoria Gratuita Liberada</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8"
                >
                    Não aumente sua verba de anúncios antes de <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta-neon via-primary-neon to-gold-main">consertar sua loja.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-white/60 font-medium leading-relaxed mb-10 max-w-xl"
                >
                    A engenharia oculta por trás de marcas milionárias. Nós não fazemos apenas tráfego: nós reescrevemos o <strong className="text-white">Branding</strong>, refinamos a <strong className="text-white">Oferta</strong> e construímos <strong className="text-white">Páginas de Produto</strong> que convertem frios em fãs.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <button
                        onClick={scrollToJarvis}
                        className="group relative px-8 py-5 rounded-xl bg-white text-black font-black text-lg overflow-hidden transition-all hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                    >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-magenta-neon/20 to-primary-neon/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative flex items-center justify-center gap-3">
                            INICIAR DIAGNÓSTICO ESTÉTICO
                            <Zap className="w-5 h-5 group-hover:text-magenta-neon transition-colors" />
                        </span>
                    </button>

                    <button
                        className="px-8 py-5 rounded-xl glass font-bold text-white hover:bg-white/10 transition-colors border border-white/10 flex items-center justify-center gap-3"
                        onClick={() => {
                            const worksSection = document.getElementById('como-funciona');
                            worksSection?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Ver Metodologia
                    </button>
                </motion.div>
            </div>

            {/* Direita: Elementos 3D Dinâmicos (Painel de Gestão Metafórico) */}
            <div className="w-full lg:w-1/2 mt-20 lg:mt-0 relative perspective-1000 h-[500px] hidden md:block">

                {/* Card Principal - Dashboard Abstrato */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md h-[400px] glass rounded-3xl p-6 border-white/10 shadow-2xl flex flex-col justify-between overflow-hidden"
                    animate={{
                        rotateX: mousePosition.y * -15,
                        rotateY: mousePosition.x * 15,
                    }}
                    transition={{ type: "spring", stiffness: 75, damping: 20 }}
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* Fundo Reflexivo Interno */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-magenta-neon/10 via-transparent to-primary-neon/10 pointer-events-none"></div>

                    <div className="flex justify-between items-start" style={{ transform: 'translateZ(30px)' }}>
                        <div>
                            <p className="text-white/50 font-bold text-sm tracking-wider uppercase mb-1">CPA Atual</p>
                            <h3 className="text-4xl font-black text-white shrink-0">R$ 14,32</h3>
                        </div>
                        <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                            <TrendingUp className="w-6 h-6 text-magenta-neon" />
                        </div>
                    </div>

                    <div className="space-y-4" style={{ transform: 'translateZ(50px)' }}>
                        <div className="h-2 w-full bg-[#0a0a0a] rounded-full overflow-hidden">
                            <div className="h-full w-[85%] bg-gradient-to-r from-primary-neon to-magenta-neon relative">
                                <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:20px_20px] animate-[slide_1s_linear_infinite]"></div>
                            </div>
                        </div>
                        <div className="flex justify-between text-xs font-medium text-white/40">
                            <span>Eficiência do Criativo</span>
                            <span className="text-magenta-neon">85% Teto de Escala</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-6" style={{ transform: 'translateZ(40px)' }}>
                        <div className="p-4 bg-[#0a0a0a]/80 backdrop-blur rounded-2xl border border-white/5">
                            <Target className="w-5 h-5 text-gold-main mb-2" />
                            <p className="text-white/50 text-xs font-bold mb-1">Taxa de Conversão</p>
                            <p className="text-xl font-black text-white">+4.2%</p>
                        </div>
                        <div className="p-4 bg-[#0a0a0a]/80 backdrop-blur rounded-2xl border border-white/5">
                            <ShoppingBag className="w-5 h-5 text-primary-neon mb-2" />
                            <p className="text-white/50 text-xs font-bold mb-1">LTV Projetado</p>
                            <p className="text-xl font-black text-white">R$ 840</p>
                        </div>
                    </div>
                </motion.div>

                {/* Card Flutuante 1 - Notificação */}
                <motion.div
                    className="absolute -left-10 top-20 glass p-4 rounded-2xl border border-magenta-neon/30 shadow-glow-magenta flex items-center gap-4 z-20 animate-float"
                    animate={{
                        rotateX: mousePosition.y * -20,
                        rotateY: mousePosition.x * 20,
                        z: 80
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                >
                    <div className="w-10 h-10 rounded-full bg-magenta-neon/20 flex items-center justify-center border border-magenta-neon/50">
                        <Eye className="w-5 h-5 text-magenta-neon" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-white/50">Página de Produto</p>
                        <p className="text-sm font-black text-white">Retenção Visual Aumentada</p>
                    </div>
                </motion.div>

                {/* Card Flutuante 2 - Badge Gold */}
                <motion.div
                    className="absolute -right-5 bottom-16 glass p-4 rounded-2xl border border-gold-main/30 shadow-glow-gold flex items-center gap-4 z-20"
                    animate={{
                        rotateX: mousePosition.y * -25,
                        rotateY: mousePosition.x * 25,
                        y: [0, -15, 0]
                    }}
                    transition={{
                        y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
                        rotateX: { type: "spring", stiffness: 100, damping: 15 },
                        rotateY: { type: "spring", stiffness: 100, damping: 15 }
                    }}
                >
                    <div className="w-10 h-10 rounded-xl bg-gold-main/20 flex items-center justify-center border border-gold-main/50">
                        <Zap className="w-5 h-5 text-gold-main" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-white/50">Branding Inject</p>
                        <p className="text-sm font-black text-white">Percepção de Valor Alta</p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default HeroV2;
