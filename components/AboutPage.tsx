
import React from 'react';

const socialLinks = [
    { name: 'X', url: 'https://x.com/TheSuhasPal' },
    { name: 'Instagram', url: 'https://www.instagram.com/thesuhaspal/' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/suhaspalukuri/' },
];

export const AboutPage: React.FC = () => {
    return (
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 animate-fade-in">
            <div className="max-w-2xl">
                <p className="text-content-200 leading-relaxed mb-8 text-justify">
Welcome to The Blueprint Base—an initiative created by The Half Idea, a dedicated design studio and community.</p>
<p className="text-content-200 leading-relaxed mb-8 text-justify">
We founded this platform because, as practitioners, we constantly encountered the same frustration: designers wasting valuable time hunting for actionable advice and reliable assets. We believe the path from "half an idea" to a polished product shouldn't be blocked by confusion. That's why we distilled our studio's collective knowledge into the Base. Here, you get over 100 practical design tips—the exact principles we use every day—organized into digestible, immediate steps. Crucially, we pair this core knowledge with a curated library of essential, ready-to-use resources and assets from our own toolkit.</p>
                <p className="text-content-200 leading-relaxed mb-8 text-justify">
The Blueprint Base is more than just a list; it’s our way of scaling the expertise of The Half Idea to help the entire design community. Our mission is to eliminate guesswork, allowing you to stop debugging your processes and start shipping beautiful, usable projects with the solid foundation you deserve. Build better, together.</p>
                <div className="flex flex-wrap items-center gap-6">
                    {socialLinks.map(link => (
                        <a 
                            key={link.name}
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="font-medium text-content-200 hover:text-brand-primary transition-colors duration-200"
                            aria-label={`Visit our ${link.name} profile`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </main>
    );
};
