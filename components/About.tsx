
import React from 'react';
import { ASSETS_BASE_URL } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-200/50 rounded-full blur-3xl z-0"></div>
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
              <img 
                src={`${ASSETS_BASE_URL}about-img.jpg`} 
                alt="Turismo na Bahia" 
                className="w-full h-full object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-1000"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=800';
                }}
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[2rem] shadow-2xl z-20 hidden md:block border border-slate-100">
              <div className="text-4xl font-serif font-black text-orange-500">10+ Anos</div>
              <div className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-1">Navegando com Amor</div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-sm mb-4 block">Conheça nossa História</span>
            <h2 className="text-4xl md:text-7xl font-serif font-black text-slate-900 mb-8 leading-tight">Expertise em <span className="text-orange-500 italic">Hospitalidade</span> Marítima</h2>
            
            <div className="space-y-6 text-slate-600 text-lg md:text-xl leading-relaxed">
              <p>
                A <strong>Circuito do Sol</strong> é mais que uma empresa de turismo, é o seu passaporte para as águas mais cristalinas da Bahia. 
              </p>
              <p>
                Comandada por especialistas apaixonados pelo mar, oferecemos experiências exclusivas em Lanchas, Escunas e Catamarãs, sempre focando em três pilares: <strong>Conforto, Segurança e Alegria</strong>.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <span className="text-3xl mb-3 block">🛳️</span>
                <h4 className="font-black text-slate-900 uppercase text-sm mb-2">Frota VIP</h4>
                <p className="text-slate-500 text-sm">Embarcações modernas e revisadas.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <span className="text-3xl mb-3 block">📍</span>
                <h4 className="font-black text-slate-900 uppercase text-sm mb-2">Destinos</h4>
                <p className="text-slate-500 text-sm">Os melhores spots do litoral baiano.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
