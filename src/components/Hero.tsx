import React from 'react';
import { WHATSAPP_URL } from '../constants';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-neutral-950 text-white">

            {/* Background visual */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1600"
                    alt="Formación artística profesional"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 lg:py-32">
                <div className="max-w-2xl xl:max-w-3xl">

                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block mb-6 px-4 py-2 text-xs tracking-widest uppercase rounded-full bg-amber-500/10 text-amber-400 font-bold"
                    >
                        Formación artística profesional
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl xl:text-7xl font-serif font-bold leading-tight mb-6"
                    >
                        Tu voz puede destacar.
                        <span className="block italic text-amber-400">Nosotros te enseñamos cómo.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-neutral-300 text-lg leading-relaxed mb-10"
                    >
                        Entrenamiento vocal real, técnica profesional y acompañamiento artístico
                        desde el primer día. No formamos aficionados, formamos artistas preparados
                        para escenarios reales.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-amber-400 text-neutral-950 font-bold rounded-full hover:bg-amber-300 transition-all text-center shadow-xl"
                        >
                            Agenda una evaluación vocal
                        </a>

                        <a
                            href="#talleres"
                            className="px-8 py-4 border border-white/30 rounded-full font-semibold hover:bg-white/10 transition-all text-center"
                        >
                            Taller gratuito
                        </a>
                    </motion.div>

                    <div className="mt-12 flex items-center gap-6 text-sm text-neutral-400">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((n) => (
                                <img
                                    key={n}
                                    src={`https://picsum.photos/seed/${n + 30}/100/100`}
                                    className="w-10 h-10 rounded-full border-2 border-neutral-950 object-cover"
                                    alt="Alumno"
                                />
                            ))}
                        </div>
                        <span>
                            Más de <strong className="text-white">500 artistas formados</strong> en los últimos años
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
