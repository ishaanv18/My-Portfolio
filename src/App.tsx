import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { TechStack } from './components/TechStack';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Contributions } from './components/Contributions';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Auto-hide preloader after minimal time (just for visual effect)
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000); // Reduced to 1 second
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        ) : (
          <Layout key="layout">
            <Hero />
            <About />
            <Education />
            <Experience />
            <div className="relative">
              {/* Shared background for Tech & Certs */}
              <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-deep-space to-obsidian -z-10" />
              <TechStack />
              <Certifications />
            </div>
            <Projects />
            <Contributions />
            <Contact />
            <Footer />
          </Layout>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
