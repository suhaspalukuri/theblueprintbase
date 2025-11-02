
import React, { useState } from 'react';
import { CloseIcon, MenuIcon } from './Icons';

type Page = 'home' | 'tips' | 'about' | 'resources';

interface HeaderProps {
    onNavigate: (page: Page) => void;
    currentPage: Page;
}

export const Header: React.FC<HeaderProps> = ({
    onNavigate,
    currentPage,
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavigate = (page: Page) => {
        onNavigate(page);
        setIsMenuOpen(false);
    };

    const navLinkClasses = (page: Page) => {
        const baseClasses = "text-md font-medium transition-colors";
        const activeClasses = "text-content-100";
        const inactiveClasses = "text-content-200 hover:text-content-100";
        return `${baseClasses} ${currentPage === page ? activeClasses : inactiveClasses}`;
    };

    const mobileNavLinkClasses = (page: Page) => {
        const baseClasses = "text-left w-full py-2 font-medium transition-colors";
        const activeClasses = "text-content-100";
        const inactiveClasses = "text-content-200 hover:text-content-100";
        return `${baseClasses} ${currentPage === page ? activeClasses : inactiveClasses}`;
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-base-100/80 backdrop-blur-md z-10 border-b border-base-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <div className="flex justify-between items-center">
                    {/* Left Section */}
                    <div className="flex-1 flex justify-start">
                        <button onClick={() => handleNavigate('home')} className="flex items-center gap-2" aria-label="Go to homepage">
                            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-content-white">
                                The Blueprint Base
                            </h1>
                        </button>
                    </div>

                    {/* Center Section (Desktop) */}
                    <div className="hidden lg:flex flex-1 justify-center items-center gap-8">
                        <button 
                            onClick={() => handleNavigate('tips')}
                            className={navLinkClasses('tips')}
                        >
                            Design Tips
                        </button>

                        <button 
                            onClick={() => handleNavigate('resources')}
                            className={navLinkClasses('resources')}
                        >
                            Resources
                        </button>

                        <button 
                            onClick={() => handleNavigate('about')}
                            className={navLinkClasses('about')}
                        >
                            About us
                        </button>
                        
                        <a 
                            href="mailto:contact@theblueprintbase.com"
                            className="text-md font-medium text-content-200 hover:text-content-100 transition-colors"
                        >
                            Contact us
                        </a>
                    </div>
                    
                    {/* Right Section */}
                    <div className="flex-1 flex justify-end">
                        {/* Mobile/Tablet Menu Button */}
                        <div className="lg:hidden">
                            <button 
                                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                                className="p-2 rounded-md text-content-200 hover:bg-base-300"
                                aria-label="Toggle menu"
                                aria-expanded={isMenuOpen}
                            >
                                {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile/Tablet Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-4 pt-4 border-t border-base-300">
                        <div className="flex flex-col gap-4">
                            <button 
                                onClick={() => handleNavigate('tips')}
                                className={mobileNavLinkClasses('tips')}
                            >
                                Design Tips
                            </button>

                            <button 
                                onClick={() => handleNavigate('resources')}
                                className={mobileNavLinkClasses('resources')}
                            >
                                Resources
                            </button>

                             <button 
                                onClick={() => handleNavigate('about')}
                                className={mobileNavLinkClasses('about')}
                            >
                                About us
                            </button>
                            
                            <a 
                                href="mailto:contact@theblueprintbase.com"
                                className="text-left w-full py-2 font-medium text-content-200 hover:text-content-100 transition-colors"
                            >
                                Contact us
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};
