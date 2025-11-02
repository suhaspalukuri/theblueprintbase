import React, { useEffect } from 'react';
import { resources } from '../data/resources';
import { CloseIcon } from './Icons';

interface ResourceModalProps {
    category: string | null;
    isOpen: boolean;
    onClose: () => void;
}

export const ResourceModal: React.FC<ResourceModalProps> = ({ category, isOpen, onClose }) => {
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen || !category) return null;

    const filteredResources = resources.filter(resource => resource.category === category);

    return (
        <div 
            className="fixed inset-0 bg-black backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={onClose}
        >
            <div 
                className="bg-base-100 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col animate-slide-up border border-base-300"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="resource-category-title"
            >
                <div className="sticky top-0 bg-base-100 p-4 flex justify-between items-center border-b border-base-300 z-10 flex-shrink-0">
                    <h2 id="resource-category-title" className="text-xl font-bold text-content-100 flex-1 truncate pr-4" title={category}>
                        {category} Resources
                    </h2>
                    <button onClick={onClose} className="p-2 rounded-full text-content-200 hover:bg-base-300 transition-colors" aria-label="Close modal">
                        <CloseIcon className="w-6 h-6" />
                    </button>
                </div>
                
                <div className="flex-grow overflow-y-auto">
                    <div className="bg-base-100">
                        {/* Table Header */}
                        <div className="sticky top-0 grid grid-cols-12 gap-4 p-4 border-b border-base-300 font-bold text-content-200 bg-base-200/80 backdrop-blur-sm z-10">
                            <div className="col-span-1 text-left">S.No</div>
                            <div className="col-span-9 text-left">Name</div>
                            <div className="col-span-2 text-left">Link</div>
                        </div>
                        {/* Table Body */}
                        <div>
                            {filteredResources.length > 0 ? (
                                filteredResources.map((resource, index) => (
                                    <div key={resource.id} className="grid grid-cols-12 gap-4 p-4 items-center border-b border-base-300 last:border-b-0 hover:bg-base-200/50 transition-colors">
                                        <div className="col-span-1 text-content-200">{index + 1}</div>
                                        <div className="col-span-9 text-content-100 font-medium truncate" title={resource.name}>{resource.name}</div>
                                        <div className="col-span-2 text-left">
                                            <a 
                                                href={resource.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-white hover:underline font-medium"
                                                aria-label={`Visit ${resource.name}`}
                                            >
                                                Visit Link →
                                            </a>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="p-8 text-center text-content-200">
                                    <p>No resources found in this category.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};