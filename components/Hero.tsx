
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
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          poster={`${ASSETS_BASE_URL}hero-bg.jpg`}
          className="w-full h-full object-cover scale-105"
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
        {/* Camada de cor que puxa a identidade do logo (quente) */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-orange-900/40 to-slate-900/10"></div>
        {/* Overlay Tropical */}
        <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <div className="mb-8 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full transform -rotate-1 hover:rotate-0 transition-transform cursor-default">
          <span className="text-yellow-400 text-lg">☀️</span>
          <span className="text-white text-xs md:text-sm font-black uppercase tracking-[0.2em]">
            Viva o Verão Baiano com Estilo
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-black text-white mb-8 leading-[0.9] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          Descubra o <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 animate-pulse">Paraíso</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-100 mb-12 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-md">
          Embarque conosco em uma jornada inesquecível por <span className="text-yellow-400 font-bold underline decoration-orange-500 decoration-4">Morro de São Paulo</span>, <span className="text-yellow-400 font-bold underline decoration-orange-500 decoration-4">Praia do Forte</span> e as ilhas mais belas de Salvador.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#tours"
            onClick={(e) => scrollToSection(e, 'tours')}
            className="group relative bg-orange-500 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-orange-400 transition-all transform hover:scale-110 shadow-[0_20px_40px_rgba(234,88,12,0.5)] w-full sm:w-auto flex items-center justify-center gap-3 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <span className="relative z-10">Explorar Passeios</span>
            <span className="relative z-10 group-hover:translate-x-2 transition-transform">→</span>
          </a>
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="glass-sun text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-white/20 transition-all w-full sm:w-auto border border-white/30 backdrop-blur-xl"
          >
            Nossa História
          </a>
        </div>
      </div>

      {/* Decorative Wave at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.19,102.66,114.28,110.8,172,106.07,235.12,100.91,265.82,66.88,321.39,56.44Z" className="fill-slate-900"></path>
        </svg>
      </div>
      
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-20" onClick={(e) => scrollToSection(e as any, 'tours')}>
        <div className="w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
