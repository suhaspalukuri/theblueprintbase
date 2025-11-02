
import React, { useState, useMemo } from 'react';
import { resources } from '../data/resources';
import { ResourceModal } from './ResourceModal';

export const ResourcesPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const categories = useMemo(() => {
        const categoryMap = new Map<string, number>();
        resources.forEach(r => {
            categoryMap.set(r.category, (categoryMap.get(r.category) || 0) + 1);
        });
        return Array.from(categoryMap.entries()).map(([name, count]) => ({ name, count })).sort((a, b) => a.name.localeCompare(b.name));
    }, []);
    
    const handleCloseModal = () => {
        setSelectedCategory(null);
    };

    return (
        <>
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 animate-fade-in">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {categories.map(({ name, count }) => (
                         <div 
                            key={name}
                            onClick={() => setSelectedCategory(name)} 
                            className="block group cursor-pointer"
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedCategory(name); }}
                         >
                            <div className="bg-base-200 rounded-xl h-full flex flex-col justify-center items-center p-6 transition-all duration-300 border border-base-300 min-h-[120px]">
                                <h3 className="text-xl font-bold text-content-100 text-center" title={name}>
                                    {name}
                                </h3>
                                <p className="text-sm text-content-200 mt-2">{count} Resource{count > 1 ? 's' : ''}</p>
                            </div>
                         </div>
                    ))}
                </div>
            </main>
            <ResourceModal
                isOpen={!!selectedCategory}
                category={selectedCategory}
                onClose={handleCloseModal}
            />
        </>
    );
};