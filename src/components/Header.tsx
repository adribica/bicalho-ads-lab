import { Sparkles, TerminalSquare } from 'lucide-react';

const Header: React.FC = () => {
    const handleInspect = () => {
        // Efeito para rolar suavemente até o Jarvis
        const jarvisSection = document.getElementById('jarvis-experience');
        if (jarvisSection) {
            jarvisSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 glass border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <TerminalSquare className="w-8 h-8 text-white" />
                    <h1 className="text-xl font-bold tracking-widest text-white flex items-center">
                        BICALHO ADS <span className="ml-2 text-primary-neon font-black drop-shadow-glow flex items-center">LAB <Sparkles className="w-4 h-4 ml-1" /></span>
                    </h1>
                </div>

                {/* Botão de Ação */}
                <button
                    onClick={handleInspect}
                    className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-white/80 hover:text-white hover:bg-white/10 hover:border-primary-neon/50 hover:shadow-glow-cyan transition-all duration-300 flex items-center gap-2"
                >
                    <span className="w-2 h-2 rounded-full bg-cyan-glow animate-pulse"></span>
                    Inspecionar
                </button>
            </div>
        </header>
    );
};

export default Header;
