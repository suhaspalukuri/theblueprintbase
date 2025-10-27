
import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { TipCard } from './components/TipCard';
import { TipDetailModal } from './components/TipDetailModal';
import { AboutPage } from './components/AboutPage';
import { Footer } from './components/Footer';
import { tips as allTips } from './data/tips';
import type { Tip } from './types';

const App: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTip, setSelectedTip] = useState<Tip | null>(null);
    const [page, setPage] = useState<'home' | 'about'>('home');

    const filteredTips = useMemo(() => {
        return allTips.filter(tip => {
            const matchesSearch =
                tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                tip.description.toLowerCase().includes(searchTerm.toLowerCase());
            
            return matchesSearch;
        });
    }, [searchTerm]);

    const handleCloseModal = () => {
        setSelectedTip(null);
    };

    const handleTipSelect = (tip: Tip) => {
        setSelectedTip(tip);
    };

    const selectedTipIndex = useMemo(() => {
        if (!selectedTip) return -1;
        return filteredTips.findIndex(t => t.id === selectedTip.id);
    }, [selectedTip, filteredTips]);

    const handleNextTip = () => {
        if (selectedTipIndex === -1) return;
        const nextIndex = (selectedTipIndex + 1) % filteredTips.length;
        setSelectedTip(filteredTips[nextIndex]);
    };

    const handlePreviousTip = () => {
        if (selectedTipIndex === -1) return;
        const prevIndex = (selectedTipIndex - 1 + filteredTips.length) % filteredTips.length;
        setSelectedTip(filteredTips[prevIndex]);
    };

    return (
        <div className="min-h-screen bg-base-100 font-sans flex flex-col">
            <Header
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                onNavigate={setPage}
            />
            <div className="flex-grow">
                {page === 'home' ? (
                     <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-8 sm:pt-20">
                        {filteredTips.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {filteredTips.map(tip => (
                                    <TipCard
                                        key={tip.id}
                                        tip={tip}
                                        onTipSelect={handleTipSelect}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <h2 className="text-2xl font-bold text-content-100">No Tips Found</h2>
                                <p className="text-content-200 mt-2">Try adjusting your search.</p>
                            </div>
                        )}
                    </main>
                ) : (
                    <AboutPage />
                )}
            </div>

            <Footer />

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