
import React from 'react';
import { ASSETS_BASE_URL } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Sun glow effect */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/20 rounded-full blur-2xl group-hover:bg-orange-500/40 transition-all duration-700"></div>
              <div className="relative z-10 p-4 bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-3xl overflow-hidden">
                <img 
                  src={`${ASSETS_BASE_URL}about-img.jpg`} 
                  alt="Turismo na Bahia" 
                  className="rounded-[2.5rem] shadow-2xl w-full object-cover aspect-[4/5] md:aspect-square group-hover:scale-105 transition-transform duration-1000"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=800';
                  }}
                />
              </div>
              <div className="absolute -bottom-10 -right-6 sun-gradient p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(234,88,12,0.4)] z-20 animate-float hidden md:block">
                <p className="text-white font-serif text-5xl font-black italic">BAHIA</p>
                <p className="text-yellow-200 text-sm font-black uppercase tracking-[0.4em] mt-2">Nossa Essência</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-sm mb-4 block">Bem-vindo à Experiência</span>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-white mb-10 leading-tight">Sinta a <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 underline decoration-yellow-400">Energia</span> do Mar</h2>
            
            <div className="space-y-8">
              <p className="text-slate-200 text-xl leading-relaxed font-light">
                A <strong>Circuito do Sol</strong> nasceu da paixão pelas águas baianas. Somos especialistas em transformar um simples dia de passeio em uma memória eterna para sua alma.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-orange-500/50 transition-colors">
                  <span className="text-4xl mb-4 block">🛥️</span>
                  <h4 className="text-white font-black text-lg mb-2 uppercase">Frota Premium</h4>
                  <p className="text-slate-400 text-sm">Embarcações modernas com som, geladeira e estofados VIP.</p>
                </div>
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-orange-500/50 transition-colors">
                  <span className="text-4xl mb-4 block">🗺️</span>
                  <h4 className="text-white font-black text-lg mb-2 uppercase">Roteiros Exclusivos</h4>
                  <p className="text-slate-400 text-sm">Do Morro ao pôr do sol nas ilhas, conhecemos cada segredo.</p>
                </div>
              </div>

              <p className="text-slate-400 leading-relaxed italic border-l-4 border-orange-500 pl-6 py-2">
                "Nosso compromisso não é apenas com o destino, mas com a alegria de cada segundo que você passa a bordo conosco."
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-8">
               <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-14 h-14 rounded-full border-4 border-slate-950 bg-slate-800 flex items-center justify-center overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Client" />
                    </div>
                  ))}
               </div>
               <div>
                  <p className="text-white font-black text-lg">+1.000 Sorrisos</p>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Registrados no Mar</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
