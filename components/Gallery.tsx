
import React, { useState } from 'react';
import { ASSETS_BASE_URL, DESTINATIONS_GALLERY } from '../constants';

const ImageCarousel: React.FC<{ prefix: string; title: string }> = ({ prefix, title }) => {
  // Geramos uma lista de 1 a 20 possíveis imagens
  const [validImages, setValidImages] = useState<number[]>(Array.from({ length: 20 }, (_, i) => i + 1));

  const handleImageError = (index: number) => {
    setValidImages(prev => prev.filter(imgIndex => imgIndex !== index));
  };

  if (validImages.length === 0) return null;

  return (
    <div className="mb-16">
      <h3 className="text-2xl md:text-3xl font-serif font-black text-slate-900 mb-6 border-l-8 border-orange-500 pl-4">
        {title}
      </h3>
      <div className="flex overflow-x-auto gap-4 pb-6 scrollbar-hide snap-x">
        {validImages.map((idx) => (
          <div key={`${prefix}-${idx}`} className="flex-shrink-0 w-72 md:w-96 h-56 md:h-72 rounded-3xl overflow-hidden shadow-lg snap-start bg-slate-100">
            <img
              src={`${ASSETS_BASE_URL}${prefix}-${idx}.jpg`}
              alt={`${title} - foto ${idx}`}
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              onError={() => handleImageError(idx)}
            />
          </div>
        ))}
      </div>
      {validImages.length === 0 && (
        <p className="text-slate-400 italic text-sm">Imagens em breve...</p>
      )}
    </div>
  );
};

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-sm mb-4 block">Nossos Destinos</span>
          <h2 className="text-4xl md:text-7xl font-serif font-black text-slate-900 mb-6">Galeria de <span className="text-orange-500">Paraísos</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Explore a beleza única de cada parada em nossos roteiros exclusivos.
          </p>
        </div>

        <div className="space-y-12">
          {DESTINATIONS_GALLERY.map((dest) => (
            <ImageCarousel key={dest.id} prefix={dest.prefix} title={dest.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
