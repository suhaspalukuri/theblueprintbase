import React from 'react';

export const AboutPage: React.FC = () => {
    return (
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 animate-fade-in">
            <div className="max-w-2xl">
                <p className="text-content-200 leading-relaxed mb-8 text-justify">
                    The Blueprint Base is your quick-reference manual for building effective digital experiences, moving you from abstract theory to immediate application. The tips are rigorously organized into logical categories like Visual Aesthetics, Usability, and Accessibility, allowing you to audit your work strategically. If you’re starting a new project, begin with the Usability & Interaction tips to lock down the core functionality first, ensuring your design is fast and clear. If you’re polishing existing work, use the Visual Aesthetics & Polish tips as a final quality assurance check for alignment, contrast, and spacing. By using the short, memorable titles—like "Mind the Edges" or "One Primary Action"—as immediate mental checklists, you keep the design process grounded, efficient, and user-focused.
</p>
<p className="text-content-200 leading-relaxed mb-8 text-justify">
For continuous improvement, treat the Base as a progressive learning tool rather than just a simple list. Design professionals can use the Details & Accessibility and Efficiency & Process categories as essential pre-launch checklists to ensure all ethical and operational requirements are met. When facing a creative block or needing to solve a specific problem, simply jump to the relevant category to find a targeted, concise solution. Ultimately, the power of the Base lies in its structure: it ensures you systematically cover every aspect of great design, helping you build solid, human-centered products every single time.
                </p>
                
                <div className="mt-12 pt-8 border-t border-base-300">
                    <h3 className="text-xl font-bold text-content-100 mb-6">Crafted by</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                            <p className="text-lg font-semibold text-content-100">Suhas Palukuri</p>
                            <div className="flex items-center gap-4 mt-2">
                                <a href="https://x.com/TheSuhasPal" target="_blank" rel="noopener noreferrer" className="font-medium text-content-200 hover:text-brand-primary transition-colors">X</a>
                                <a href="https://www.instagram.com/thesuhaspal/" target="_blank" rel="noopener noreferrer" className="font-medium text-content-200 hover:text-brand-primary transition-colors">Instagram</a>
                                <a href="https://www.linkedin.com/in/suhaspalukuri/" target="_blank" rel="noopener noreferrer" className="font-medium text-content-200 hover:text-brand-primary transition-colors">LinkedIn</a>
                            </div>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-content-100">Kavya Arohi</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
