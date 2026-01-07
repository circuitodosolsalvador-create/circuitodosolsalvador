
import React, { useState, useRef, useEffect } from 'react';
import { ASSETS_BASE_URL, DESTINATIONS_GALLERY } from '../constants';

const ImageCarousel: React.FC<{ prefix: string; title: string; onImageClick: (url: string) => void }> = ({ prefix, title, onImageClick }) => {
  const [validImages, setValidImages] = useState<number[]>(Array.from({ length: 20 }, (_, i) => i + 1));
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [progress, setProgress] = useState(0);

  const handleImageError = (index: number) => {
    setValidImages(prev => prev.filter(imgIndex => imgIndex !== index));
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 20);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 20);
      
      const scrollPercent = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setProgress(scrollPercent);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (validImages.length === 0) return null;

  return (
    <div className="mb-20 group/carousel relative">
      <div className="flex items-end justify-between mb-8 px-2">
        <div>
          <h3 className="text-3xl md:text-4xl font-serif font-black text-slate-900 leading-none">
            {title}
          </h3>
          <div className="h-1.5 w-12 bg-orange-500 mt-4 rounded-full"></div>
        </div>
        
        <div className="hidden md:flex gap-3">
          <button 
            onClick={() => scroll('left')}
            className={`p-3 rounded-full border border-slate-200 transition-all ${showLeftArrow ? 'opacity-100 hover:bg-orange-500 hover:text-white hover:border-orange-500' : 'opacity-30 cursor-not-allowed'}`}
            disabled={!showLeftArrow}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button 
            onClick={() => scroll('right')}
            className={`p-3 rounded-full border border-slate-200 transition-all ${showRightArrow ? 'opacity-100 hover:bg-orange-500 hover:text-white hover:border-orange-500' : 'opacity-30 cursor-not-allowed'}`}
            disabled={!showRightArrow}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none opacity-0 group-hover/carousel:opacity-100 transition-opacity"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none opacity-0 group-hover/carousel:opacity-100 transition-opacity"></div>

        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide snap-x px-2"
        >
          {validImages.map((idx) => (
            <div 
              key={`${prefix}-${idx}`} 
              onClick={() => onImageClick(`${ASSETS_BASE_URL}${prefix}-${idx}.jpg`)}
              className="flex-shrink-0 w-[85vw] md:w-[450px] aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-xl snap-start bg-slate-100 cursor-pointer group/card relative"
            >
              <img
                src={`${ASSETS_BASE_URL}${prefix}-${idx}.jpg`}
                alt={`${title} - foto ${idx}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110"
                onError={() => handleImageError(idx)}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-full transform scale-50 group-hover/card:scale-100 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Progress Bar */}
      <div className="w-full h-1 bg-slate-100 rounded-full mt-4 overflow-hidden relative">
        <div 
          className="absolute top-0 left-0 h-full bg-orange-500 transition-all duration-300 ease-out rounded-full"
          style={{ width: `${Math.max(5, progress)}%` }}
        ></div>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedImage]);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-orange-500 font-black uppercase tracking-[0.5em] text-xs mb-4 block">Visual Experience</span>
          <h2 className="text-5xl md:text-8xl font-serif font-black text-slate-900 mb-8 tracking-tight">
            Nossos <span className="text-orange-500 italic">Destinos</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
            Uma curadoria visual do que há de mais belo na Baía de Todos os Santos. Sinta a energia antes mesmo de embarcar.
          </p>
        </div>

        <div className="space-y-24">
          {DESTINATIONS_GALLERY.map((dest) => (
            <ImageCarousel 
              key={dest.id} 
              prefix={dest.prefix} 
              title={dest.title} 
              onImageClick={setSelectedImage}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[1000] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-[1001]"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <img 
            src={selectedImage} 
            alt="Visualização em tela cheia" 
            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl animate-in zoom-in-95 duration-500"
            onClick={(e) => e.stopPropagation()}
          />
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-xs font-black uppercase tracking-[0.3em]">
            Toque fora para fechar
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
