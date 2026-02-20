import Header from './components/Header';
import JarvisExperience from './components/JarvisExperience';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary-neon selection:text-white">
      {/* Background Noise/Grid Opcional */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(138,43,226,0.1)_0,transparent_100%)]"></div>

      <Header />

      <main className="relative z-10 font-sans">
        <JarvisExperience />
        <HowItWorks />
      </main>

      <Footer />
    </div>
  );
}

export default App;
