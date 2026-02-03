import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Server, Smartphone, ShoppingCart, Database, Cloud, ArrowRight, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const services = [
    { icon: Globe, title: 'Full Stack Web Apps', description: 'End-to-end web applications built with modern frameworks.', features: ['React/Next.js', 'Node.js/Express', 'REST & GraphQL', 'Authentication'], color: '#00d4ff' },
    { icon: Server, title: 'Backend Development', description: 'Scalable server-side solutions with microservices.', features: ['Microservices', 'API Design', 'Database Architecture', 'Cloud Deployment'], color: '#7b2cbf' },
    { icon: Smartphone, title: 'Mobile Development', description: 'Cross-platform mobile apps for iOS and Android.', features: ['React Native', 'Flutter', 'Push Notifications', 'Offline Support'], color: '#00d4ff' },
    { icon: ShoppingCart, title: 'E-Commerce Solutions', description: 'Complete online stores with payment integration.', features: ['Payment Gateways', 'Cart & Checkout', 'Admin Dashboard', 'Analytics'], color: '#7b2cbf' },
    { icon: Database, title: 'Database Design', description: 'Optimized database schemas and queries.', features: ['MongoDB', 'PostgreSQL', 'Redis', 'Data Modeling'], color: '#00d4ff' },
    { icon: Cloud, title: 'DevOps & Cloud', description: 'CI/CD pipelines and cloud infrastructure.', features: ['Docker', 'AWS/GCP', 'CI/CD', 'Monitoring'], color: '#7b2cbf' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current?.children || [], { y: 60, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, stagger: 0.1, duration: 0.7, scrollTrigger: { trigger: cardsRef.current, start: 'top 85%', toggleActions: 'play none none reverse' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#00d4ff]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-[#7b2cbf]/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2 bg-[#00d4ff]/10 text-[#00d4ff] text-sm font-medium tracking-widest uppercase rounded-full border border-[#00d4ff]/20 mb-6">My Services</div>
          <h2 className="text-3xl md:text-5xl font-bold font-['Poppins'] text-white mb-6">What I Can <span className="bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] bg-clip-text text-transparent">Build For You</span></h2>
          <p className="text-lg text-[#adb5bd] max-w-2xl mx-auto">From concept to deployment, I deliver production-ready applications with Software Engineering excellence.</p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group p-8 bg-white/[0.02] rounded-2xl border border-white/10 hover:border-[#00d4ff]/30 transition-all duration-500 hover:-translate-y-2">
              <div className="w-14 h-14 mb-6 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: `${s.color}15` }}>
                <s.icon className="w-7 h-7" style={{ color: s.color }} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#00d4ff] transition-colors">{s.title}</h3>
              <p className="text-[#6c757d] text-sm leading-relaxed mb-6">{s.description}</p>
              <ul className="space-y-2 mb-6">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#adb5bd]"><Check className="w-4 h-4" style={{ color: s.color }} /> {f}</li>
                ))}
              </ul>
              <a href="#contact" onClick={(e) => { e.preventDefault(); gsap.to(window, { duration: 1.2, scrollTo: { y: '#contact', offsetY: 80 }, ease: 'power3.inOut' }); }} className="inline-flex items-center gap-2 text-sm font-medium text-[#00d4ff] hover:gap-3 transition-all">Get Started <ArrowRight className="w-4 h-4" /></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
