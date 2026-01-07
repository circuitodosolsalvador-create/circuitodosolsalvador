
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
          {/* Logo Container - Larger and no circle */}
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
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
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
              className="flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-green-400 transition-all transform hover:scale-110 shadow-lg hover:shadow-green-500/40"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.553 4.197 1.603 6.034L0 24l6.135-1.609a11.83 11.83 0 005.915 1.554h.005c6.637 0 12.05-5.414 12.05-12.05 0-3.218-1.252-6.242-3.527-8.517z"/>
              </svg>
              <span>Reservar</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 focus:outline-none bg-orange-600/40 backdrop-blur-md rounded-xl transition-transform active:scale-90"
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

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-orange-600 transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 text-white"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-white text-4xl font-black uppercase tracking-tighter hover:text-yellow-200 transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 bg-green-500 text-white w-full max-w-xs py-6 rounded-3xl text-2xl font-black text-center shadow-2xl animate-pulse-soft"
          >
            Reservar Agora
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
