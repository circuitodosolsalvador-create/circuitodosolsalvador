
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video or Image Background Placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1920" 
          alt="Sunset Nautical View" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="mb-6 inline-block">
          <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest animate-pulse">
            Experiências Premium no Mar
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
          Navegue no Coração <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">do Horizonte</span>
        </h1>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Descubra a beleza inigualável da costa a bordo do Circuito do Sol. Passeios exclusivos, pôr do sol memorável e aventuras que tocam a alma.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#tours"
            className="bg-amber-500 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-400 transition-all transform hover:scale-105 shadow-2xl w-full sm:w-auto"
          >
            Explorar Passeios
          </a>
          <a
            href="#about"
            className="glass text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all w-full sm:w-auto"
          >
            Nossa História
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
