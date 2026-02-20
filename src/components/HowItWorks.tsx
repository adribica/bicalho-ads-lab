import { DatabaseZap, Activity, Rocket } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: "1. Coleta de Dados",
        description: "Mapeamento minucioso do histórico da sua conta Meta Ads. Rastreamos todos os eventos e padrões ocultos de comportamento do seu público.",
        icon: <DatabaseZap className="w-8 h-8 text-cyan-glow" />
    },
    {
        id: 2,
        title: "2. Diagnóstico 80/20",
        description: "Nossa I.A. isola os 20% das dores que causam 80% do vazamento de verba. Nada de achismos, apenas engenharia pura e precisão matemática.",
        icon: <Activity className="w-8 h-8 text-primary-neon" />
    },
    {
        id: 3,
        title: "3. Plano de Escala",
        description: "Apresentamos o protocolo de ação imediata. Soluções táticas prontas para dominar o nicho de mercado e blindar contra saturação de funil.",
        icon: <Rocket className="w-8 h-8 text-white" />
    }
];

const HowItWorks: React.FC = () => {
    return (
        <section className="relative w-full py-32 px-6 z-10 bg-background/80" id="como-funciona">

            {/* Glow Effects Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary-dark/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-cyan-glow uppercase mb-4">Metodologia</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        Como Funciona o <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-neon to-cyan-glow">Laboratório</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-primary-neon/50 hover:to-cyan-glow/20 transition-all duration-500 hover:-translate-y-2 h-full"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-neon to-cyan-glow rounded-2xl opacity-0 group-hover:opacity-30 blur-md transition duration-500"></div>

                            <div className="relative h-full bg-[#0a0a0a] rounded-xl p-8 border border-white/5 flex flex-col gap-6 z-10 overflow-hidden">

                                {/* Efeito de Reflexo no Hover */}
                                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary-neon/30 group-hover:shadow-[0_0_30px_rgba(138,43,226,0.3)] transition-all duration-500">
                                    {step.icon}
                                </div>

                                <div>
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
