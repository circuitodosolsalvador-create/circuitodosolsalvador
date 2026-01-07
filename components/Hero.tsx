
import React from 'react';
import { ASSETS_BASE_URL } from '../constants';

const Hero: React.FC = () => {
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
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Prioridade para vídeo se existir, senão usa imagem */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          poster={`${ASSETS_BASE_URL}hero-bg.jpg`}
          className="w-full h-full object-cover"
        >
          <source src={`${ASSETS_BASE_URL}hero-video.mp4`} type="video/mp4" />
          <img 
            src={`${ASSETS_BASE_URL}hero-bg.jpg`} 
            alt="Litoral Baiano" 
            className="w-full h-full object-cover"
            onError={(e) => {
               (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=1920';
            }}
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/20"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="mb-6 inline-block">
          <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest animate-pulse">
            Especialistas em Escuna, Lancha e Catamarã
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
          O Melhor do Litoral <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Baiano com Você</span>
        </h1>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Transformamos cada passeio em uma experiência única. Conheça as ilhas, Morro de São Paulo e Praia do Forte com quem entende de mar e hospitalidade.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#tours"
            onClick={(e) => scrollToSection(e, 'tours')}
            className="bg-amber-500 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-400 transition-all transform hover:scale-105 shadow-2xl w-full sm:w-auto"
          >
            Ver Nossos Passeios
          </a>
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="glass text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all w-full sm:w-auto"
          >
            Conheça a Empresa
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" onClick={(e) => scrollToSection(e as any, 'tours')}>
        <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
