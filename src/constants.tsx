
import type { Workshop, NavItem } from './types';

export const WHATSAPP_NUMBER = '+51925640292';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`;

export const NAV_ITEMS: NavItem[] = [
    { label: 'Talleres Gratuitos', href: '#talleres' },
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Enseñanza Personalizada', href: '#personalizada' },
    { label: 'Contacto', href: '#contacto' },
];

export const WORKSHOPS: Workshop[] = [
    {
        id: '1',
        title: 'Desenvolvimiento Escénico',
        description: 'Pierde el miedo y domina el escenario con técnicas de actuación y presencia corporal.',
        icon: '🎭'
    },
    {
        id: '2',
        title: 'Coro Polifónico',
        description: 'Aprende a armonizar tu voz en conjunto y experimenta la potencia del canto grupal.',
        icon: '👥'
    },
    {
        id: '3',
        title: 'Armonías Vocales',
        description: 'Entiende la teoría detrás de los arreglos y crea capas sonoras impresionantes.',
        icon: '🎼'
    },
    {
        id: '4',
        title: 'Ensamble Musical',
        description: 'Toca y canta junto a otros instrumentos en un entorno de banda real.',
        icon: '🎸'
    },
    {
        id: '5',
        title: 'Ensayos Generales',
        description: 'Sesiones dirigidas para perfeccionar tu repertorio antes de las presentaciones.',
        icon: '🎙️'
    }
];
