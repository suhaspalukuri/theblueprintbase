
import React from 'react';
import { TipCard } from './TipCard';
import type { Tip } from '../types';

interface TipsPageProps {
    tips: Tip[];
    onTipSelect: (tip: Tip) => void;
}

export const TipsPage: React.FC<TipsPageProps> = ({ tips, onTipSelect }) => {
    return (
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {tips.map(tip => (
                    <TipCard
                        key={tip.id}
                        tip={tip}
                        onTipSelect={onTipSelect}
                    />
                ))}
            </div>
        </main>
    );
};
