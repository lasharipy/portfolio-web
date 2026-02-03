import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Lightbulb, Rocket, Shield, GraduationCap, Award, Coffee, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const features = [
    { icon: Code2, title: 'Clean Architecture', desc: 'Following SOLID principles & design patterns' },
    { icon: Lightbulb, title: 'Innovation First', desc: 'Creative solutions to complex problems' },
    { icon: Rocket, title: 'Performance', desc: 'Optimized code for maximum efficiency' },
    { icon: Shield, title: 'Best Practices', desc: 'Industry-standard development workflows' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current?.children || [], { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' } });
      gsap.fromTo(imageRef.current, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00d4ff]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#7b2cbf]/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div ref={contentRef}>
            <div className="inline-block px-5 py-2 bg-[#00d4ff]/10 text-[#00d4ff] text-sm font-medium tracking-widest uppercase rounded-full border border-[#00d4ff]/20 mb-6">About Me</div>
            <h2 className="text-3xl md:text-5xl font-bold font-['Poppins'] text-white mb-6">Software Engineering <span className="bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] bg-clip-text text-transparent">Excellence</span></h2>

            <p className="text-lg text-[#adb5bd] leading-relaxed mb-6">I'm <span className="text-white font-semibold">Shahid Lashari</span>, a passionate Software Engineering student currently in my 6th semester. I don't just write code—I engineer solutions that scale.</p>
            <p className="text-lg text-[#adb5bd] leading-relaxed mb-6">My approach combines <span className="text-[#00d4ff]">Software Engineering principles</span> with modern Full Stack development. I deliver 100x quality by following best practices, design patterns, and proven methodologies.</p>
            <p className="text-lg text-[#adb5bd] leading-relaxed mb-8">From requirement analysis to deployment, I treat every project with the rigor it deserves. Pro-level problem solving isn't just a skill—it's my mindset.</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[{ icon: GraduationCap, t: '6th Semester', d: 'Software Engineering' }, { icon: Award, t: '100x Quality', d: 'SE Principles' }, { icon: Coffee, t: '999+ Cups', d: 'Of Coffee' }, { icon: Target, t: 'Pro Level', d: 'Problem Solver' }].map((item, i) => (
                <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <item.icon className={`w-6 h-6 ${i % 2 === 0 ? 'text-[#00d4ff]' : 'text-[#7b2cbf]'} mb-2`} />
                  <div className="text-white font-medium">{item.t}</div>
                  <div className="text-[#6c757d] text-sm">{item.d}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-3 p-3 bg-white/[0.02] rounded-lg border border-white/5">
                  <f.icon className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                  <div><div className="text-white text-sm font-medium">{f.title}</div><div className="text-[#6c757d] text-xs">{f.desc}</div></div>
                </div>
              ))}
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/20 to-[#7b2cbf]/20 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#7b2cbf]/20 to-[#00d4ff]/20 rounded-3xl transform -rotate-3" />
              <div className="relative h-full bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/10 to-[#7b2cbf]/10" />
                <div className="h-full flex flex-col items-center justify-center p-8">
                  <div className="w-32 h-32 mb-6 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#7b2cbf] flex items-center justify-center animate-pulse-glow">
                    <Code2 className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Shahid Lashari</h3>
                  <p className="text-[#00d4ff] font-mono text-sm mb-4">&lt;FullStack.Developer /&gt;</p>
                  <div className="flex gap-2">
                    {['React', 'Node.js', 'MongoDB'].map((t) => (
                      <span key={t} className={`px-3 py-1 ${t === 'Node.js' ? 'bg-[#7b2cbf]/10 text-[#7b2cbf] border-[#7b2cbf]/20' : 'bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/20'} text-xs rounded-full border`}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 px-4 py-3 bg-[#0a0a0a]/90 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-2xl font-bold text-[#00d4ff]">3+</div>
                  <div className="text-xs text-[#6c757d]">Years Coding</div>
                </div>
                <div className="absolute top-6 right-6 px-4 py-3 bg-[#0a0a0a]/90 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-2xl font-bold text-[#7b2cbf]">25+</div>
                  <div className="text-xs text-[#6c757d]">Projects Done</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
