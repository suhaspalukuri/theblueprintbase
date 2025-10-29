
import React, { useEffect } from 'react';
import type { Tip } from '../types';
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface TipDetailModalProps {
    tip: Tip | null;
    isOpen: boolean;
    onClose: () => void;
    onNext: () => void;
    onPrevious: () => void;
}

export const TipDetailModal: React.FC<TipDetailModalProps> = ({ tip, isOpen, onClose, onNext, onPrevious }) => {
    
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') {
                onNext();
            } else if (e.key === 'ArrowLeft') {
                onPrevious();
            } else if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onNext, onPrevious, onClose]);
    
    if (!isOpen || !tip) return null;

    return (
        <div 
            className="fixed inset-0 bg-black backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={onClose}
        >
            <button 
                onClick={(e) => {
                    e.stopPropagation();
                    onPrevious();
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 rounded-full text-white bg-black/20 hover:bg-black/40 transition-colors z-[51]"
                aria-label="Previous tip"
            >
                <ChevronLeftIcon className="w-6 h-6" />
            </button>
            
            <div 
                className="bg-base-100 rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col animate-slide-up border border-base-300"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="tip-title"
            >
                <div className="sticky top-0 bg-base-100 p-4 flex justify-between items-center border-b border-base-300 z-10 flex-shrink-0">
                    <h2 id="tip-title" className="text-xl font-bold text-content-100 flex-1 truncate pr-4" title={tip.title}>
                        {tip.title}
                    </h2>
                    <div className="flex items-center flex-shrink-0">
                        <button onClick={onClose} className="p-2 rounded-full text-content-200 hover:bg-base-300 transition-colors" aria-label="Close modal">
                            <CloseIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>
                
                <div className="p-6 flex-grow overflow-y-auto">
                    <p className="text-content-100 leading-relaxed whitespace-pre-wrap">{tip.description}</p>
                </div>

                <div className="p-3 border-t border-base-300 flex-shrink-0">
                    <p className="text-center text-xs text-content-200 flex items-center justify-center gap-1.5">
                        You can use
                        <kbd className="px-1.5 py-0.5 font-sans font-semibold text-content-200 bg-base-200 border border-base-300 rounded-md">←</kbd>
                        and
                        <kbd className="px-1.5 py-0.5 font-sans font-semibold text-content-200 bg-base-200 border border-base-300 rounded-md">→</kbd>
                        to navigate between tips.
                    </p>
                </div>
            </div>

            <button 
                onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 rounded-full text-white bg-black/20 hover:bg-black/40 transition-colors z-[51]"
                aria-label="Next tip"
            >
                <ChevronRightIcon className="w-6 h-6" />
            </button>
        </div>
    );
};
