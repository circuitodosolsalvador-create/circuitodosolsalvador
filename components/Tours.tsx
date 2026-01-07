
import React from 'react';
import { TOURS } from '../constants';

const Tours: React.FC = () => {
  const whatsappUrl = "https://wa.me/5571996578592";

  return (
    <section id="tours" className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-sm mb-4 block">Nossos Destinos</span>
          <h2 className="text-5xl md:text-7xl font-serif font-black text-white mb-6">Roteiros <span className="italic text-orange-500 underline decoration-yellow-400">Inesquecíveis</span></h2>
          <div className="w-40 h-2 bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Sinta o vento, o sol e a energia da Bahia em embarcações exclusivas preparadas para o seu máximo conforto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TOURS.map((tour) => (
            <div 
              key={tour.id} 
              className="group bg-slate-800/50 backdrop-blur-md rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:shadow-orange-500/10 border border-white/5"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                />
                <div className="absolute top-6 right-6 sun-gradient text-white px-5 py-2 rounded-full text-xs font-black shadow-2xl uppercase tracking-tighter">
                  {tour.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-10">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-3xl font-serif font-black text-white group-hover:text-orange-400 transition-colors">
                    {tour.title}
                  </h3>
                </div>
                <p className="text-slate-400 text-base mb-8 leading-relaxed font-light">
                  {tour.description}
                </p>
                
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                       <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Duração</span>
                       <span className="text-white font-bold text-sm">{tour.duration}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest block">Investimento</span>
                    <span className="text-2xl text-yellow-500 font-black">{tour.price}</span>
                  </div>
                </div>

                <a 
                  href={`${whatsappUrl}?text=Olá! Gostaria de viver a experiência: ${tour.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-5 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-2xl font-black text-lg hover:from-orange-500 hover:to-orange-400 transition-all shadow-xl hover:shadow-orange-500/20 transform active:scale-95"
                >
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.553 4.197 1.603 6.034L0 24l6.135-1.609a11.83 11.83 0 005.915 1.554h.005c6.637 0 12.05-5.414 12.05-12.05 0-3.218-1.252-6.242-3.527-8.517z"/>
                  </svg>
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
