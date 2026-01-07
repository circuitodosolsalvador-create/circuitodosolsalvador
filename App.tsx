
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tours from './components/Tours';
import About from './components/About';
import AIChat from './components/AIChat';

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
    <footer id="contact" className="bg-slate-950 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-slate-900 font-bold text-xl shadow-lg border-2 border-white">
                CS
              </div>
              <h2 className="text-2xl font-serif font-bold text-white">Circuito do Sol</h2>
            </div>
            <p className="text-slate-500 max-w-sm mb-6">
              Sua referência em passeios de escuna, lancha e catamarã nos destinos mais incríveis da Bahia. Conforto, segurança e organização em cada milha navegada.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/circuitodosol_/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all">Insta</a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all">Wpp</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-amber-500 transition-colors">Início</a></li>
              <li><a href="#tours" onClick={(e) => scrollToSection(e, 'tours')} className="hover:text-amber-500 transition-colors">Passeios</a></li>
              <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-amber-500 transition-colors">Sobre Nós</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Fale Conosco</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-amber-500 transition-colors">
                  <span className="text-amber-500 text-xl">📞</span>
                  (71) 99657-8592
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`} className="flex items-center gap-3 hover:text-amber-500 transition-colors">
                  <span className="text-amber-500 text-xl">✉️</span>
                  {email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-500 text-xl">📍</span>
                Salvador / Morro de São Paulo / Praia do Forte, Bahia
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-600 text-xs gap-4">
          <p>© 2024 Circuito do Sol - Passeios Turísticos na Bahia. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <span>Conforto • Segurança • Organização</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-amber-500 selection:text-slate-900">
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
