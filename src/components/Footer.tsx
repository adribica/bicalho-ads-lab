const Footer: React.FC = () => {
    return (
        <footer className="w-full py-8 border-t border-white/10 bg-black/60 backdrop-blur-md relative z-10">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-sm font-medium text-white/40 tracking-wider">
                    Bicalho Ads Lab &copy; {new Date().getFullYear()} <span className="text-primary-neon/60 mx-2">|</span> Engenharia de Tráfego
                </p>
            </div>
        </footer>
    );
};

export default Footer;
