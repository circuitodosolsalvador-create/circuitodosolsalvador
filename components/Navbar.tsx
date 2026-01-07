
import React, { useState, useEffect } from 'react';
import { ASSETS_BASE_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: 'home' },
    { name: 'Passeios', href: 'tours' },
    { name: 'Sobre Nós', href: 'about' },
    { name: 'Contato', href: 'contact' },
  ];

  const whatsappUrl = "https://wa.me/5571996578592";

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={(e) => scrollToSection(e as any, 'home')}>
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg border-2 border-white bg-white">
              <img 
                src={`${ASSETS_BASE_URL}logo.png`} 
                alt="Logo Circuito do Sol" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150?text=CS';
                }}
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg md:text-xl font-serif font-bold tracking-tight text-white block leading-none">Circuito do Sol</span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-amber-400">Passeios Turísticos</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.href}`}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-white hover:text-amber-400 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 text-slate-900 px-6 py-2 rounded-full font-bold text-sm hover:bg-amber-400 transition-all transform hover:scale-105 shadow-xl"
              >
                Reservar Agora
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-slate-900/95 backdrop-blur-xl border-b border-white/10 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-white block px-3 py-3 text-base font-medium border-b border-white/5 last:border-0 hover:text-amber-400"
            >
              {link.name}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="bg-amber-500 text-slate-900 block px-3 py-3 rounded-xl text-base font-bold text-center shadow-lg active:scale-95 transition-transform"
          >
            Reservar Agora
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
