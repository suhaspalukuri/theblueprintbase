import React from 'react';

export const AboutPage: React.FC = () => {
    return (
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 animate-fade-in">
            <div className="max-w-2xl">
                <p className="text-content-200 leading-relaxed mb-8 text-justify">
                    Welcome to The Blueprint Base—an initiative created by The Half Idea, a dedicated design studio and community.
</p>
<p className="text-content-200 leading-relaxed mb-8 text-justify">
We founded this platform because, as practitioners, we constantly encountered the same frustration: designers wasting valuable time hunting for actionable advice and reliable resources. We believe the path from "half an idea" to a polished product shouldn't be blocked by confusion. That's why we distilled our studio's collective knowledge into the Base. Here, you get over 100 practical design tips—the exact principles we use every day—organized into digestible, immediate steps. Crucially, we pair this core knowledge with essential resources listed by exploring the web.</p>

                <p className="text-content-200 leading-relaxed mb-8 text-justify">
The Blueprint Base is more than just a list; it’s our way of scaling the expertise of The Half Idea to help the entire design community. Our mission is to eliminate guesswork, allowing you to stop debugging your processes and start shipping beautiful, usable projects with the solid foundation you deserve. Build better, together.                
                <div className="mt-12 pt-8 border-t border-base-300">
                    
                    <div className="flex items-center gap-2 text-lg text-content-100">
                        <a href="https://www.linkedin.com/in/suhaspalukuri/" target="_blank" rel="noopener noreferrer" className="font-semibold transition-colors hover:text-white hover:underline">Suhas Palukuri</a>
                        <span className="text-content-200">&</span>
                        <a href="https://www.linkedin.com/in/kavyaarohi/" target="_blank" rel="noopener noreferrer" className="font-semibold transition-colors hover:text-white hover:underline">Kavya Arohi</a>
                    </div>
                </div>
            </div>
        </main>
    );
};
