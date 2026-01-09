
import React from 'react';

const benefits = [
    {
        title: "Protagonista de tu Videoclip",
        description: "No solo te escuchas, te ves. Te brindamos la oportunidad única de grabar audio y video en un estudio profesional para iniciar tu portafolio artístico.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        title: "Certificación de Avance",
        description: "Cada módulo completado cuenta con un certificado que acredita tu progreso técnico y profesional, dándole respaldo a tu carrera musical.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        )
    },
    {
        title: "Conciertos y Eventos",
        description: "Ponemos a prueba tu talento en escenarios reales. Participa en concursos y conciertos organizados exclusivamente por la escuela.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
        )
    },
    {
        title: "Formación de Artista 360°",
        description: "Más allá del canto, trabajamos tu desenvolvimiento escénico, armonía y ensamble para que seas un artista completo y competitivo.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        )
    }
];

const Benefits: React.FC = () => {
    return (
        <section id="beneficios" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-5">
                        <span className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-4 block">¿Por qué elegirnos?</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
                            Tus sueños merecen un <span className="text-amber-600 italic">impulso profesional</span>
                        </h2>
                        <p className="text-neutral-600 text-lg mb-10 leading-relaxed">
                            En Voz & Arte, entendemos que el talento es solo el comienzo. Te brindamos las herramientas tecnológicas y pedagógicas para que tu pasión se convierta en tu carrera.
                        </p>
                        <div className="relative group overflow-hidden rounded-3xl h-64 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800"
                                alt="Micrófono profesional"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-amber-600/10 mix-blend-overlay"></div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="p-8 bg-neutral-50 rounded-3xl border border-neutral-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-amber-600 shadow-sm mb-6">
                                    {benefit.icon}
                                </div>
                                <h4 className="text-xl font-bold text-neutral-900 mb-3">{benefit.title}</h4>
                                <p className="text-neutral-500 text-sm leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
