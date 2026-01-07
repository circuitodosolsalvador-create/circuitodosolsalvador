
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
    { name: 'Galeria', href: 'gallery' },
    { name: 'Sobre Nós', href: 'about' },
    { name: 'Contato', href: 'contact' },
  ];

  const whatsappUrl = "https://wa.me/5571996578592";

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = scrolled ? 80 : 120;
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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'tropical-header-gradient py-2 shadow-xl' : 'bg-transparent py-6 md:py-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div 
            className="flex-shrink-0 cursor-pointer group" 
            onClick={(e) => scrollToSection(e as any, 'home')}
          >
            <img 
              src={`${ASSETS_BASE_URL}logo.png`} 
              alt="Logo Circuito do Sol" 
              className={`transition-all duration-500 object-contain drop-shadow-2xl brightness-110 ${scrolled ? 'h-16 md:h-20' : 'h-24 md:h-32 lg:h-40'}`}
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x120?text=Circuito+do+Sol';
              }}
            />
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.href}`}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-sm font-extrabold uppercase tracking-widest transition-all relative group ${scrolled ? 'text-white hover:text-yellow-200' : 'text-white hover:text-orange-200 drop-shadow-md'}`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-white transition-all group-hover:w-full"></span>
              </a>
            ))}
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-400 transition-all transform hover:scale-110 shadow-lg"
            >
              <span>Reservar</span>
            </a>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 bg-orange-600/40 backdrop-blur-md rounded-xl"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      <div className={`lg:hidden fixed inset-0 z-40 bg-orange-600 transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-white text-3xl font-black uppercase tracking-tighter"
            >
              {link.name}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 bg-green-500 text-white w-full max-w-xs py-5 rounded-3xl text-xl font-black text-center shadow-2xl"
          >
            Reservar Agora
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
