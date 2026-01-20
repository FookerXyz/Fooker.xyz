import React from 'react';

interface FooterProps {
  onNavigate: (view: 'home' | 'smart-contracts' | 'whitepaper' | 'policy' | 'legal' | 'disclosure' | 'marketplace' | 'events' | 'ai' | 'faq' | 'ecosystem-architecture' | 'partners' | 'base-chain') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const arialBlackStyle = { fontFamily: '"Arial Black", Gadget, sans-serif', fontWeight: 'bold' };

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 lg:gap-3">
              {/* Main Logos - Slightly smaller for elegance */}
              <img 
                src="https://gateway.pinata.cloud/ipfs/bafybeia7yagblebsdwlhk7aijjdyjoaashlkws3jxeq2oyd4ypeaenz2ti" 
                alt="Fooker" 
                className="w-6 h-6 lg:w-7 lg:h-7 object-contain opacity-60 cursor-pointer hover:opacity-100 transition-opacity"
                onClick={() => onNavigate('home')}
              />
              <img 
                src="https://gateway.pinata.cloud/ipfs/bafkreifsdjxg2hfyfunvjsp2dskbxquykixg2iavterxhe44p5sks5h77m" 
                alt="FookerNetwork" 
                className="w-6 h-6 lg:w-7 lg:h-7 object-contain opacity-60 cursor-pointer hover:opacity-100 transition-opacity"
                onClick={() => onNavigate('home')}
              />
              
              {/* Separator */}
              <div className="w-[1px] h-5 bg-white/10 mx-2"></div>
              
              {/* Base Chain Logo - Resized and nudged slightly upwards for perfect alignment */}
              <img 
                src="https://gateway.pinata.cloud/ipfs/bafkreialueb6twhgrcl2k7bzrvifqepaxht4cjbfigmvfgquh4dflkwhda" 
                alt="Base Chain" 
                className="w-12 h-12 lg:w-14 lg:h-14 object-contain opacity-100 cursor-pointer hover:scale-105 transition-all drop-shadow-[0_0_15px_rgba(0,82,255,0.3)] relative -top-0.5 lg:-top-1"
                onClick={() => onNavigate('base-chain')}
              />
            </div>
            <span 
              className="text-[9px] text-white/50 uppercase tracking-widest hidden sm:block"
              style={{ ...arialBlackStyle, fontStyle: 'italic' }}
            >
              FOOKER.ETH© 2026
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 md:border-l border-white/10 md:pl-6">
             {['policy', 'disclosure', 'legal', 'faq', 'ecosystem-architecture', 'partners'].map((v) => (
               <button 
                 key={v}
                 onClick={() => onNavigate(v as any)} 
                 className="text-[9px] md:text-[10px] text-white/60 hover:text-white uppercase tracking-tighter transition-all"
                 style={arialBlackStyle}
               >
                 {v.replace('-', ' ')}
               </button>
             ))}
          </div>
        </div>
        
        <div className="flex gap-8 items-center">
          <a href="https://x.com/fooker_eth" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/>
            </svg>
          </a>
          <a href="https://t.me/FookersEth" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0C5.346 0 0 5.346 0 11.944c0 6.598 5.346 11.944 11.944 11.944 6.598 0 11.944-5.346 11.944-11.944C23.888 5.346 18.542 0 11.944 0zm5.83 7.846l-2.022 9.54c-.15.674-.552.842-1.118.524l-3.08-2.272-1.486 1.43c-.164.164-.3.302-.614.302l.22-3.13 5.698-5.148c.248-.22-.054-.344-.382-.126l-7.042 4.434-3.03-.948c-.658-.206-.67-.658.138-.974l11.85-4.566c.548-.2.928.148.788.854z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};