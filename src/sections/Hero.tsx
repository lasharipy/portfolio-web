import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Twitter, Mail, Code2, Terminal, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const handleHeroAnimate = () => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.fromTo(titleRef.current, { y: 100, opacity: 0, rotateX: -45 }, { y: 0, opacity: 1, rotateX: 0, duration: 1.2 })
          .fromTo(subtitleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.6')
          .fromTo(descRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.5')
          .fromTo(ctaRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.5')
          .fromTo(socialsRef.current?.children || [], { x: -20, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.1, duration: 0.5 }, '-=0.5')
          .fromTo(imageRef.current, { scale: 0.8, opacity: 0, rotateY: -15 }, { scale: 1, opacity: 1, rotateY: 0, duration: 1.2 }, '-=1')
          .fromTo(statsRef.current?.children || [], { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.15, duration: 0.6 }, '-=0.5');
      };

      window.addEventListener('hero:animate', handleHeroAnimate);
      gsap.to(titleRef.current, { yPercent: -20, ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: true } });

      return () => { window.removeEventListener('hero:animate', handleHeroAnimate); };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleScrollDown = () => gsap.to(window, { duration: 1.2, scrollTo: { y: '#about', offsetY: 80 }, ease: 'power3.inOut' });

  const stats = [
    { value: '25+', label: 'Projects Delivered' },
    { value: '3+', label: 'Years Experience' },
    { value: '18+', label: 'Happy Clients' },
    { value: '500K+', label: 'Lines of Code' }
  ];

  return (
    <section id="hero" ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-32 w-[600px] h-[600px] bg-[#00d4ff]/15 rounded-full blur-[150px] animate-float-slow" />
        <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] bg-[#7b2cbf]/15 rounded-full blur-[120px] animate-float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00d4ff]/5 rounded-full blur-[200px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00d4ff]/10 border border-[#00d4ff]/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#00d4ff] rounded-full animate-pulse" />
              <span className="text-[#00d4ff] text-sm font-medium">Available for Projects</span>
            </div>

            <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-['Poppins'] leading-tight mb-6" style={{ opacity: 0 }}>
              Hi, I'm <span className="bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] bg-clip-text text-transparent">Shahid</span><br />
              <span className="text-white">Full Stack</span><br />
              <span className="bg-gradient-to-r from-[#7b2cbf] to-[#00d4ff] bg-clip-text text-transparent">Developer</span>
            </h1>

            <p ref={subtitleRef} className="text-xl md:text-2xl text-[#adb5bd] font-light mb-4" style={{ opacity: 0 }}>Software Engineering Student | 6th Semester</p>

            <p ref={descRef} className="text-[#6c757d] text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8" style={{ opacity: 0 }}>
              I deliver <span className="text-[#00d4ff] font-semibold">100x quality</span> through Software Engineering principles. 
              Pro-level problem solver crafting scalable web applications.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8" style={{ opacity: 0 }}>
              <a href="#contact" onClick={(e) => { e.preventDefault(); gsap.to(window, { duration: 1.2, scrollTo: { y: '#contact', offsetY: 80 }, ease: 'power3.inOut' }); }} className="group relative px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#00d4ff]/30 hover:scale-105">
                <span className="relative z-10">Hire Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#7b2cbf] to-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a href="#projects" onClick={(e) => { e.preventDefault(); gsap.to(window, { duration: 1.2, scrollTo: { y: '#projects', offsetY: 80 }, ease: 'power3.inOut' }); }} className="px-8 py-4 border-2 border-[#00d4ff]/50 text-[#00d4ff] font-medium rounded-full hover:bg-[#00d4ff] hover:text-white transition-all duration-300">View My Work</a>
            </div>

            <div ref={socialsRef} className="flex gap-4 justify-center lg:justify-start">
              {[{ icon: Github, href: 'https://github.com/lasharipy/portfolio-web' }, { icon: Linkedin, href: 'https://linkedin.com/in/shahidlashari' }, { icon: Twitter, href: 'https://twitter.com/shahidlashari' }, { icon: Mail, href: 'mailto:lashari.py@gmail.com' }].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#adb5bd] hover:text-white hover:bg-[#00d4ff] hover:border-[#00d4ff] transition-all duration-300 hover:scale-110">
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div ref={imageRef} className="relative hidden lg:flex items-center justify-center" style={{ opacity: 0 }}>
            <div className="relative w-[450px] h-[450px]">
              <div className="absolute inset-0 border-2 border-dashed border-[#00d4ff]/30 rounded-full animate-spin-slow" />
              <div className="absolute inset-8 border border-[#7b2cbf]/20 rounded-full animate-spin-reverse" />
              <div className="absolute inset-16 bg-gradient-to-br from-[#00d4ff]/20 to-[#7b2cbf]/20 rounded-full blur-xl" />
              <div className="absolute inset-20 rounded-full overflow-hidden border-4 border-[#00d4ff]/30">
                <div className="w-full h-full bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#7b2cbf] flex items-center justify-center animate-pulse-glow">
                      <Code2 className="w-14 h-14 text-white" />
                    </div>
                    <p className="text-[#00d4ff] font-mono text-sm">&lt;Shahid.Lashari /&gt;</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-2 right-8 px-4 py-2 bg-[#0a0a0a] border border-[#00d4ff]/30 rounded-full text-[#00d4ff] text-sm font-medium animate-float flex items-center gap-2"><Terminal className="w-4 h-4" /> React Expert</div>
              <div className="absolute -bottom-2 left-8 px-4 py-2 bg-[#0a0a0a] border border-[#7b2cbf]/30 rounded-full text-[#7b2cbf] text-sm font-medium animate-float flex items-center gap-2" style={{ animationDelay: '1s' }}><Cpu className="w-4 h-4" /> Node.js Pro</div>
              <div className="absolute top-1/2 -right-4 px-4 py-2 bg-[#0a0a0a] border border-[#00d4ff]/30 rounded-full text-[#00d4ff] text-sm font-medium animate-float flex items-center gap-2" style={{ animationDelay: '2s' }}><Code2 className="w-4 h-4" /> SE Student</div>
            </div>
          </div>
        </div>

        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/5">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] bg-clip-text text-transparent mb-2">{s.value}</div>
              <div className="text-[#6c757d] text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <button onClick={handleScrollDown} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6c757d] hover:text-[#00d4ff] transition-colors cursor-pointer">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2"><div className="w-1 h-2 bg-current rounded-full animate-bounce" /></div>
      </button>
    </section>
  );
};

export default Hero;
