import React from 'react';
import type { Tip } from '../types';

interface TipCardProps {
    tip: Tip;
    onTipSelect: (tip: Tip) => void;
}

export const TipCard: React.FC<TipCardProps> = ({ tip, onTipSelect }) => {
    return (
        <div 
            onClick={() => onTipSelect(tip)} 
            className="block group cursor-pointer"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onTipSelect(tip); }}
        >
            <div className="bg-base-200 rounded-xl h-full flex flex-col transition-all duration-300">
                <div className="p-4 flex flex-col flex-grow">
                     <div className="mb-3">
                        <h3 className="text-lg font-bold text-content-100 transition-colors truncate" title={tip.title}>
                            {tip.title}
                        </h3>
                    </div>
                    <p className="text-sm text-content-200 mt-1 flex-grow">{tip.description.substring(0, 100)}...</p>
                </div>
            </div>
        </div>
    );
};
