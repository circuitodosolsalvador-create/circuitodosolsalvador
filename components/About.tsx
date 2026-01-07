
import React from 'react';

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
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800" 
                alt="Nosso Veleiro" 
                className="rounded-2xl shadow-2xl relative z-10 w-full object-cover"
              />
              <div className="absolute -bottom-8 -right-8 glass p-6 rounded-2xl hidden md:block z-20">
                <p className="text-amber-400 font-serif text-3xl font-bold">15+</p>
                <p className="text-white text-sm uppercase tracking-widest">Anos no Mar</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Nossa Paixão é <br/><span className="text-amber-500">o Mar</span></h2>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              O Circuito do Sol nasceu de um sonho: compartilhar a magia de viver o mar de forma autêntica e luxuosa. Localizados na deslumbrante costa brasileira, transformamos simples passeios em jornadas sensoriais.
            </p>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Nossa tripulação é altamente treinada não apenas para navegar, mas para hospedar. Acreditamos que cada detalhe, desde o drink perfeito até a escolha da enseada mais tranquila, faz toda a diferença.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <h4 className="text-amber-400 font-bold mb-2">Segurança Total</h4>
                <p className="text-slate-500 text-sm">Embarcações inspecionadas e tecnologia de ponta.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <h4 className="text-amber-400 font-bold mb-2">Sustentabilidade</h4>
                <p className="text-slate-500 text-sm">Respeito absoluto ao ecossistema marinho em cada milha.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
