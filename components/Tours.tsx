
import React from 'react';
import { TOURS } from '../constants';

const Tours: React.FC = () => {
  const whatsappUrl = "https://wa.me/5571996578592";

  return (
    <section id="tours" className="py-24 md:py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-sm mb-4 block">Experiências Reais</span>
          <h2 className="text-4xl md:text-7xl font-serif font-black text-slate-900 mb-6">Nossos <span className="text-orange-500">Passeios</span></h2>
          <div className="w-24 h-2 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {TOURS.map((tour) => (
            <div 
              key={tour.id} 
              className="group bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl border border-slate-100"
            >
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-orange-600 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg">
                  {tour.category}
                </div>
              </div>
              <div className="p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-serif font-black text-slate-900 mb-4 group-hover:text-orange-500 transition-colors">
                  {tour.title}
                </h3>
                <p className="text-slate-500 text-base md:text-lg mb-8 leading-relaxed line-clamp-3">
                  {tour.description}
                </p>
                
                <div className="flex items-center justify-between mb-8 border-y border-slate-100 py-6">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest block mb-1">Duração</span>
                    <span className="text-slate-900 font-extrabold">{tour.duration}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest block mb-1">Valor</span>
                    <span className="text-2xl text-orange-600 font-black">{tour.price}</span>
                  </div>
                </div>

                <a 
                  href={`${whatsappUrl}?text=Olá! Gostaria de informações sobre o passeio: ${tour.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-5 bg-orange-500 text-white rounded-2xl font-black text-lg hover:bg-orange-600 transition-all transform active:scale-95 shadow-lg"
                >
                  Reservar Agora
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;
