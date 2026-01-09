
import React from 'react';
import { WHATSAPP_URL } from '../constants';

const Personalized: React.FC = () => {
    return (
        <section id="personalizada" className="py-24 bg-neutral-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 relative">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-600/20 blur-3xl rounded-full"></div>
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-video shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800"
                                alt="Grabación en estudio"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent flex items-end p-8">
                                <div>
                                    <p className="text-amber-500 font-bold text-sm uppercase mb-1">Estudio Profesional</p>
                                    <p className="text-xl font-serif">Graba tu primer single</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                            ¿Te imaginas ser el protagonista de tu propio <span className="text-amber-500 italic">videoclip</span>?
                        </h2>
                        <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                            Nuestro servicio de enseñanza personalizada no solo se enfoca en la técnica vocal, sino en tu proyección como artista 360°.
                        </p>

                        <ul className="space-y-6 mb-10">
                            {[
                                { title: 'Grabación de Audio & Video', desc: 'Acceso a nuestro estudio profesional para inmortalizar tu talento.' },
                                { title: 'Certificación Profesional', desc: 'Acreditamos tu avance con certificados de valor curricular.' },
                                { title: 'Exhibición Escénica', desc: 'Oportunidad de participar en concursos, eventos y conciertos exclusivos.' }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-neutral-900">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-lg mb-1">{item.title}</h5>
                                        <p className="text-neutral-500 text-sm">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-10 py-4 bg-amber-600 text-neutral-900 font-bold rounded-full hover:bg-amber-500 transition-all shadow-lg shadow-amber-600/20"
                        >
                            Consultar Plan Personalizado
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Personalized;
