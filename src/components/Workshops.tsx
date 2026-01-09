
import React from 'react';
import { WORKSHOPS } from '../constants';

const Workshops: React.FC = () => {
    return (
        <section id="talleres" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-3">Comunidad Vibrante</h2>
                    <h3 className="text-4xl font-serif font-bold text-neutral-900 mb-4">Talleres Gratuitos para Todos</h3>
                    <p className="text-neutral-600 max-w-2xl mx-auto">
                        Creemos que la música debe ser compartida. Únete a nuestros talleres complementarios y potencia tu talento junto a otros apasionados.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {WORKSHOPS.map((workshop) => (
                        <div
                            key={workshop.id}
                            className="p-8 bg-neutral-50 rounded-2xl hover:bg-neutral-100 transition-all border border-neutral-100 group"
                        >
                            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">
                                {workshop.icon}
                            </div>
                            <h4 className="text-xl font-bold text-neutral-900 mb-3">{workshop.title}</h4>
                            <p className="text-neutral-600 leading-relaxed mb-6">
                                {workshop.description}
                            </p>
                            <div className="w-10 h-1 bg-amber-500 rounded-full"></div>
                        </div>
                    ))}

                    <div className="p-8 bg-amber-600 rounded-2xl flex flex-col justify-center items-center text-center text-white">
                        <h4 className="text-2xl font-serif font-bold mb-4">¡Y mucho más!</h4>
                        <p className="mb-6 opacity-90 text-sm uppercase tracking-widest font-bold">Descubre todos los beneficios</p>
                        <a
                            href="#contacto"
                            className="px-6 py-3 bg-white text-amber-600 rounded-full font-bold hover:bg-neutral-100 transition-all"
                        >
                            Consultar Horarios
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Workshops;
