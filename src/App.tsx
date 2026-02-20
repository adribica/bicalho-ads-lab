import Header from './components/Header';
import HeroV2 from './components/HeroV2';
import AuditGrid from './components/AuditGrid';
import JarvisExperience from './components/JarvisExperience';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-magenta-neon selection:text-white">
      {/* Background Noise/Grid Opcional (Deep Black Environment) */}
      <div className="fixed inset-0 z-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,1)_0,transparent_100%)]"></div>

      <Header />

      <main className="relative z-10 font-sans flex flex-col items-center w-full">
        {/* Step 1: Venda do Conceito */}
        <HeroV2 />

        {/* Step 2: Detalhamento da Ferramenta */}
        <AuditGrid />

        {/* Step 3: Metodologia/Processo */}
        <HowItWorks />

        {/* C.T.A de Transição Abrupta para a Experiência IA */}
        <div className="w-full text-center mt-20 mb-[-40px] px-6 relative z-30">
          <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            Agora <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta-neon to-gold-main">é a sua vez.</span>
          </h3>
          <p className="text-white/50 text-xl font-medium max-w-lg mx-auto">
            Submeta seu negócio para análise estratégica gratuita.
          </p>
        </div>

        {/* Step 4: O Botão Magico / Formulário Premium */}
        <div className="w-full relative z-20" id="jarvis-experience">
          <JarvisExperience />
        </div>

      </main>

      <Footer />
    </div>
  );
}

export default App;
