import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counterObj = { value: 0 };
      
      gsap.to(counterObj, {
        value: 100,
        duration: 2.5,
        ease: 'power2.inOut',
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = `${Math.round(counterObj.value)}%`;
          }
        },
        onComplete: () => {
          const tl = gsap.timeline({ onComplete });
          tl.to(progressRef.current, { scaleX: 0, transformOrigin: 'right center', duration: 0.5 })
            .to(containerRef.current, { clipPath: 'circle(0% at 50% 50%)', duration: 1 }, '-=0.3');
        }
      });

      gsap.fromTo(progressRef.current, { scaleX: 0 }, { scaleX: 1, duration: 2.5, ease: 'power2.inOut', transformOrigin: 'left center' });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a]" style={{ clipPath: 'circle(150% at 50% 50%)' }}>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00d4ff]/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#7b2cbf]/20 rounded-full blur-[80px] animate-pulse" />

      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-bold font-['Poppins'] tracking-tight mb-4">
          <span className="bg-gradient-to-r from-[#00d4ff] via-[#7b2cbf] to-[#00d4ff] bg-clip-text text-transparent animate-gradient">LASHARI</span>
        </h1>
        <p className="text-[#00d4ff] text-sm tracking-[0.5em] uppercase font-medium mb-8">Software Engineering Excellence</p>
        
        <div className="w-72 md:w-96 mx-auto">
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div ref={progressRef} className="h-full bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] rounded-full" style={{ transform: 'scaleX(0)' }} />
          </div>
          <div className="mt-4 flex justify-between items-center text-sm">
            <span className="text-[#6c757d]">Loading Experience...</span>
            <span ref={counterRef} className="text-[#00d4ff] font-mono font-bold text-lg">0%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
