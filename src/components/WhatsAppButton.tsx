
import React, { useState } from 'react';
import { WHATSAPP_URL } from '../constants';

const WhatsAppButton: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex items-center gap-3">
            {isHovered && (
                <div className="bg-neutral-900 text-white px-4 py-2 rounded-lg text-sm font-medium animate-fade-in shadow-xl whitespace-nowrap">
                    ¡Inscríbete aquí! 🎤
                </div>
            )}
            <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform duration-300"
            >
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-2.32 0-4.519.903-6.16 2.544-1.64 1.64-2.543 3.838-2.543 6.158 0 2.32.903 4.519 2.544 6.16 1.64 1.64 3.838 2.543 6.158 2.543 2.32 0 4.519-.903 6.16-2.544 1.64-1.64 2.544-3.838 2.544-6.159 0-2.32-.904-4.519-2.544-6.16-1.641-1.64-3.84-2.543-6.159-2.543zm0-1.25c5.07 0 9.188 4.117 9.188 9.188 0 5.071-4.118 9.188-9.188 9.188-5.071 0-9.188-4.117-9.188-9.188 0-5.071 4.117-9.188 9.188-9.188zM8.547 8.547c.563-.563 1.313-.873 2.109-.873.796 0 1.546.31 2.11.873.563.563.873 1.313.873 2.109 0 .796-.31 1.546-.873 2.11-.564.563-1.314.873-2.11.873-.796 0-1.546-.31-2.109-.873-.563-.564-.873-1.314-.873-2.11s.31-1.546.873-2.109z" fill="none" /><path d="M17.472 14.382c-.301-.15-1.781-.879-2.056-.979-.275-.1-.475-.15-.675.15-.199.299-.775.979-.95 1.174-.175.195-.349.219-.65.069-.301-.15-1.269-.468-2.417-1.492-.892-.795-1.493-1.777-1.669-2.077-.175-.3-.018-.463.132-.612.135-.133.301-.35.451-.525.15-.175.199-.299.299-.499.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.243-.584-.489-.505-.675-.514-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.899 1.225 3.099.15.2 2.115 3.231 5.125 4.531.716.31 1.274.495 1.708.634.719.228 1.374.196 1.892.118.577-.087 1.781-.727 2.031-1.43.25-.702.25-1.303.175-1.43-.075-.125-.275-.199-.575-.349z" /></svg>
            </a>
        </div>
    );
};

export default WhatsAppButton;
