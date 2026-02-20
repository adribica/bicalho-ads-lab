import React from 'react';
import { DatabaseZap, Activity, Rocket } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: "1. Blindagem de Branding",
        description: "Reescrevemos a percepção de valor da sua marca. Construímos uma estética impossível de ser ignorada, preparando o terreno para ticket alto.",
        icon: <DatabaseZap className="w-8 h-8 text-gold-main" />
    },
    {
        id: 2,
        title: "2. Páginas de Alta Retenção",
        description: "Sua vitrine vaza dinheiro. Nós desenhamos landing pages com retenção visual aguda focada em conversão, usabilidade tática e redução de fricção.",
        icon: <Activity className="w-8 h-8 text-magenta-neon" />
    },
    {
        id: 3,
        title: "3. Anúncios em Escala",
        description: "Com branding sólido e loja otimizada, injetamos tráfego agressivo. Campanhas táticas projetadas pela I.A. para capturar a maior fatia de mercado possível.",
        icon: <Rocket className="w-8 h-8 text-white" />
    }
];

const HowItWorks: React.FC = () => {
    return (
        <section className="relative w-full py-32 px-6 z-10 bg-background/80" id="como-funciona">

            {/* Glow Effects Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-magenta-neon/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-gold-main uppercase mb-4">Engenharia Híbrida</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        Como Funciona o <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta-neon to-gold-main">Laboratório</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-magenta-neon/50 hover:to-gold-main/20 transition-all duration-500 hover:-translate-y-2 h-full transform-style-3d perspective-1000"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-magenta-neon to-gold-main rounded-2xl opacity-0 group-hover:opacity-30 blur-md transition duration-500"></div>

                            <div className="relative h-full bg-[#0a0a0a] rounded-xl p-8 border border-white/5 flex flex-col gap-6 z-10 overflow-hidden" style={{ transform: 'translateZ(10px)' }}>

                                {/* Efeito de Reflexo no Hover */}
                                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-magenta-neon/30 group-hover:shadow-[0_0_30px_rgba(255,0,255,0.3)] transition-all duration-500 z-10 relative">
                                    {step.icon}
                                </div>

                                <div className="relative z-10">
                                    <h4 className="text-xl font-bold text-white mb-3 tracking-wide">{step.title}</h4>
                                    <p className="text-white/60 leading-relaxed font-medium">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
