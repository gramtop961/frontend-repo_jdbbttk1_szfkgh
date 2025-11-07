import React, { useCallback, useRef } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  const containerRef = useRef(null);

  const handleNavigate = useCallback((id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Move focus for accessibility after scrolling
      setTimeout(() => {
        target.focus({ preventScroll: true });
      }, 600);
    }
  }, []);

  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar onNavigate={handleNavigate} />

      <main
        ref={containerRef}
        id="page-container"
        className="h-screen w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory"
        aria-label="One Page Pirate Portfolio Sections"
      >
        <Hero onNavigate={handleNavigate} />
        <About onNavigate={handleNavigate} />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
