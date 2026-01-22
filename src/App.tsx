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

function App() {
  return (
    <Layout>
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
  );
}

export default App;
