
import React, { useState, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { TipDetailModal } from './components/TipDetailModal';
import { AboutPage } from './components/AboutPage';
import { ResourcesPage } from './components/ResourcesPage';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { TipsPage } from './components/TipsPage';
import { tips as allTips } from './data/tips';
import type { Tip } from './types';

type Page = 'home' | 'tips' | 'about' | 'resources';

const getPageFromPath = (path: string): Page => {
    switch (path) {
        case '/tips':
            return 'tips';
        case '/about':
            return 'about';
        case '/resources':
            return 'resources';
        case '/':
        default:
            return 'home';
    }
};

const App: React.FC = () => {
    const [selectedTip, setSelectedTip] = useState<Tip | null>(null);
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    
    const page = useMemo(() => getPageFromPath(currentPath), [currentPath]);

    useEffect(() => {
        const onPopState = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', onPopState);
        return () => {
            window.removeEventListener('popstate', onPopState);
        };
    }, []);

    const handleNavigate = (pageToNavigate: Page) => {
        const pathMap: Record<Page, string> = {
            home: '/',
            tips: '/tips',
            about: '/about',
            resources: '/resources',
        };
        const newPath = pathMap[pageToNavigate];
        if (window.location.pathname !== newPath) {
            window.history.pushState({ page: pageToNavigate }, '', newPath);
            setCurrentPath(newPath);
        }
    };

    const handleCloseModal = () => {
        setSelectedTip(null);
    };

    const handleTipSelect = (tip: Tip) => {
        setSelectedTip(tip);
    };

    const selectedTipIndex = useMemo(() => {
        if (!selectedTip) return -1;
        return allTips.findIndex(t => t.id === selectedTip.id);
    }, [selectedTip]);

    const handleNextTip = () => {
        if (selectedTipIndex === -1) return;
        const nextIndex = (selectedTipIndex + 1) % allTips.length;
        setSelectedTip(allTips[nextIndex]);
    };

    const handlePreviousTip = () => {
        if (selectedTipIndex === -1) return;
        const prevIndex = (selectedTipIndex - 1 + allTips.length) % allTips.length;
        setSelectedTip(allTips[prevIndex]);
    };

    return (
        <div className="min-h-screen bg-base-100 font-sans flex flex-col">
            <Header
                onNavigate={handleNavigate}
                currentPage={page}
            />
            
            {page === 'home' ? (
                <HeroSection onNavigate={handleNavigate} />
            ) : (
                <main className="flex-grow">
                    {page === 'tips' && <TipsPage tips={allTips} onTipSelect={handleTipSelect} />}
                    {page === 'about' && <AboutPage />}
                    {page === 'resources' && <ResourcesPage />}
                </main>
            )}

            {page !== 'home' && <Footer />}

            <TipDetailModal
                tip={selectedTip}
                isOpen={!!selectedTip}
                onClose={handleCloseModal}
                onNext={handleNextTip}
                onPrevious={handlePreviousTip}
            />
        </div>
    );
};

export default App;
