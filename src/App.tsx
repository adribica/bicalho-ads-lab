import Header from './components/Header';
import HeroV2 from './components/HeroV2';
import JarvisExperience from './components/JarvisExperience';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-magenta-neon selection:text-white">
      {/* Background Noise/Grid Opcional */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,0,255,0.05)_0,transparent_100%)]"></div>

      <Header />

      <main className="relative z-10 font-sans flex flex-col items-center w-full">
        <HeroV2 />
        <div className="w-full relative z-20" id="jarvis-section">
          <JarvisExperience />
        </div>
        <HowItWorks />
      </main>

      <Footer />
    </div>
  );
}

export default App;
