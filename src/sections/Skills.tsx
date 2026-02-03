import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [{ id: 'frontend', name: 'Frontend' }, { id: 'backend', name: 'Backend' }, { id: 'database', name: 'Database' }, { id: 'tools', name: 'Tools & DevOps' }];

  const skills = {
    frontend: [{ name: 'React / Next.js', level: 95 }, { name: 'TypeScript', level: 90 }, { name: 'JavaScript (ES6+)', level: 95 }, { name: 'Tailwind CSS', level: 92 }, { name: 'HTML5 / CSS3', level: 98 }, { name: 'Redux / Zustand', level: 88 }],
    backend: [{ name: 'Node.js / Express', level: 92 }, { name: 'Python / FastAPI', level: 85 }, { name: 'REST API Design', level: 95 }, { name: 'GraphQL', level: 82 }, { name: 'WebSockets', level: 80 }, { name: 'Microservices', level: 85 }],
    database: [{ name: 'MongoDB', level: 90 }, { name: 'PostgreSQL', level: 88 }, { name: 'Redis', level: 82 }, { name: 'Prisma ORM', level: 87 }, { name: 'Firebase', level: 85 }],
    tools: [{ name: 'Git / GitHub', level: 95 }, { name: 'Docker', level: 85 }, { name: 'AWS / Vercel', level: 88 }, { name: 'CI/CD', level: 82 }, { name: 'Jest / Testing', level: 85 }, { name: 'Figma', level: 80 }]
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.skill-item', { x: -30, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.1, duration: 0.6, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    document.querySelectorAll('.skill-progress').forEach((bar, i) => {
      const skill = skills[activeCategory as keyof typeof skills][i];
      if (skill) gsap.fromTo(bar, { width: '0%' }, { width: `${skill.level}%`, duration: 1, delay: i * 0.1, ease: 'power3.out' });
    });
  }, [activeCategory]);

  return (
    <section id="skills" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#00d4ff]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#7b2cbf]/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-5 py-2 bg-[#00d4ff]/10 text-[#00d4ff] text-sm font-medium tracking-widest uppercase rounded-full border border-[#00d4ff]/20 mb-6">My Skills</div>
          <h2 className="text-3xl md:text-5xl font-bold font-['Poppins'] text-white mb-6">Tech Stack & <span className="bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] bg-clip-text text-transparent">Expertise</span></h2>
          <p className="text-lg text-[#adb5bd] max-w-2xl mx-auto">Modern technologies I use to build scalable, production-ready applications.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button key={c.id} onClick={() => setActiveCategory(c.id)} className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === c.id ? 'bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] text-white shadow-lg shadow-[#00d4ff]/25' : 'bg-white/5 text-[#adb5bd] hover:bg-white/10 hover:text-white border border-white/10'}`}>{c.name}</button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills[activeCategory as keyof typeof skills]?.map((s) => (
            <div key={s.name} className="skill-item p-6 bg-white/[0.02] rounded-xl border border-white/10 hover:border-[#00d4ff]/30 transition-all duration-300">
              <div className="flex justify-between items-center mb-3">
                <span className="text-white font-medium">{s.name}</span>
                <span className="text-[#00d4ff] font-mono text-sm">{s.level}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="skill-progress h-full bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] rounded-full" style={{ width: '0%' }} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-center text-xl font-semibold text-white mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Git', 'GraphQL', 'Tailwind', 'Prisma', 'Socket.io'].map((t) => (
              <span key={t} className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-[#adb5bd] text-sm hover:border-[#00d4ff]/50 hover:text-white transition-all duration-300">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
