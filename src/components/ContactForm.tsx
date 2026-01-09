
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        workshop: 'Enseñanza Personalizada (Vocal Coaching)',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({
                name: '',
                phone: '',
                workshop: 'Enseñanza Personalizada (Vocal Coaching)',
                message: ''
            });

            // Clear success message after 5 seconds
            setTimeout(() => setSubmitted(false), 5000);
        }, 1200);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contacto" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <span className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4 block">Contacto</span>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-8 leading-tight">Comienza tu viaje musical hoy</h3>
                        <p className="text-neutral-600 mb-12 text-lg leading-relaxed max-w-lg">
                            Estamos listos para escucharte. Déjanos tus datos y un asesor se comunicará contigo para agendar una audición de diagnóstico gratuita.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 group-hover:bg-amber-100 transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                <div>
                                    <p className="text-xs text-neutral-400 uppercase font-bold tracking-widest mb-1">WhatsApp Directo</p>
                                    <p className="text-xl font-medium text-neutral-900">+51 925640292</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 group-hover:bg-amber-100 transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </div>
                                <div>
                                    <p className="text-xs text-neutral-400 uppercase font-bold tracking-widest mb-1">Sede Principal</p>
                                    <p className="text-xl font-medium text-neutral-900">Av. Principal 123, Miraflores, Lima</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-neutral-900 rounded-[2.5rem] rotate-2 scale-[1.02] opacity-5"></div>
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-neutral-100 shadow-2xl relative z-10 space-y-6"
                        >
                            {submitted ? (
                                <div className="py-12 text-center animate-fade-in">
                                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <h4 className="text-2xl font-bold text-neutral-900 mb-2">¡Solicitud Enviada!</h4>
                                    <p className="text-neutral-600">Nos pondremos en contacto contigo muy pronto.</p>
                                    <button
                                        type="button"
                                        onClick={() => setSubmitted(false)}
                                        className="mt-8 text-amber-600 font-bold hover:underline"
                                    >
                                        Enviar otro mensaje
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-neutral-500 uppercase ml-1">Tu Nombre</label>
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-6 py-4 rounded-2xl border border-neutral-100 bg-neutral-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                                                placeholder="Juan Pérez"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-neutral-500 uppercase ml-1">WhatsApp</label>
                                            <input
                                                required
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-6 py-4 rounded-2xl border border-neutral-100 bg-neutral-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                                                placeholder="+51 000 000 000"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-neutral-500 uppercase ml-1">Programa de Interés</label>
                                        <select
                                            name="workshop"
                                            value={formData.workshop}
                                            onChange={handleChange}
                                            className="w-full px-6 py-4 rounded-2xl border border-neutral-100 bg-neutral-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all appearance-none cursor-pointer"
                                        >
                                            <option>Enseñanza Personalizada (Vocal Coaching)</option>
                                            <option>Talleres Gratuitos</option>
                                            <option>Producción de Videoclip</option>
                                            <option>Iniciación Musical</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-neutral-500 uppercase ml-1">¿Cómo podemos ayudarte?</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full px-6 py-4 rounded-2xl border border-neutral-100 bg-neutral-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all resize-none"
                                            placeholder="Cuéntanos un poco sobre tu nivel y metas..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-5 bg-neutral-900 text-white font-bold rounded-2xl hover:bg-neutral-800 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-xl shadow-neutral-900/10 disabled:opacity-50 flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                                Enviando...
                                            </>
                                        ) : 'Enviar Solicitud'}
                                    </button>
                                </>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
