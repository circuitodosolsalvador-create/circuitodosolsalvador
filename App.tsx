
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tours from './components/Tours';
import Gallery from './components/Gallery';
import About from './components/About';
import { ASSETS_BASE_URL } from './constants';

const WhatsAppFloating: React.FC = () => {
  const whatsappUrl = "https://wa.me/5571996578592";
  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] bg-green-500 text-white p-4 md:p-5 rounded-full shadow-[0_10px_30px_rgba(34,197,94,0.3)] transition-all transform hover:scale-110 active:scale-90 animate-pulse-soft flex items-center justify-center"
      aria-label="Falar no WhatsApp"
    >
      <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.553 4.197 1.603 6.034L0 24l6.135-1.609a11.83 11.83 0 005.915 1.554h.005c6.637 0 12.05-5.414 12.05-12.05 0-3.218-1.252-6.242-3.527-8.517z"/>
      </svg>
    </a>
  );
};

const Footer: React.FC = () => {
  const whatsappUrl = "https://wa.me/5571996578592";
  const email = "circuitodosolsalvador@gmail.com";

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
  };

  return (
    <footer id="contact" className="bg-white text-slate-800 pt-24 pb-12 relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <img 
              src={`${ASSETS_BASE_URL}logo.png`} 
              alt="Logo Circuito do Sol" 
              className="h-24 md:h-32 mb-8 object-contain"
            />
            <p className="text-slate-500 text-lg leading-relaxed max-w-md">
              Sua referência premium em passeios pelo litoral baiano. Oferecemos o que há de melhor em conforto, segurança e hospitalidade marítima.
            </p>
          </div>
          
          <div>
            <h4 className="text-orange-500 font-black uppercase tracking-widest text-sm mb-8">Navegação</h4>
            <ul className="space-y-4 font-bold text-slate-600">
              <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-orange-500 transition-colors">Início</a></li>
              <li><a href="#tours" onClick={(e) => scrollToSection(e, 'tours')} className="hover:text-orange-500 transition-colors">Passeios</a></li>
              <li><a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')} className="hover:text-orange-500 transition-colors">Galeria</a></li>
              <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-orange-500 transition-colors">Sobre Nós</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-orange-500 font-black uppercase tracking-widest text-sm mb-8">Atendimento</h4>
            <ul className="space-y-6">
              <li>
                <a href={whatsappUrl} className="group block" target="_blank" rel="noopener noreferrer">
                  <span className="text-slate-400 text-xs font-bold uppercase block mb-1 tracking-widest">WhatsApp</span>
                  <span className="text-lg font-extrabold group-hover:text-orange-500 transition-colors">(71) 99657-8592</span>
                </a>
              </li>
              <li>
                <span className="text-slate-400 text-xs font-bold uppercase block mb-1 tracking-widest">E-mail</span>
                <span className="text-sm font-semibold text-slate-700 break-all">{email}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-100 text-slate-400 text-xs text-center flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© 2024 CIRCUITO DO SOL - TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex gap-4 font-black uppercase tracking-widest">
            <span className="text-orange-500/30">Conforto</span>
            <span className="text-orange-500/30">Segurança</span>
            <span className="text-orange-500/30">Alegria</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-orange-500 selection:text-white bg-white">
      <Navbar />
      <Hero />
      <Tours />
      <Gallery />
      <About />
      <Footer />
      <WhatsAppFloating />
    </div>
  );
};

export default App;
