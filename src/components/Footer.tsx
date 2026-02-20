import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-8 border-t border-white/5 bg-black/60 backdrop-blur-md relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center justify-center gap-2">
                    <div className="text-xl font-black text-white tracking-widest flex items-center gap-2">
                        BICALHO <span className="text-magenta-neon">ADS LAB</span>
                    </div>
                    <p className="text-white/40 text-xs font-medium">
                        © {currentYear} Metodologia proprietária. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
