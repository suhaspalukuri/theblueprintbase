
import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="w-full py-4 border-t border-base-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
                <p className="text-sm text-content-200">
                    &copy; {new Date().getFullYear()} The Blueprint Base by{' '}
                    <a 
                        href="https://thehalfidea.in" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-medium hover:text-brand-primary transition-colors"
                    >
                        The Half Idea
                    </a>
                </p>
            </div>
        </footer>
    );
};
