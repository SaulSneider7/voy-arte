
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Workshops from './components/Workshops';
import Benefits from './components/Benefits';
import Personalized from './components/Personalized';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Workshops />
        <Benefits />
        <Personalized />
        <Testimonials />
        <ContactForm />
      </main>

      <footer className="bg-neutral-950 text-white pt-20 pb-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <span className="text-3xl font-serif font-bold tracking-tight mb-6 block">Voz<span className="text-amber-500">&</span>Arte</span>
              <p className="text-neutral-400 max-w-sm mb-8 text-sm leading-relaxed">
                Escuela líder en formación de artistas integrales. Combinamos técnica, pasión y tecnología para llevar tu voz al siguiente nivel.
              </p>
              <div className="flex gap-4">
                {['Instagram', 'YouTube', 'TikTok', 'Facebook'].map(social => (
                  <a key={social} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-neutral-900 transition-all text-xs font-bold">
                    {social.substring(0, 2)}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-neutral-300">Explorar</h5>
              <ul className="space-y-4 text-sm text-neutral-400">
                <li><a href="#talleres" className="hover:text-amber-500 transition-colors">Talleres Gratuitos</a></li>
                <li><a href="#beneficios" className="hover:text-amber-500 transition-colors">Beneficios</a></li>
                <li><a href="#personalizada" className="hover:text-amber-500 transition-colors">Personalizada</a></li>
                <li><a href="#contacto" className="hover:text-amber-500 transition-colors">Precios y Horarios</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-neutral-300">Ayuda</h5>
              <ul className="space-y-4 text-sm text-neutral-400">
                <li><a href="#contacto" className="hover:text-amber-500 transition-colors">Audiciones</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Preguntas Frecuentes</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Términos de Uso</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-neutral-500 text-xs text-center md:text-left">
              &copy; 2024 Voz & Arte Escuela de Música. Todos los derechos reservados.
            </div>
            <div className="text-neutral-500 text-xs text-center md:text-right">
              Desarrollado por <a href="https://tu-sitioweb.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-amber-500 font-bold transition-colors">tu-sitioweb.com</a>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default App;
