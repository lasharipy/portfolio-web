import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import WhyHireMe from './sections/WhyHireMe';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Preloader from './sections/Preloader';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ScrollTrigger.defaults({ toggleActions: 'play none none reverse' });
    const timer = setTimeout(() => ScrollTrigger.refresh(), 100);
    return () => { clearTimeout(timer); ScrollTrigger.getAll().forEach((st) => st.kill()); };
  }, []);

  const handlePreloaderComplete = () => {
    if (preloaderRef.current) {
      gsap.to(preloaderRef.current, {
        opacity: 0, duration: 0.8, ease: 'power2.inOut',
        onComplete: () => {
          if (preloaderRef.current) preloaderRef.current.style.display = 'none';
          window.dispatchEvent(new CustomEvent('hero:animate'));
        }
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      <div ref={preloaderRef}><Preloader onComplete={handlePreloaderComplete} /></div>

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#00d4ff]/10 rounded-full blur-[150px] animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#7b2cbf]/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00d4ff]/5 rounded-full blur-[200px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      </div>

      <div ref={mainRef} className="relative z-10">
        <Header />
        <main><Hero /><About /><Services /><Projects /><Skills /><WhyHireMe /><Contact /></main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
