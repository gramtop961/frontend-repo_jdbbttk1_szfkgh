import { useCallback, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const refsMap = {
    'captains-log': heroRef,
    crew: aboutRef,
    treasures: projectsRef,
    message: contactRef,
  };

  const handleNavigate = useCallback((key) => {
    const ref = refsMap[key];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // ensure focus after scroll for a11y
      if (typeof ref.current.focus === 'function') {
        setTimeout(() => ref.current.focus({ preventScroll: true }), 400);
      }
    }
  }, []);

  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <Navbar onNavigate={handleNavigate} />

      <main>
        <div ref={heroRef}>
          <Hero
            onPrimary={() => handleNavigate('treasures')}
            onSecondary={() => handleNavigate('crew')}
          />
        </div>

        <div ref={aboutRef}>
          <About onContact={() => handleNavigate('message')} />
        </div>

        <div ref={projectsRef}>
          <Projects onContact={() => handleNavigate('message')} />
        </div>

        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
    </div>
  );
}
