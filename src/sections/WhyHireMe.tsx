import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, MessageCircle, Lightbulb, Target, Users, Zap, ArrowRight, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WhyHireMe = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const reasons = [
    { icon: Zap, title: '100x Quality', description: 'Software Engineering principles ensure your project is built to last.', stat: '100x', statLabel: 'Better Quality' },
    { icon: Target, title: 'Pro Problem Solver', description: 'I tackle complex challenges with systematic approaches.', stat: '25+', statLabel: 'Problems Solved' },
    { icon: Clock, title: 'On-Time Delivery', description: 'Your deadlines are sacred. Quality work delivered on time.', stat: '100%', statLabel: 'On-Time Delivery' },
    { icon: MessageCircle, title: 'Clear Communication', description: 'Regular updates and transparent communication.', stat: '24/7', statLabel: 'Support Available' },
    { icon: Lightbulb, title: 'Modern Tech Stack', description: 'Cutting-edge technologies that scale and perform.', stat: 'Latest', statLabel: 'Technologies' },
    { icon: Users, title: 'Client-Focused', description: 'Your success is my priority. I go above and beyond.', stat: '18+', statLabel: 'Happy Clients' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current?.children || [], { y: 50, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, stagger: 0.1, duration: 0.6, scrollTrigger: { trigger: cardsRef.current, start: 'top 85%', toggleActions: 'play none none reverse' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="why-hire-me" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#00d4ff]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-[#7b2cbf]/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2 bg-[#00d4ff]/10 text-[#00d4ff] text-sm font-medium tracking-widest uppercase rounded-full border border-[#00d4ff]/20 mb-6">Why Hire Me</div>
          <h2 className="text-3xl md:text-5xl font-bold font-['Poppins'] text-white mb-6">What Makes Me <span className="bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] bg-clip-text text-transparent">Different</span></h2>
          <p className="text-lg text-[#adb5bd] max-w-2xl mx-auto">I'm not just a developer—I'm a Software Engineer who thinks beyond code.</p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((r) => (
            <div key={r.title} className="group p-8 bg-white/[0.02] rounded-2xl border border-white/10 hover:border-[#00d4ff]/30 transition-all duration-500 hover:-translate-y-2">
              <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-[#00d4ff]/20 to-[#7b2cbf]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <r.icon className="w-7 h-7 text-[#00d4ff]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#00d4ff] transition-colors">{r.title}</h3>
              <p className="text-[#6c757d] text-sm leading-relaxed mb-6">{r.description}</p>
              <div className="pt-4 border-t border-white/10">
                <div className="text-2xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] bg-clip-text text-transparent">{r.stat}</div>
                <div className="text-xs text-[#6c757d]">{r.statLabel}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 md:p-12 bg-gradient-to-br from-[#00d4ff]/10 to-[#7b2cbf]/10 rounded-3xl border border-[#00d4ff]/20">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="w-12 h-12 text-[#00d4ff]/30 mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-white mb-6 leading-relaxed">"Shahid delivered exceptional quality work. His Software Engineering background really shows in the architecture and code quality. Our application has been running flawlessly."</p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#7b2cbf] flex items-center justify-center"><span className="text-white font-bold text-lg">JD</span></div>
              <div className="text-left"><div className="text-white font-medium">John Doe</div><div className="text-[#6c757d] text-sm">CEO, TechStart Inc.</div></div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Build Something Amazing?</h3>
          <p className="text-[#adb5bd] mb-8 max-w-xl mx-auto">Let's discuss your project and turn your vision into reality.</p>
          <a href="#contact" onClick={(e) => { e.preventDefault(); gsap.to(window, { duration: 1.2, scrollTo: { y: '#contact', offsetY: 80 }, ease: 'power3.inOut' }); }} className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] text-white font-medium rounded-full hover:shadow-lg hover:shadow-[#00d4ff]/30 transition-all duration-300 hover:scale-105">Start Your Project <ArrowRight className="w-5 h-5" /></a>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
