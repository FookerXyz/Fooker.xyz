import React from 'react';

export const EventsView: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-20 px-6">
      <div className="max-w-3xl text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter gradient-text uppercase" style={{ fontFamily: '"Arial Black", sans-serif' }}>
          Latest Events
        </h1>
        <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light">
          All latest events and community updates are shared directly on our official X account. 
          Stay tuned to the pulse of the FOOKER ecosystem.
        </p>
        <div className="pt-8">
          <a 
            href="https://x.com/fooker_eth" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-white text-black font-black px-12 py-5 rounded-full hover:bg-[#0052FF] hover:text-white transition-all uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(255,255,255,0.1)] group"
          >
            <span>Follow Updates on X</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};