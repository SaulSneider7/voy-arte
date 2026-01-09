import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isSolid = isScrolled || isMenuOpen;

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
            ${isSolid ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                {/* Logo */}
                <a href="#" className="flex items-center gap-2">
                    <span
                        className={`text-2xl font-serif font-bold tracking-tight transition-colors
                        ${isSolid ? 'text-neutral-900' : 'text-white'}`}
                    >
                        Voz<span className="text-amber-400">&</span>Arte
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={`text-sm font-medium transition-colors
                            ${isSolid
                                    ? 'text-neutral-600 hover:text-amber-600'
                                    : 'text-white/80 hover:text-white'
                                }`}
                        >
                            {item.label}
                        </a>
                    ))}

                    <a
                        href="#contacto"
                        className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all
                        ${isSolid
                                ? 'bg-neutral-900 text-white hover:bg-neutral-800'
                                : 'border border-white/40 text-white hover:bg-white hover:text-neutral-900'
                            }`}
                    >
                        Matricúlate
                    </a>
                </div>

                {/* Hamburger */}
                <button
                    className={`md:hidden p-2 transition-colors
                    ${isSolid ? 'text-neutral-900' : 'text-white'}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-neutral-100
                transition-all duration-300 overflow-hidden
                ${isMenuOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0'}`}
            >
                <div className="flex flex-col px-6 gap-6">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-lg font-medium text-neutral-800 hover:text-amber-600"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href="#contacto"
                        className="w-full py-4 bg-neutral-900 text-white text-center font-bold rounded-xl"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Matricúlate ahora
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
