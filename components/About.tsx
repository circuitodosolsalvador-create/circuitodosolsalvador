
import React from 'react';
import { ASSETS_BASE_URL } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/5 blur-3xl rounded-full translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-amber-500 z-0"></div>
              <img 
                src={`${ASSETS_BASE_URL}about-img.jpg`} 
                alt="Turismo na Bahia" 
                className="rounded-2xl shadow-2xl relative z-10 w-full object-cover aspect-video"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=800';
                }}
              />
              <div className="absolute -bottom-8 -right-8 glass p-6 rounded-2xl hidden md:block z-20">
                <p className="text-amber-400 font-serif text-3xl font-bold">Bahia</p>
                <p className="text-white text-sm uppercase tracking-widest">Nosso Cenário</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-2 block">Apresentação da Empresa</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">Sua Melhor Experiência <br/><span className="text-amber-500">no Litoral Baiano</span></h2>
            
            <div className="space-y-6">
              <p className="text-slate-300 text-lg leading-relaxed">
                Somos uma empresa de turismo especializada em <strong>passeios de escuna, lancha e catamarã</strong>, levando você aos destinos mais encantadores da Bahia, como as ilhas, Morro de São Paulo e Praia do Forte.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Oferecemos experiências completas, unindo conforto, segurança e organização, com embarcações bem equipadas e equipe qualificada para garantir momentos inesquecíveis em meio a paisagens paradisíacas.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Trabalhamos com seriedade, transparência e compromisso, proporcionando passeios tranquilos, agradáveis e cheios de boas lembranças para famílias, casais e grupos de amigos.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-2xl">🌊</div>
              <p className="text-amber-400 font-serif italic text-xl">"Descubra o melhor da Bahia com quem transforma cada passeio em uma experiência única."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
