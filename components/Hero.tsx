
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
    <section id="home" className="relative h-[90vh] md:h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
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
        {/* Lighter, more vibrant tropical overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/30 via-transparent to-white"></div>
        <div className="absolute inset-0 bg-white/10 backdrop-brightness-110"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl">
        <div className="mb-6 md:mb-10 inline-block bg-white/20 backdrop-blur-md border border-white/40 px-6 py-2 rounded-full transform hover:scale-105 transition-transform">
          <span className="text-white text-xs md:text-base font-black uppercase tracking-[0.3em] drop-shadow-md">
            🌴 O Melhor do Verão Baiano
          </span>
        </div>
        
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif font-black text-white mb-6 md:mb-8 leading-[1] text-shadow-lg">
          Viva o seu <br />
          <span className="text-yellow-300 italic">Momento</span> Sol
        </h1>
        
        <p className="text-lg md:text-2xl text-white mb-10 md:mb-12 max-w-3xl mx-auto font-bold leading-relaxed drop-shadow-md">
          Embarcações exclusivas e roteiros personalizados por Salvador, Morro de São Paulo e Praia do Forte.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
          <a
            href="#tours"
            onClick={(e) => scrollToSection(e, 'tours')}
            className="bg-orange-500 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-orange-400 transition-all transform hover:scale-105 shadow-2xl w-full sm:w-auto flex items-center justify-center gap-3"
          >
            Ver Passeios
            <span>→</span>
          </a>
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="bg-white/20 backdrop-blur-md text-white border-2 border-white/60 px-10 py-5 rounded-2xl font-black text-xl hover:bg-white/40 transition-all transform hover:scale-105 w-full sm:w-auto shadow-xl"
          >
            Sobre Nós
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-20" onClick={(e) => scrollToSection(e as any, 'tours')}>
        <div className="w-8 h-12 rounded-full border-2 border-white/60 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
