import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Twitter, Mail, ArrowUp, Heart, Code2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(footerRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: footerRef.current, start: 'top 95%', toggleActions: 'play none none reverse' } });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  const scrollToTop = () => gsap.to(window, { duration: 1.5, scrollTo: { y: 0 }, ease: 'power3.inOut' });
  const currentYear = new Date().getFullYear();

  const navLinks = [{ name: 'Home', href: '#hero' }, { name: 'About', href: '#about' }, { name: 'Services', href: '#services' }, { name: 'Projects', href: '#projects' }, { name: 'Contact', href: '#contact' }];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) gsap.to(window, { duration: 1.2, scrollTo: { y: target, offsetY: 80 }, ease: 'power3.inOut' });
  };

  return (
    <footer ref={footerRef} className="relative pt-20 pb-8 border-t border-white/5">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00d4ff]/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00d4ff] to-[#7b2cbf] rounded-xl flex items-center justify-center"><Code2 className="w-6 h-6 text-white" /></div>
              <div><span className="text-white font-bold text-lg block leading-tight">SHAHID</span><span className="text-[#00d4ff] text-xs tracking-wider">LASHARI</span></div>
            </a>
            <p className="text-[#6c757d] text-sm leading-relaxed mb-6">Software Engineering student delivering 100x quality through proven methodologies and modern technologies.</p>
            <div className="flex gap-3">
              {[{ icon: Github, href: 'https://github.com/shahidlashari' }, { icon: Linkedin, href: 'https://linkedin.com/in/shahidlashari' }, { icon: Twitter, href: 'https://twitter.com/shahidlashari' }, { icon: Mail, href: 'mailto:lashari.py@gmail.com' }].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#adb5bd] hover:text-white hover:bg-[#00d4ff] hover:border-[#00d4ff] transition-all duration-300"><s.icon className="w-4 h-4" /></a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((l) => <li key={l.name}><a href={l.href} onClick={(e) => handleNavClick(e, l.href)} className="text-[#6c757d] hover:text-[#00d4ff] transition-colors text-sm">{l.name}</a></li>)}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {['Full Stack Development', 'Backend APIs', 'Database Design', 'Cloud Deployment'].map((s) => <li key={s}><span className="text-[#6c757d] text-sm">{s}</span></li>)}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Stay Updated</h3>
            <p className="text-[#6c757d] text-sm mb-4">Subscribe for latest updates and tech insights.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#6c757d] text-sm focus:outline-none focus:border-[#00d4ff] transition-colors" />
              <button type="submit" className="px-4 py-3 bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] text-white rounded-lg hover:shadow-lg hover:shadow-[#00d4ff]/30 transition-all duration-300"><Mail className="w-5 h-5" /></button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#6c757d] text-sm flex items-center gap-1">© {currentYear} Shahid Lashari. Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> & Code</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#6c757d] hover:text-[#00d4ff] transition-colors text-sm">Privacy</a>
            <a href="#" className="text-[#6c757d] hover:text-[#00d4ff] transition-colors text-sm">Terms</a>
          </div>
          <button onClick={scrollToTop} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#adb5bd] hover:text-white hover:bg-[#00d4ff] hover:border-[#00d4ff] transition-all duration-300" aria-label="Back to top"><ArrowUp className="w-5 h-5" /></button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
