import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState('all');

  const categories = [{ id: 'all', name: 'All' }, { id: 'fullstack', name: 'Full Stack' }, { id: 'frontend', name: 'Frontend' }, { id: 'backend', name: 'Backend' }];

  const projects = [
    { id: 1, title: 'E-Commerce Platform Pro', description: 'Full-featured online store with real-time inventory, Stripe payments, and admin dashboard.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop', category: 'fullstack', technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'], githubUrl: 'https://github.com/shahidlashari', liveUrl: '#', featured: true },
    { id: 2, title: 'Task Management System', description: 'Collaborative project management tool with real-time updates and kanban boards.', image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop', category: 'fullstack', technologies: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io'], githubUrl: 'https://github.com/shahidlashari', liveUrl: '#', featured: true },
    { id: 3, title: 'Social Media Analytics', description: 'Dashboard for tracking social media metrics with data visualization.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop', category: 'frontend', technologies: ['React', 'D3.js', 'Material-UI'], githubUrl: 'https://github.com/shahidlashari', liveUrl: '#', featured: false },
    { id: 4, title: 'Real-Time Chat API', description: 'Scalable chat backend with WebSockets and message persistence.', image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop', category: 'backend', technologies: ['Node.js', 'Socket.io', 'Redis', 'MongoDB'], githubUrl: 'https://github.com/shahidlashari', liveUrl: '#', featured: false },
    { id: 5, title: 'Portfolio Dashboard', description: 'Personal finance tracker with investment portfolio analysis.', image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=600&fit=crop', category: 'fullstack', technologies: ['Vue.js', 'FastAPI', 'PostgreSQL'], githubUrl: 'https://github.com/shahidlashari', liveUrl: '#', featured: true },
    { id: 6, title: 'AI Content Generator', description: 'AI-powered content creation tool with OpenAI integration.', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop', category: 'fullstack', technologies: ['React', 'OpenAI API', 'Node.js'], githubUrl: 'https://github.com/shahidlashari', liveUrl: '#', featured: false }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(gridRef.current?.children || [], { y: 60, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, stagger: 0.1, duration: 0.7, scrollTrigger: { trigger: gridRef.current, start: 'top 85%', toggleActions: 'play none none reverse' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (gridRef.current) gsap.fromTo(gridRef.current.children, { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 0.5 });
  }, [filter]);

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00d4ff]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#7b2cbf]/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-5 py-2 bg-[#00d4ff]/10 text-[#00d4ff] text-sm font-medium tracking-widest uppercase rounded-full border border-[#00d4ff]/20 mb-6">My Work</div>
          <h2 className="text-3xl md:text-5xl font-bold font-['Poppins'] text-white mb-6">Featured <span className="bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] bg-clip-text text-transparent">Projects</span></h2>
          <p className="text-lg text-[#adb5bd] max-w-2xl mx-auto">Production-ready applications built with Software Engineering excellence.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button key={c.id} onClick={() => setFilter(c.id)} className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${filter === c.id ? 'bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] text-white shadow-lg shadow-[#00d4ff]/25' : 'bg-white/5 text-[#adb5bd] hover:bg-white/10 hover:text-white border border-white/10'}`}>{c.name}</button>
          ))}
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <div key={p.id} className="group relative bg-white/[0.02] rounded-2xl border border-white/10 overflow-hidden hover:border-[#00d4ff]/30 transition-all duration-500">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-[#00d4ff]/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-[#0a0a0a] hover:scale-110 transition-transform"><Github className="w-5 h-5" /></a>
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-[#0a0a0a] hover:scale-110 transition-transform"><ExternalLink className="w-5 h-5" /></a>
                </div>
                {p.featured && <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] text-white text-xs font-medium rounded-full">Featured</div>}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#00d4ff] transition-colors">{p.title}</h3>
                <p className="text-[#6c757d] text-sm mb-4 line-clamp-2">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.technologies.map((t) => <span key={t} className="px-3 py-1 bg-white/5 text-[#adb5bd] text-xs rounded-full border border-white/10">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="https://github.com/shahidlashari" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 text-white font-medium rounded-full border border-white/10 hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/10 transition-all duration-300">
            <Github className="w-5 h-5" /> View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
