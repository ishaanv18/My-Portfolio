import { lazy, Suspense } from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';

// Lazy load non-critical components with named exports
const About = lazy(() => import('./components/About').then(module => ({ default: module.About })));
const Education = lazy(() => import('./components/Education').then(module => ({ default: module.Education })));
const Experience = lazy(() => import('./components/Experience').then(module => ({ default: module.Experience })));
const TechStack = lazy(() => import('./components/TechStack').then(module => ({ default: module.TechStack })));
const Certifications = lazy(() => import('./components/Certifications').then(module => ({ default: module.Certifications })));
const Projects = lazy(() => import('./components/Projects').then(module => ({ default: module.Projects })));
const Contributions = lazy(() => import('./components/Contributions').then(module => ({ default: module.Contributions })));
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));
const Footer = lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));

function App() {
  return (
    <Layout>
      <Hero />
      <Suspense fallback={<div className="min-h-screen" />}>
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
      </Suspense>
    </Layout>
  );
}

export default App;
