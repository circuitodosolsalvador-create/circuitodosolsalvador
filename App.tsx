
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tours from './components/Tours';
import About from './components/About';
import AIChat from './components/AIChat';
import { ASSETS_BASE_URL } from './constants';

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
    <footer id="contact" className="bg-slate-950 pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col gap-6 mb-8">
              <div className="h-24 md:h-32 transition-transform duration-300 hover:scale-105 inline-block w-fit">
                <img 
                  src={`${ASSETS_BASE_URL}logo.png`} 
                  alt="Circuito do Sol Logo" 
                  className="h-full w-auto object-contain drop-shadow-2xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/250x100?text=Circuito+do+Sol';
                  }}
                />
              </div>
              <div>
                <h2 className="text-3xl font-serif font-bold text-white mb-2">Circuito do Sol</h2>
                <div className="w-16 h-1 bg-amber-500"></div>
              </div>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md mb-8">
              Sua referência premium em passeios pelo litoral baiano. Oferecemos o que há de melhor em conforto, segurança e hospitalidade marítima.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/circuitodosol_/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all transform hover:-translate-y-1 shadow-lg group">
                 <span className="font-bold text-xs uppercase tracking-tighter">Insta</span>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all transform hover:-translate-y-1 shadow-lg">
                <span className="font-bold text-xs uppercase tracking-tighter">Wpp</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8 border-l-2 border-amber-500 pl-4">Navegação</h4>
            <ul className="space-y-4 text-slate-400 text-base">
              <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-amber-500 transition-colors flex items-center gap-2"><span>→</span> Início</a></li>
              <li><a href="#tours" onClick={(e) => scrollToSection(e, 'tours')} className="hover:text-amber-500 transition-colors flex items-center gap-2"><span>→</span> Passeios</a></li>
              <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-amber-500 transition-colors flex items-center gap-2"><span>→</span> Sobre Nós</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8 border-l-2 border-amber-500 pl-4">Atendimento</h4>
            <ul className="space-y-6 text-slate-400">
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group block">
                  <span className="text-amber-500 text-xs font-bold uppercase block mb-1">WhatsApp</span>
                  <span className="text-lg group-hover:text-white transition-colors font-medium">(71) 99657-8592</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`} className="group block">
                  <span className="text-amber-500 text-xs font-bold uppercase block mb-1">E-mail</span>
                  <span className="text-sm group-hover:text-white transition-colors break-all">{email}</span>
                </a>
              </li>
              <li>
                <span className="text-amber-500 text-xs font-bold uppercase block mb-1">Localização</span>
                <span className="text-sm">Salvador • Morro de São Paulo • Praia do Forte</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 text-[10px] md:text-xs gap-6 tracking-wide">
          <p className="text-center md:text-left">© 2024 CIRCUITO DO SOL - PASSEIOS TURÍSTICOS NA BAHIA. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex gap-6 font-bold uppercase text-amber-500/60">
            <span>Conforto</span>
            <span>•</span>
            <span>Segurança</span>
            <span>•</span>
            <span>Organização</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-amber-500 selection:text-slate-900 bg-slate-900">
      <Navbar />
      <Hero />
      <Tours />
      <About />
      <Footer />
      <AIChat />
    </div>
  );
};

export default App;
