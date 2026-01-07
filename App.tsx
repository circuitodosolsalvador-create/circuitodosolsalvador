
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tours from './components/Tours';
import About from './components/About';
import AIChat from './components/AIChat';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-slate-900 font-bold text-xl shadow-lg border-2 border-white">
                CS
              </div>
              <h2 className="text-2xl font-serif font-bold text-white">Circuito do Sol</h2>
            </div>
            <p className="text-slate-500 max-w-sm mb-6">
              Especialistas em proporcionar as melhores experiências náuticas. Navegue com quem entende de felicidade no mar.
            </p>
            <div className="flex gap-4">
              {['instagram', 'facebook', 'youtube'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current mask-icon" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#home" className="hover:text-amber-500 transition-colors">Início</a></li>
              <li><a href="#tours" className="hover:text-amber-500 transition-colors">Passeios</a></li>
              <li><a href="#about" className="hover:text-amber-500 transition-colors">Nossa História</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Blog do Mar</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Fale Conosco</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li className="flex items-center gap-3">
                 <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +55 (12) 99876-5432
              </li>
              <li className="flex items-center gap-3">
                 <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contato@circuitodosol.com.br
              </li>
              <li className="flex items-center gap-3">
                 <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Porto Marina, Pier 4 - Litoral Norte
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-600 text-xs gap-4">
          <p>© 2024 Circuito do Sol - Passeios Turísticos. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-amber-500 selection:text-slate-900">
      <Navbar />
      <Hero />
      <Tours />
      <About />
      <Footer />
      <AIChat />
    </div>
  );
};

export default App;
