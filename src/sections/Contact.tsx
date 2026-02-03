import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle, Loader2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'lashari.py@gmail.com', href: 'mailto:lashari.py@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+92 XXX XXXXXXX', href: 'tel:+92XXXXXXXXXX' },
    { icon: MapPin, label: 'Location', value: 'Pakistan', href: '#' }
  ];

  const socials = [
    { icon: Github, href: 'https://github.com/shahidlashari', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/shahidlashari', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/shahidlashari', label: 'Twitter' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(formRef.current, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(r => setTimeout(r, 1500));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } finally { setIsSubmitting(false); }
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00d4ff]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#7b2cbf]/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2 bg-[#00d4ff]/10 text-[#00d4ff] text-sm font-medium tracking-widest uppercase rounded-full border border-[#00d4ff]/20 mb-6">Get In Touch</div>
          <h2 className="text-3xl md:text-5xl font-bold font-['Poppins'] text-white mb-6">Let's <span className="bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] bg-clip-text text-transparent">Work Together</span></h2>
          <p className="text-lg text-[#adb5bd] max-w-2xl mx-auto">Have a project in mind? Let's discuss how I can help bring your ideas to life.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <form ref={formRef} onSubmit={handleSubmit} className="p-8 bg-white/[0.02] rounded-2xl border border-white/10">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#7b2cbf] flex items-center justify-center"><CheckCircle className="w-10 h-10 text-white" /></div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-[#adb5bd]">Thank you! I'll get back to you soon.</p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-[#adb5bd] mb-2">Your Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-[#6c757d] focus:outline-none focus:border-[#00d4ff] transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-[#adb5bd] mb-2">Your Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-[#6c757d] focus:outline-none focus:border-[#00d4ff] transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm text-[#adb5bd] mb-2">Subject</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-[#6c757d] focus:outline-none focus:border-[#00d4ff] transition-colors" placeholder="Project Inquiry" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm text-[#adb5bd] mb-2">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-[#6c757d] focus:outline-none focus:border-[#00d4ff] transition-colors resize-none" placeholder="Tell me about your project..." />
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] text-white font-medium rounded-xl hover:shadow-lg hover:shadow-[#00d4ff]/30 transition-all duration-300 disabled:opacity-70">
                  {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</> : <><Send className="w-5 h-5" /> Send Message</>}
                </button>
              </>
            )}
          </form>

          <div className="space-y-8">
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a key={item.label} href={item.href} className="flex items-center gap-4 p-6 bg-white/[0.02] rounded-xl border border-white/10 hover:border-[#00d4ff]/30 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00d4ff]/20 to-[#7b2cbf]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-[#00d4ff]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#6c757d]">{item.label}</div>
                    <div className="text-white font-medium group-hover:text-[#00d4ff] transition-colors">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-6 bg-white/[0.02] rounded-xl border border-white/10">
              <h3 className="text-white font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#adb5bd] hover:text-white hover:bg-[#00d4ff] hover:border-[#00d4ff] transition-all duration-300" aria-label={s.label}>
                    <s.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-[#00d4ff]/10 to-[#7b2cbf]/10 rounded-xl border border-[#00d4ff]/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm font-medium">Available for new projects</span>
              </div>
              <p className="text-[#adb5bd] text-sm">Currently accepting new projects. Let's build something amazing together!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
