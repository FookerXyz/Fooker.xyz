
import React, { useState } from 'react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'smart-contracts' | 'whitepaper' | 'policy' | 'legal' | 'disclosure' | 'marketplace' | 'events' | 'ai' | 'faq' | 'ecosystem-architecture' | 'partners' | 'base-chain') => void;
  currentView: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const uniswapLink = "https://app.uniswap.org/swap?outputCurrency=0xc991Ba6675f3b07974c343564C2aE3E4bDf959FD&chain=base";

  const navLinks = [
    { label: 'Terminal', view: 'home' },
    { label: 'AI', view: 'ai' },
    { label: 'Marketplace', view: 'marketplace' },
    { label: 'Events', view: 'events' },
    { label: 'Core_Logic', view: 'smart-contracts' },
    { label: 'Whitepaper', view: 'whitepaper' },
    { label: 'Policy', view: 'policy' },
    { label: 'Disclosure', view: 'disclosure' },
    { label: 'Legal', view: 'legal' },
  ];

  const handleMobileNav = (view: any) => {
    onNavigate(view);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[150] py-4 lg:py-6 px-4 lg:px-10">
      {/* Main Navbar Bar */}
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-[#050505]/90 backdrop-blur-2xl border border-white/10 px-4 lg:px-8 py-2 rounded-full relative z-[151]">
        <div 
          className="flex items-center gap-2 lg:gap-3 cursor-pointer group shrink-0"
          onClick={() => handleMobileNav('home')}
        >
          <img 
            src="https://gateway.pinata.cloud/ipfs/bafybeia7yagblebsdwlhk7aijjdyjoaashlkws3jxeq2oyd4ypeaenz2ti" 
            alt="FOO" 
            className="w-10 h-10 lg:w-16 lg:h-16 object-contain logo-glow-pulse"
          />
          <span className="text-sm lg:text-xl text-white fooker-logo" style={{ fontFamily: 'Arial, sans-serif' }}>FOOKER</span>
        </div>
        
        {/* Desktop Menu */}
        <div 
          className="hidden lg:flex items-center gap-6 text-[10px] font-bold text-white uppercase tracking-[0.2em]"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          {navLinks.map((link) => (
            <button 
              key={link.view}
              onClick={() => onNavigate(link.view as any)} 
              className={`hover:opacity-70 transition-opacity ${currentView === link.view ? 'underline decoration-2 underline-offset-4 text-[#0052FF]' : ''}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a 
            href={uniswapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] lg:text-[10px] font-black bg-[#0052FF] text-white px-4 lg:px-8 py-2 lg:py-2.5 rounded-full hover:bg-[#0042CC] transition-all uppercase tracking-widest shadow-[0_0_20px_rgba(0,82,255,0.3)] shrink-0"
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
            Buy $FOO
          </a>

          {/* Hamburger Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white/90 hover:text-[#0052FF] transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu - Clean & Professional */}
      <div 
        className={`lg:hidden fixed inset-x-4 top-24 transition-all duration-300 transform origin-top z-[149] ${
          isMenuOpen 
          ? 'translate-y-0 opacity-100 scale-100 pointer-events-auto' 
          : '-translate-y-4 opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="bg-[#050505]/98 backdrop-blur-3xl border border-white/20 rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]">
          <div className="flex flex-col p-2 max-h-[75vh] overflow-y-auto scrollbar-hide">
            {navLinks.map((link, i) => (
              <button
                key={link.view}
                onClick={() => handleMobileNav(link.view as any)}
                className={`w-full text-left py-5 px-8 text-[11px] font-black uppercase tracking-[0.25em] transition-all border-b border-white/5 last:border-0 ${
                  currentView === link.view 
                  ? 'text-white bg-[#0052FF]' 
                  : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                <div className="flex justify-between items-center">
                  <span>{link.label}</span>
                  <div className={`w-1.5 h-1.5 rounded-full transition-all ${currentView === link.view ? 'bg-white' : 'bg-white/10'}`}></div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Dimmed Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-md z-[148]"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};
