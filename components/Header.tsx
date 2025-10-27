import React, { useState } from 'react';
import { SearchIcon, CloseIcon, MenuIcon } from './Icons';

interface HeaderProps {
    searchTerm: string;
    onSearchChange: (term: string) => void;
    onNavigate: (page: 'home' | 'about') => void;
}

export const Header: React.FC<HeaderProps> = ({
    searchTerm,
    onSearchChange,
    onNavigate,
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavigate = (page: 'home' | 'about') => {
        onNavigate(page);
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-base-100/80 backdrop-blur-md z-10 border-b border-base-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <div className="flex justify-between items-center">
                    {/* Left Section */}
                    <div className="flex-1 flex justify-start">
                        <button onClick={() => handleNavigate('home')} className="flex items-center gap-2" aria-label="Go to homepage">
                            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-content-100">
                                The Blueprint Base
                            </h1>
                        </button>
                    </div>

                    {/* Center Section (Desktop/Tablet) */}
                    <div className="hidden md:flex flex-1 justify-center items-center gap-8">
                        <button 
                            onClick={() => handleNavigate('about')}
                            className="text-sm font-bold text-content-200 hover:text-content-100 transition-colors"
                        >
                            About us
                        </button>
                        <a 
                            href="mailto:contact@thehalfidea.in"
                            className="text-sm font-bold text-content-200 hover:text-content-100 transition-colors"
                        >
                            Contact us
                        </a>
                    </div>
                    
                    {/* Right Section */}
                    <div className="flex-1 flex justify-end">
                         {/* Desktop/Tablet Search */}
                        <div className="hidden md:block relative w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Search tips..."
                                value={searchTerm}
                                onChange={(e) => onSearchChange(e.target.value)}
                                className="w-full pl-10 pr-10 py-2 rounded-lg bg-base-200 border border-base-300 focus:outline-none transition"
                            />
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-content-200">
                                <SearchIcon className="w-5 h-5" />
                            </div>
                            {searchTerm && (
                                <button
                                    onClick={() => onSearchChange('')}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-content-200 hover:text-content-100 transition-colors"
                                    aria-label="Clear search"
                                >
                                    <CloseIcon className="w-5 h-5" />
                                </button>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
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

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pt-4 border-t border-base-300">
                        <div className="flex flex-col gap-4">
                             <button 
                                onClick={() => handleNavigate('about')}
                                className="text-left w-full py-2 font-medium text-content-200 hover:text-content-100 transition-colors"
                            >
                                About us
                            </button>
                            <a 
                                href="mailto:contact@theblueprintbase.com"
                                className="text-left w-full py-2 font-medium text-content-200 hover:text-content-100 transition-colors"
                            >
                                Contact us
                            </a>
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="Search tips..."
                                    value={searchTerm}
                                    onChange={(e) => onSearchChange(e.target.value)}
                                    className="w-full pl-10 pr-10 py-2 rounded-lg bg-base-200 border border-base-300 focus:outline-none transition"
                                />
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-content-200">
                                    <SearchIcon className="w-5 h-5" />
                                </div>
                                {searchTerm && (
                                    <button
                                        onClick={() => onSearchChange('')}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-content-200 hover:text-content-100 transition-colors"
                                        aria-label="Clear search"
                                    >
                                        <CloseIcon className="w-5 h-5" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};