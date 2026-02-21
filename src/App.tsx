import { Suspense, lazy } from 'react';
import Header from './components/Header';
import HeroV2 from './components/HeroV2';

// Lazy loading para componentes pesados e "abaixo da dobra" (Below The Fold)
const AuditGrid = lazy(() => import('./components/AuditGrid'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const JarvisExperience = lazy(() => import('./components/JarvisExperience'));
const Footer = lazy(() => import('./components/Footer'));

// Fallback de carregamento para a Suspense (Loader estilizado)
const Loader = () => (
  <div className="w-full flex justify-center items-center py-24">
    <div className="w-8 h-8 rounded-full border-2 border-magenta-neon border-t-transparent animate-spin shadow-[0_0_15px_rgba(255,0,255,0.5)]"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-magenta-neon selection:text-white">
      {/* Background Noise/Grid Opcional (Deep Black Environment) */}
      <div className="fixed inset-0 z-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,1)_0,transparent_100%)]"></div>

      <Header />

      <main className="relative z-10 font-sans flex flex-col items-center w-full">
        {/* Step 1: Venda do Conceito (Crítico para LCP - Não recebe Lazy Load) */}
        <HeroV2 />

        {/* Componentes sob demanda embalados na Suspense (Async Split Chunks) */}
        <Suspense fallback={<Loader />}>

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

        </Suspense>
      </main>

      <Suspense fallback={<div className="h-20 bg-[#020202]"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
