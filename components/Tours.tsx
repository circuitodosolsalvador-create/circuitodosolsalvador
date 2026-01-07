
import React from 'react';
import { TOURS } from '../constants';

const Tours: React.FC = () => {
  return (
    <section id="tours" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Nossas Experiências</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Escolha o roteiro que mais combina com você. Do relaxamento total à exploração ativa, temos o mar como nosso cenário principal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOURS.map((tour) => (
            <div 
              key={tour.id} 
              className="group bg-slate-800 rounded-2xl overflow-hidden shadow-2xl transition-all hover:-translate-y-2 border border-white/5"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  {tour.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif font-bold text-white group-hover:text-amber-400 transition-colors">
                    {tour.title}
                  </h3>
                  <span className="text-amber-500 font-bold">{tour.price}</span>
                </div>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {tour.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-8">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {tour.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Confirmado
                  </span>
                </div>
                <button className="w-full py-3 border border-amber-500/50 text-amber-500 rounded-xl font-bold hover:bg-amber-500 hover:text-slate-900 transition-all">
                  Saber Mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;
