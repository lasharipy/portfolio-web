import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X, Download } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
];

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 3, ease: 'power3.out' });
      ScrollTrigger.create({ start: 'top -100', onUpdate: (self) => setIsScrolled(self.progress > 0) });
    }, headerRef);
    return () => ctx.revert();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) gsap.to(window, { duration: 1.2, scrollTo: { y: target, offsetY: 80 }, ease: 'power3.inOut' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header ref={headerRef} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#00d4ff]/10' : 'bg-transparent'}`} style={{ opacity: 0 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff] to-[#7b2cbf] rounded-xl transform group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative text-white font-bold text-2xl">S</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-bold text-lg block leading-tight">SHAHID</span>
              <span className="text-[#00d4ff] text-xs tracking-wider">LASHARI</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="relative px-4 py-2 text-sm text-[#adb5bd] hover:text-white transition-colors duration-300 group">
                {link.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] transform -translate-x-1/2 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="/resume.pdf" download className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-[#00d4ff]/25 transition-all duration-300 hover:scale-105">
              <Download className="w-4 h-4" /> Download CV
            </a>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-white hover:text-[#00d4ff] transition-colors">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden absolute top-full left-0 right-0 bg-[#0a0a0a]/98 backdrop-blur-xl border-b border-[#00d4ff]/10 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <nav className="flex flex-col p-4 space-y-2">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="px-4 py-3 text-[#adb5bd] hover:text-white hover:bg-[#00d4ff]/10 rounded-lg transition-all duration-300">{link.name}</a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
