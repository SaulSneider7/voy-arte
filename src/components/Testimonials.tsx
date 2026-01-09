
import React from 'react';

const testimonials = [
    {
        name: "Andrea Rivas",
        role: "Estudiante de Canto Contemporáneo",
        content: "Llegué buscando mejorar mi técnica y terminé grabando mi primer videoclip profesional. La formación integral en Voz & Arte me dio la confianza que necesitaba para subir a un escenario.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
        name: "Carlos Méndez",
        role: "Artista Independiente",
        content: "El taller de armonías cambió por completo mi forma de componer. Ahora entiendo la música desde una perspectiva profesional y los resultados en mi canal de YouTube son increíbles.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
    },
    {
        name: "Lucía Torres",
        role: "Alumna de Ensamble",
        content: "Poder ensayar con músicos reales y recibir feedback de profesores que están activos en la industria es invaluable. Aquí no solo aprendes a cantar, aprendes a ser un artista.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
    }
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-24 bg-neutral-50 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-100/30 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Testimonios</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-4 italic">Voces que inspiran</h2>
                    <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="bg-white p-8 rounded-[2rem] shadow-sm border border-neutral-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="text-amber-500 mb-6">
                                    <svg className="w-10 h-10 opacity-20" fill="currentColor" viewBox="0 0 32 32">
                                        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H7c0-1.7 1.3-3 3-3V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-7c0-1.7 1.3-3 3-3V8z" />
                                    </svg>
                                </div>
                                <p className="text-neutral-600 italic leading-relaxed mb-8">
                                    "{t.content}"
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-12 h-12 rounded-full object-cover grayscale hover:grayscale-0 transition-all"
                                />
                                <div>
                                    <h4 className="font-bold text-neutral-900 text-sm">{t.name}</h4>
                                    <p className="text-neutral-400 text-xs">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
