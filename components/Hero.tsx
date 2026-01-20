
import React from 'react';

export const Hero: React.FC = () => {
  const marqueeItems = [
    { label: "NETWORK", value: "BASE (L2)" },
    { label: "OWNERSHIP", value: "PERMISSIONLESS" },
    { label: "USE CASE", value: "P2P PAYMENTS" },
    { label: "CONTROL", value: "NONE" },
    { label: "IMMUTABLE", value: "NO BACKDOORS" },
    { label: "CAPPED", value: "HARD LIMIT" },
    { label: "COMMUNITY", value: "ORGANIC GROWTH" },
  ];

  // Doubling the items for seamless loop
  const loopItems = [...marqueeItems, ...marqueeItems];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 lg:pt-20 overflow-hidden grid-bg">
      {/* Cinematic Background Glows */}
      <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-[#0052FF]/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] bg-[#6E00FF]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center w-full">
        <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mt-4 lg:mt-12 mb-6 lg:mb-12 shadow-[0_0_15px_rgba(255,255,255,0.05)] max-w-full">
          <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-white rounded-full animate-pulse shadow-[0_0_8px_#ffffff] shrink-0"></div>
          <span 
            className="text-[8px] sm:text-[9px] lg:text-[11px] font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.6)] truncate"
            style={{ fontFamily: '"Arial Black", "Arial Bold", Gadget, sans-serif' }}
          >
            → Hold if you believe. Use it if it makes sense.
          </span>
        </div>

        <span 
          className="block text-[#0052FF] text-[10px] sm:text-xs lg:text-sm font-black uppercase tracking-[0.5em] mb-2 lg:mb-4 opacity-80"
          style={{ fontFamily: '"Arial Black", "Arial Bold", Gadget, sans-serif' }}
        >
          Welcome to
        </span>

        <h1 
          className="text-[13vw] md:text-8xl lg:text-[11rem] font-black tracking-tighter leading-[0.8] mb-6 lg:mb-12 text-white drop-shadow-2xl italic glitch"
          data-text="FOOKER"
          style={{ fontFamily: '"Arial Black", "Arial Bold", Gadget, sans-serif' }}
        >
          FOOKER
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-white/90 leading-relaxed mb-10 drop-shadow-md px-2">
            A cryptographic evolution of the memetic asset class. <br className="hidden md:block" />
            Architected as a permissionless primitive on the Base L2 stack, engineered for high-assurance <br className="hidden md:block" />
            peer-to-peer coordination within an emerging decentralized commerce paradigm. <br />
            <span className="text-[#0052FF] font-bold uppercase text-[10px] sm:text-sm lg:text-lg mt-4 block tracking-[0.2em]">The definitive upgrade. Non-custodial. Immutable. Pure logic.</span>
          </p>
        </div>

        {/* Continuous Looping Marquee */}
        <div className="relative w-full border-t border-b border-white/10 overflow-hidden bg-black/10 py-6 sm:py-10">
          <div className="flex w-max animate-loop-scroll">
            {loopItems.map((item, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center justify-center px-12 sm:px-20 border-r border-white/10 group hover:bg-white/5 transition-colors shrink-0"
              >
                <span className="text-[7px] sm:text-[8px] lg:text-[10px] font-mono text-[#0052FF] mb-2 font-bold tracking-[0.3em] uppercase whitespace-nowrap">
                  {item.label}
                </span>
                <span className="text-[10px] sm:text-xs md:text-lg font-bold text-center text-white whitespace-nowrap">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          
          {/* Subtle side gradients for masking the edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none"></div>
        </div>
      </div>
      
      <div className="absolute left-1/2 top-0 w-[1px] h-full bg-white/5 -translate-x-1/2 hidden lg:block"></div>
    </section>
  );
};
