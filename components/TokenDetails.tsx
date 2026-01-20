
import React, { useState } from 'react';

export const TokenDetails: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0xc991Ba6675f3b07974c343564C2aE3E4bDf959FD";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-6 lg:py-12 max-w-7xl mx-auto px-4 lg:px-6">
      
      {/* Narrative Section - Re-sized and bolded per request */}
      <div className="mb-8 lg:mb-12 px-2 lg:px-4 text-center lg:text-left">
        <h2 
          className="text-3xl sm:text-5xl lg:text-6xl font-black mb-4 lg:mb-6 tracking-tighter uppercase italic text-white drop-shadow-xl"
          style={{ fontFamily: '"Arial Black", "Arial Bold", Gadget, sans-serif' }}
        >
          What is <span className="text-[#0052FF]">$FOO</span> ?
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white/90 leading-relaxed max-w-5xl drop-shadow-md mx-auto lg:mx-0">
          <span className="text-white font-black uppercase tracking-tight">Fooker (FOO)</span> is a community-driven memecoin born from the harsh reality of the crypto world. 
          Built on Base, FOO uses memes as a weapon to build something real—from merchandise like clothing to internal ecosystem tools. 
          With no owner and no centralized control, Fooker is a long-term Web3 project designed for degens, by degens.
        </p>
      </div>

      {/* Stats and Security Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-sm shadow-2xl">
        
        {/* Tokenomics & Contract Block */}
        <div className="lg:col-span-12 p-6 lg:p-12 bg-[#050505]/40 backdrop-blur-xl flex flex-col justify-between border-white/10 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#0052FF]/5 blur-[120px] pointer-events-none"></div>
          
          <div className="mb-10 lg:mb-12 relative z-10 w-full">
            <span className="text-[9px] sm:text-[10px] font-mono text-[#0052FF] tracking-[0.3em] uppercase mb-4 block font-bold">Circulating Metrics</span>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 text-center lg:text-left">
              <div className="flex items-baseline gap-2 lg:gap-4">
                <h3 className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter text-white">270.0M</h3>
                <span className="text-base sm:text-xl lg:text-2xl font-mono text-white/30">FOO</span>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10">
                <div className="hidden lg:block h-16 w-[1px] bg-white/10"></div>
                <div className="text-center sm:text-right">
                  <span className="text-[10px] lg:text-xs font-black text-[#22c55e] uppercase tracking-[0.2em] block leading-tight">Liquidity Pool</span>
                  <span className="text-[8px] lg:text-[10px] font-mono text-white/30 uppercase tracking-[0.15em] block mt-1">Community Controlled</span>
                </div>
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36">
                  <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90 filter drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                    <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(34, 197, 94, 0.1)" strokeWidth="2.5" />
                    <circle 
                      cx="18" cy="18" r="16" 
                      fill="none" 
                      stroke="#22c55e" 
                      strokeWidth="2.5" 
                      strokeDasharray="100, 100" 
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xs sm:text-sm lg:text-xl font-black text-[#22c55e]">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 sm:space-y-6 relative z-10 w-full">
            <div className="flex items-center gap-4 ml-1">
               <span className="text-[9px] sm:text-[10px] font-mono text-[#0052FF] tracking-[0.4em] uppercase font-bold">Verified Contract ID</span>
               <div className="h-[1px] flex-1 bg-white/10"></div>
            </div>

            <button 
              onClick={handleCopy}
              className={`group relative flex flex-col md:flex-row items-center justify-between w-full p-4 sm:p-6 lg:p-10 border-2 transition-all backdrop-blur-md overflow-hidden rounded-xl gap-4 ${
                copied 
                ? 'border-[#27C93F] bg-[#27C93F]/10' 
                : 'border-white/20 hover:border-[#0052FF] bg-white/5'
              }`}
            >
              <div className="flex-1 w-full overflow-hidden text-center md:text-left">
                <p className={`font-mono text-[10px] sm:text-sm md:text-2xl lg:text-4xl font-bold tracking-tight break-all transition-colors duration-300 ${copied ? 'text-[#27C93F]' : 'text-white'}`}>
                  {contractAddress}
                </p>
              </div>
              
              <div className="flex items-center gap-4 md:gap-6 md:border-l border-white/10 md:pl-8 shrink-0">
                 <div className="flex flex-col items-center">
                    {copied ? (
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-10 lg:h-10 text-[#27C93F] animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                    ) : (
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-10 lg:h-10 text-white/20 group-hover:text-[#0052FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                        </svg>
                    )}
                 </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
