
import React from 'react';

type Page = 'home' | 'tips' | 'about' | 'resources';

interface HeroSectionProps {
    onNavigate: (page: Page) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
    return (
        <div className="fixed inset-0 z-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-4xl md:text-6xl font-bold text-content-100 mb-8 animate-fade-in max-w-4xl" style={{ animationDelay: '0.2s' }}>
                Access actionable practices alongside a curated library of design resources
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <button
                    onClick={() => onNavigate('tips')}
                    className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                    Explore Design Tips
                </button>
                <button
                    onClick={() => onNavigate('about')}
                    className="bg-base-300/50 text-content-100 px-8 py-3 rounded-lg font-medium hover:bg-base-300/80 transition-colors"
                >
                    About The Project
                </button>
            </div>
        </div>
    );
};
